from fastapi import FastAPI, Request
from web3 import Web3
import os
from solcx import compile_standard, install_solc
import json
from fastapi.middleware.cors import CORSMiddleware
from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import Optional
from datetime import datetime
from dbConnection import get_database_connection
import mysql.connector

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,  
    allow_methods=["*"],     
    allow_headers=["*"]     
)

# type your address here
w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
# Read Smart Contract
with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()

# Install the right compiler version
install_solc("0.6.0")
compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    },
    solc_version="0.6.0",
)

# Write the transaction in a json format to compiled_code.json file
with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

# get bytecode
bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"]["bytecode"]["object"]

# get abi
abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

tx_receipt = None

try:
    connection = get_database_connection()
    if connection is None:
        print(f'{"error": "Failed to connect to the database."}')
    cursor = connection.cursor()
    
    sqlResetTran = f"TRUNCATE TABLE Transaction"
    cursor.execute(sqlResetTran)
    connection.commit()
    
    sqlUpdateNFT = f"UPDATE Nft SET userId = %s"
    val = (1,)
    cursor.execute(sqlUpdateNFT, val)
    connection.commit()
    
    sqlUpdateUser = f"UPDATE User SET nftBalance = %s WHERE userId = %s"
    val = (100, 2)
    cursor.execute(sqlUpdateUser, val)
    connection.commit()
    
    sqlUpdateUser = f"UPDATE User SET userAddr = %s WHERE userId = %s"
    val = (w3.eth.accounts[9], 1)
    cursor.execute(sqlUpdateUser, val)
    connection.commit()
    
except mysql.connector.Error as err:
    print(f'{"error": f"Error: {err}"}')
    
@app.get("/transaction/get/")
async def make_Transaction(request=Request , sender: Optional[str] = None, pk: Optional[str] = None, receiver: Optional[str] = None, amount: Optional[float] = None, senderId: Optional[int] = None, nftId: Optional[int] = None):
    receiver = w3.eth.accounts[9]
    
    try:
        connection = get_database_connection()
        if connection is None:
            return {"error": "Failed to connect to the database."}
        cursor = connection.cursor()
        
        sqlUpdateNFT = f"UPDATE User SET userAddr = %s, privateKey = %s, nftBalance = %s WHERE userId = %s"
        val = (sender, pk, w3.eth.get_balance(sender)*(10**(-18)), 2)
        cursor.execute(sqlUpdateNFT, val)
        connection.commit()
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
    global tx_receipt
    if (not tx_receipt):    
        # Default is 1337 or with the PORT in your Gaanche
        chain_id = 1337
        # Find in you account (Get this from Ganache)
        my_address = sender
        # Find in you account (Get this from Ganache)
        private_key = pk

        SimpleStorage = w3.eth.contract(address=my_address, abi=abi, bytecode=bytecode)

        nonce = w3.eth.get_transaction_count(my_address)

        transaction = SimpleStorage.constructor().build_transaction(
            {
                "chainId": chain_id,
                "gasPrice": w3.eth.gas_price,
                "from": my_address,
                "nonce": nonce,
            }
        )
        transaction.pop('to')

        signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)
        tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    
    simple_storage = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)
    
    print(type(simple_storage))
    
    # For transaction
    transaction = {
        'from': sender,
        "value": w3.to_wei(amount, 'ether')
    }
    
    # Send Ether to the contract's function
    transaction_hash = simple_storage.functions.sendEther(receiver).transact(transaction=transaction)
    if (not transaction_hash):
        return JSONResponse(content=jsonable_encoder({"error": "User Address not found"}), status_code=status.HTTP_404_NOT_FOUND)
    
    # Wait for the initial transaction to be mined
    w3.eth.wait_for_transaction_receipt(transaction_hash)
    
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    transactions_length = simple_storage.functions.getTransactionCount().call()
    balance = w3.eth.get_balance(sender)*(10**(-18))
    
    sqlInsert = f"INSERT INTO Transaction (purchTime, userId, receiverAddr, tranHash) VALUES (%s, %s, %s, %s)"
    val = (time, senderId, receiver, transaction_hash.hex())
    cursor.execute(sqlInsert, val)
    connection.commit()
    
    sqlUpdateNFT = f"UPDATE Nft SET userId = %s WHERE nftId = %s"
    val = (senderId, nftId)
    cursor.execute(sqlUpdateNFT, val)
    connection.commit()
    
    sqlUpdateUser = f"UPDATE User SET nftBalance = %s WHERE userId = %s"
    val = (balance, 2)
    cursor.execute(sqlUpdateUser, val)
    connection.commit()
    
    sqlUpdateUser = f"UPDATE User SET nftBalance = %s WHERE userId = %s"
    val = (w3.eth.get_balance(receiver)*(10**(-18)), 1)
    cursor.execute(sqlUpdateUser, val)
    connection.commit()
    
    cursor.close()
    connection.close()
    
    print(balance)
    print(time)
    
    output = {
        "tx": transaction_hash.hex(),
        "sender": sender,
        "balance": balance,
        "receiver": receiver,
        "amount": simple_storage.functions.getAllTransactions().call()[transactions_length - 1][2]*(10**(-18)),
        "time": time,
        "transactions": simple_storage.functions.getAllTransactions().call(),
        "length": transactions_length
    }
    
    return JSONResponse(content=jsonable_encoder(output), status_code=status.HTTP_201_CREATED)
    

@app.get("/nft/get/")
async def get_Nft(request=Request , id: Optional[int] = None):
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}
        
        cursor = connection.cursor()
        if (not id):
            query = "SELECT * FROM Nft"
            cursor.execute(query)
            result = cursor.fetchall()
            Nft = [dict(zip(cursor.column_names, row)) for row in result]
        else:
            query = "SELECT * FROM Nft WHERE userId = %s"
            val = (id,)
            cursor.execute(query, val)
            result = cursor.fetchall()
            Nft = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return Nft

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/portfolio/get")
async def get_Portfolio(request=Request , id: Optional[int] = None):
    if (not id): return JSONResponse(content=jsonable_encoder({"error": "UserID not found"}), status_code=status.HTTP_404_NOT_FOUND)
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}

        cursor = connection.cursor()
        query = f"SELECT * FROM Nft WHERE userId = %s"
        val = (id,)
        cursor.execute(query, val)
        result = cursor.fetchall()
        Nft = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return Nft
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/transactions/get/")
async def get_Transaction(request=Request , id: Optional[int] = None):
    if (not id): return JSONResponse(content=jsonable_encoder({"error": "UserID not found"}), status_code=status.HTTP_404_NOT_FOUND)
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}

        cursor = connection.cursor()
        query = f"SELECT * FROM Transaction WHERE userId = %s"
        val = (id,)
        cursor.execute(query, val)
        result = cursor.fetchall()
        transactions = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return transactions
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
@app.get("/user/get/")
async def get_User(request=Request , id: Optional[int] = None):
    if (not id): return JSONResponse(content=jsonable_encoder({"error": "UserID not found"}), status_code=status.HTTP_404_NOT_FOUND)
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}

        cursor = connection.cursor()
        query = "SELECT * FROM User WHERE userId = %s"
        val = (id,)
        cursor.execute(query, val)
        result = cursor.fetchall()
        user = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return user

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
# @app.get("/User")
# def get_User():
#     try:
#         # Establish a database connection using the imported function
#         connection = get_database_connection()

#         if connection is None:
#             return {"error": "Failed to connect to the database."}

#         cursor = connection.cursor()
#         query = "SELECT * FROM User"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         Nft = [dict(zip(cursor.column_names, row)) for row in result]
#         cursor.close()
#         connection.close()

#         return Nft

#     except mysql.connector.Error as err:
#         return {"error": f"Error: {err}"}