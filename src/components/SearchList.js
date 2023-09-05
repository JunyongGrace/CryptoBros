import React, { useState, useEffect } from 'react';
import SearchBar from '../pages/SearchBar';
import data from '../data/Data';
import '../styles/SearchList.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const SearchList = ({ onPurchase, ethBalance }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [noMatches, setNoMatches] = useState(false);
    const [sortOrder, setSortOrder] = useState('');
    const [purchaseAlert, setPurchaseAlert] = useState({ open: false, title: '', content: '', type: 'success' });

    useEffect(() => {
        if (filteredData.length > 0) {
            // Apply the 'show' class to trigger the opacity transition
            const timer = setTimeout(() => {
                const items = document.querySelectorAll('.nft-item');
                items.forEach(item => {
                    item.classList.add('show');
                });
            }, 100); // Adjust the delay to match your desired transition timing

            return () => clearTimeout(timer);
        }
    }, [filteredData]);

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setFilteredData([]); // Clear filtered data if query is empty
            setNoMatches(false); // Reset noMatches state
        } else {
            const searchRegex = new RegExp(`\\b${query.toLowerCase()}`);
            const filtered = data.filter(item =>
                searchRegex.test(item.title.toLowerCase())
            );
            setFilteredData(filtered);
            setNoMatches(filtered.length === 0); // Update noMatches state
        }
    };

    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredData].sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            if (order === 'ascending') {
                return priceA - priceB;
            } else if (order === 'descending') {
                return priceB - priceA;
            }
        });
        setFilteredData(sorted);
    };

    const handlePurchase = (item) => {
        if (ethBalance >= item.price) {
            // Deduct the price from the ETH balance
            const updatedEthBalance = ethBalance - item.price;

            // Trigger the purchase by calling the onPurchase function
            onPurchase(updatedEthBalance, item);

            // Show a success alert
            setPurchaseAlert({ open: true, title: 'Success', content: `You purchased ${item.title} for ${item.price} ETH.`, type: 'success' });
        } else {
            // Show an error alert
            setPurchaseAlert({ open: true, title: 'Error', content: 'Insufficient ETH balance to make the purchase.', type: 'error' });
        }
    };

    const handleCloseAlert = () => {
        setPurchaseAlert({ ...purchaseAlert, open: false });
    };

    return (
        <div>
            {/* SearchBar component */}
            <SearchBar onSearch={handleSearch} onSort={handleSort} />
            <div className="nft-grid">
                {/* Display filtered and sorted data */}
                {noMatches ? (
                    <p>No matches found for your search.</p>
                ) : (
                    filteredData.map(item => (
                        <div key={item.img} className="nft-item">
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price} ETH</p>
                            <p>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handlePurchase(item)}
                                >
                                    Purchase: {item.price}ETH
                                </Button>
                            </p>
                        </div>
                    ))
                )}
            </div>
            {/* Display the pop-up alert using Dialog component */}
            <Dialog open={purchaseAlert.open} onClose={handleCloseAlert}>
                <DialogTitle style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>
                    {purchaseAlert.title}
                </DialogTitle>
                <DialogContent style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>
                    {purchaseAlert.content}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAlert} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SearchList;