
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AddressInfo.css';
import { Avatar } from '@mui/material';
import avatar from '../images/avatar.svg';

const AddressInfo = ({ ethBalance, userName }) => {
    return (
        <div className="address-overview">
            <Avatar
                sx={{ backgroundColor: '#0ba4d4', width: '3cm', height: '3cm', marginTop: '7px' }}
            >
                <img src={avatar} alt="User Avatar" className="avatar" />
            </Avatar>
            <span className="address-details">
                <p className="address">Name: {userName}</p>
                <p className="balance">
                    <span className="balance-text">Balance</span>
                    <span className="eth-balance">
                        {ethBalance !== null ? ethBalance + ' ETH' : 'Loading...'}
                    </span>
                    <span className="balance-text">$AUD</span>
                    <span className="eth-balance">
                        {ethBalance !== null ? (ethBalance * 2532.52) : 'Loading...'}
                    </span>
                </p>
            </span>
        </div>
    );
};

AddressInfo.propTypes = {
    ethBalance: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
};

export default AddressInfo;