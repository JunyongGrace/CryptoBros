import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddressInfo from './AddressInfo';
import '../styles/Transactions.css'

const columns = [
    {
        field: 'id',
        headerName: 'Hash',
        width: 275
    },
    {
        field: 'time',
        headerName: 'Time',
        type: 'dateTime',
        width: 200
    },
    {
        field: 'from',
        headerName: 'From',
        width: 275
    },
    {
        field: 'to',
        headerName: 'To',
        width: 275
    },
    {
        field: 'value',
        headerName: 'Value',
        width: 200
    },
    {
        field: 'fee',
        headerName: 'Fee',
        width: 100
    }
];

const rows = [
    { id: '0x3de2d6f293dc032c0b6bcb05b309aca8d8dad38f11e32c48f43ba43ff0a5a8dd', time: new Date('2023-08-26 3:56:47'), from: '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5', to: '0xeBec795c9c8bBD61FFc14A6662944748F299cAcf', value: '0.21150917 ETH', fee: '0.00024477' },
    { id: '0x3561c468fbce2e547cb6a584a113e0c819b6fc8ffa95fa90dbbab7bf9da8ac77', time: new Date('2023-08-26 4:37:11'), from: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.05990724 ETH', fee: '0.0002485' },
    { id: '0xa6d0d8eeef652a248ea873a8db0b27fa4c41198770d02d53c31cf31119ec2f81', time: new Date('2023-08-26 4:36:47'), from: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.05626699 ETH', fee: '0.00024038' },
    { id: '0x85bd139840e44a785104eaab4e69c7d3b38d49a9d76e1f7af25c2874bf364bf6', time: new Date('2023-08-26 4:30:35'), from: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.0696915 ETH', fee: '0.00025631' },
    { id: '0xb6c57dea7e9939b492f6e8aa186f5eebdc3bc8511abf5dfe72f731a81676e9ec', time: new Date('2023-08-26 4:30:23'), from: '0x7aDc0e867EBc337E2d20c44DB181c067fA08637b', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.83670626 ETH', fee: '0.00027136' },
    { id: '0x84e41197de61b60a26f045255e5bf7193e9f412d3fc83c95d05d940665bc48c9', time: new Date('2023-08-26 4:28:23'), from: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.059189 ETH', fee: '0.00026805' },
    { id: '0xc0fac6bade5123a0c95790f5f84c354fd6356115ec39d472c5d5eedc29a2e99c', time: new Date('2023-08-26 4:27:59'), from: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.03749589 ETH', fee: '0.00027537' },
    { id: '0x40fea3ef1cca7e6cf720d559d20d9e534271f3eb16dc2fd8fdf210eb933702d0', time: new Date('2023-08-26 4:18:35'), from: '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97', to: '0xe688b84b23f322a994A53dbF8E15FA82CDB71127', value: '0.01962719 ETH', fee: '0.00029142' },
    { id: '0xa947258ac066cdb90c6044f08504679c278b8bae86381937f21fec12d5ac25ed', time: new Date('2023-08-26 4:15:11'), from: '0x333333f332a06ECB5D20D35da44ba07986D6E203', to: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', value: '0.04268369 ETH', fee: '0.00030489' },
];

const Transactions = () => {
    return (
        <div>

            <header>
                {/* <Navbar currentPage={1} /> */}
                <AddressInfo />
            </header>
            <div class="transactions">
                <Box class="grid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                            sorting: {
                                sortModel: [{ field: 'time', sort: 'desc' }]
                            }
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    );
}

export default Transactions;