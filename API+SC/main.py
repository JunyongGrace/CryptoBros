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

@app.get("/transaction/get/")
async def getTransaction(request=Request , sender: Optional[str] = None, pk: Optional[str] = None, receiver: Optional[str] = None, amount: Optional[float] = None, senderId: Optional[int] = None, nftId: Optional[int] = None):
    global tx_receipt
    if (not tx_receipt):    
        # Default is 1337 or with the PORT in your Gaanche
        chain_id = 1337
        # Find in you account (Get this from Ganache)
        my_address = w3.eth.accounts[5]
        # Find in you account (Get this from Ganache)
        private_key = "0x555b56ea3ab677c71c937f733a3411ca60f7cdbd23c968e1e094876c20aa3c33"

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
        'from': w3.eth.accounts[5],
        "value": w3.to_wei(1, 'ether')
    }
    
    receiveR = w3.eth.accounts[1]
    
    # Send Ether to the contract's function
    transaction_hash = simple_storage.functions.sendEther(receiveR).transact(transaction=transaction)
    
    print(transaction_hash)
    
    # Wait for the initial transaction to be mined
    w3.eth.wait_for_transaction_receipt(transaction_hash)
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    transactions_length = simple_storage.functions.getTransactionCount().call()
    
    print(transactions_length)
    
    print(simple_storage.functions.getAllTransactions().call()[0][0])
    
    try:
        connection = get_database_connection()
        if connection is None:
                return {"error": "Failed to connect to the database."}
        cursor = connection.cursor()
        sqlInsert = f"INSERT INTO Transaction (purchTime, senderAddr, receiverAddr, tranHash) VALUES (%s, %s, %s, %s)"
        val = (time, w3.eth.accounts[5], receiveR, transaction_hash.hex())
        cursor.execute(sqlInsert, val)
        connection.commit()
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
    sqlUpdate = f"UPDATE Nft SET userId = %s WHERE nftId = %s"
    val = (2, 3)
    cursor.execute(sqlUpdate, val)
    connection.commit()
    
    cursor.close()
    connection.close()
    
    output = {
        "tx": transaction_hash.hex(),
        "sender": w3.eth.accounts[5],
        "balance": w3.eth.get_balance(w3.eth.accounts[5])*(10**(-18)),
        "receiver": receiveR,
        "amount": simple_storage.functions.getAllTransactions().call()[transactions_length - 1][2]*(10**(-18)),
        "time": time,
        "transactions": simple_storage.functions.getAllTransactions().call(),
        "length": transactions_length
    }
    
    return JSONResponse(content=jsonable_encoder(output), status_code=status.HTTP_201_CREATED)


@app.get("/nft/get/")
def get_Nft():
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}

        cursor = connection.cursor()
        query = "SELECT * FROM Nft"
        cursor.execute(query)
        result = cursor.fetchall()
        Nft = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return Nft

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}