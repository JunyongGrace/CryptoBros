// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
    }

    Transaction[] public transactions;

    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Function to send Ether to a specified receiver with a specific value
     // Function to send Ether to a specified receiver with a specific value
    function sendEther(address payable _receiver) external payable {
        require(msg.value > 0, "Invalid Ether amount sent");
        require(_receiver != address(0), "Invalid receiver address");
        
        _receiver.transfer(msg.value);
        emit Transfer(msg.sender, _receiver, msg.value);
        
        // Store transaction information
        Transaction memory newTransaction = Transaction({
            sender: msg.sender,
            receiver: _receiver,
            amount: msg.value
        });
        transactions.push(newTransaction);
    }

    // Function to get the number of stored transactions
    function getTransactionCount() external view returns (uint256) {
        return transactions.length;
    }

    // Function to all stored transactions
    function getAllTransactions() external view returns (Transaction[] memory) {
        return transactions;
    }

    // Function to get details of a specific transaction by index
    function getTransaction(uint256 _index) external view returns (address, address, uint256) {
        require(_index < transactions.length, "Transaction index out of bounds");
        Transaction storage transaction = transactions[_index];
        return (transaction.sender, transaction.receiver, transaction.amount);
    }
}
