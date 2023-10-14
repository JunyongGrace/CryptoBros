from fastapi import FastAPI, Request
from web3 import Web3
import os
from solcx import compile_standard, install_solc
import json
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Response
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import Optional
from datetime import datetime



# URL_DB = ''
# engine = create_engine(URL_DB)
# sessionLocal = sessionmaker(autocommit = False, autoflush= False, bind=engine)
# Base = declarative_base()

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
# Default is 1337 or with the PORT in your Gaanche
chain_id = 1337
# Find in you account (Get this from Ganache)
my_address = w3.eth.accounts[0]
# Find in you account (Get this from Ganache)
private_key = "0x18d0049a270b9c841d0c5a062a6803144f1d9f003e13b4699970d17082422ebe"

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
# print(transaction)
tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

@app.get("/transaction/")
async def funcTest1(request=Request , sender: Optional[str] = None, pk: Optional[str] = None, receiver: Optional[str] = None, amount: Optional[float] = None):
    simple_storage = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)
    # print(tx_receipt)
    print(amount)
    
    # For transaction
    transaction = {
        'from': my_address,
        "value": w3.to_wei(1, 'ether')
    }
    
    receiver = w3.eth.accounts[1]
    
    # Send Ether to the contract's function
    transaction_hash = simple_storage.functions.sendEther(receiver).transact(transaction=transaction)
    
    print(transaction_hash)
    
    # Wait for the initial transaction to be mined
    w3.eth.wait_for_transaction_receipt(transaction_hash)
    # print(tx_receipt)
    
    # signed_store_txn = w3.eth.account.sign_transaction(transaction_hash.hex(), private_key=private_key)
    # send_store_tx = w3.eth.send_raw_transaction(signed_store_txn.rawTransaction)
    # tx_receipt = w3.eth.wait_for_transaction_receipt(send_store_tx)
    
    
    transactions_length = simple_storage.functions.getTransactionCount().call()
    
    print(transactions_length)
    
    print(simple_storage.functions.getAllTransactions().call()[0][0])
    
    output = {
        "tx": transaction_hash.hex(),
        "sender": my_address,
        "balance": w3.eth.get_balance(my_address)*(10**(-18)),
        "receiver": receiver,
        "transaction": simple_storage.functions.getAllTransactions().call(),
        "time": datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
        
        
        
    }
    
    return JSONResponse(content=jsonable_encoder(output), status_code=status.HTTP_201_CREATED)


