import React, { useState, useEffect } from 'react';
import SearchBar from '../pages/SearchBar';
import axios from 'axios'; // Import Axios
import '../styles/SearchList.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import image if there is issue with photo url link use this local image
import imageError from '../images/imageError.png'; // Tell webpack this JS file uses this image

const SearchList = ({ onPurchase, ethBalance }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [originalData, setOriginalData] = useState([]); // Store the original NFT data
    const [noMatches, setNoMatches] = useState(false);
    const [sortOrder, setSortOrder] = useState('');
    const [purchaseAlert, setPurchaseAlert] = useState({ open: false, nftName: '', content: '', type: 'success' });

    useEffect(() => {
        // This effect should run whenever searchQuery or filteredData changes
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
    }, [searchQuery, filteredData]);

    // this function ask axios to get to endpoint and fetch all the data in this case NFTs metadata
    const fetchNFTData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/nft/get/');
            const nftData = response.data;
            return nftData;
            // error handling
        } catch (error) {
            console.error('Error fetching NFT data:', error);
            return [];
        }
    };

    useEffect(() => {
        async function fetchData() {
            const nftData = await fetchNFTData();
            setFilteredData(nftData);
            setOriginalData(nftData); // Store the original data
        }
        fetchData();
    }, []); // Fetch NFT data when the component mounts

    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredData(originalData); // Restore original data if query is empty
            setNoMatches(false); // Reset noMatches state
        } else {
            const searchRegex = new RegExp(`\\b${query.toLowerCase()}`);
            const filtered = originalData.filter(item =>
                searchRegex.test(item.nftName.toLowerCase()) // Use nftName for searching
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
            setPurchaseAlert({ open: true, nftName: 'Success', content: `You purchased ${item.nftName} for ${item.price} ETH.`, type: 'success' });
        } else {
            // Show an error alert
            setPurchaseAlert({ open: true, nftName: 'Error', content: 'Insufficient ETH balance to make the purchase.', type: 'error' });
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
                {/* Display filtered and sorted data only if there's a search query */}
                {searchQuery.trim() === '' ? (
                    <p>Enter a search query to find NFTs.</p>
                ) : noMatches ? (
                    <p>No matches found for your search.</p>
                ) : (
                    // filter through all nfts
                    filteredData.map(item => (
                        <div key={item.nftId} className="nft-item">
                            {/* check if iamge exists */}
                            {item.urlToImg ? (
                                <img src={item.urlToImg} alt={item.nftName} />
                            ) : (
                                // if there is issue with photo url link use this local image
                                <img src={imageError} alt={item.nftName} />
                            )
                            }
                            <h3>{item.nftName}</h3>
                            <p>{item.price} ETH</p>
                            <p>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handlePurchase(item)}
                                >
                                    Purchase: {item.price} ETH
                                </Button>
                            </p>
                        </div>
                    ))
                )}
            </div>
            {/* Display the pop-up alert using Dialog component */}
            <Dialog open={purchaseAlert.open} onClose={handleCloseAlert}>
                <DialogActions style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>
                    {purchaseAlert.nftName}
                </DialogActions>
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