import React from 'react';
import '../styles/AddressInfo.css'
import { Avatar } from '@mui/material';
import avatar from '../../images/avatar.svg';

const AddressInfo = () => {
    return (
        <div class="address-overview">
            <Avatar sx={{ backgroundColor: '#BDBDBD', width: '3cm', height: '3cm', marginTop: '7px' }}>
                <img src={avatar} class="avatar" />
            </Avatar>
            <span class="address-details">
                <p class="address"> 0x5124fcC2B3F99F571AD67D075643C743F38f1C34</p>
                <p class="balance"><span class="balance-text">Balance</span><span class="eth-balance">6.578947571800593192 ETH</span><span>US$10,868.29</span></p>
            </span>
        </div>
    );
}

export default AddressInfo;