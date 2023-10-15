import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import '../styles/Transactions.css';

const columns = [
    {
        field: 'TranId', // Replace with your database column name
        headerName: 'Transaction ID',
        width: 200,
    },
    {
        field: 'userId', // Replace with your database column name
        headerName: 'User ID',
        width: 200,
    },
    {
        field: 'purchTime', // Replace with your database column name
        headerName: 'Purchase Time',
        width: 275,
    },
    {
        field: 'receiverAddr', // Replace with your database column name
        headerName: 'Receiver Address',
        width: 275,
    },
    {
        field: 'tranHash', // Replace with your database column name
        headerName: 'Transaction Hash',
        width: 400,
    },
];

const Transactions = () => {
    const [rows, setRows] = useState([]);

    const getRowId = (row) => row.TranId; // Use the TranId as the unique ID

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/transactions/get/?id=2') // Update the API endpoint accordingly
            .then((response) => {
                const transactionsData = response.data;
                setRows(transactionsData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <header>
                {/* <Navbar currentPage={1} /> */}
            </header>
            <div className="transactions">
                <Box className="grid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        autoHeight
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                        sortingOrder={['desc', 'asc']}
                        getRowId={getRowId} // Specify the custom getRowId function
                    />
                </Box>
            </div>
        </div>
    );
};

export default Transactions;
