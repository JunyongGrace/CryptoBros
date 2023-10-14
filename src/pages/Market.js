import * as React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/Market.css';
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchList from '../components/SearchList';
import Footer from '../components/Footer';
import imageError from '../images/imageError.png'; // Tell webpack this JS file uses this image

function Market({ onPurchase, ethBalance }) {

  // States to manage NFT data, sorting, and purchase alerts
  const [nftData, setNftData] = useState([]);
  const [originalNftData, setOriginalNftData] = useState([]); // Store a copy of the original data
  const [purchaseAlert, setPurchaseAlert] = useState({ open: false, title: '', content: '', type: 'success' });
  const [sortOrder, setSortOrder] = useState('');
  const [noResults, setNoResults] = useState(false);

  // Fetch NFT data from the server when the component mounts
  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/Nft/')
      .then((response) => {
        setNftData(response.data);
        setOriginalNftData(response.data); // Set the original data when the component mounts
      })
      .catch((error) => {
        console.error('Error fetching NFT data:', error);
      });
  }, []);

  // Create an array of NFT card components
  const items = nftData.map((item, index) => {
    const handlePurchase = () => {
      // Function to handle the purchase of an NFT
      if (ethBalance >= item.price) {
        const updatedEthBalance = ethBalance - item.price;
        onPurchase(updatedEthBalance, item);
        setPurchaseAlert({ open: true, title: 'Success', content: `You purchased ${item.nftName} for ${item.price} ETH.`, type: 'success' });
      } else {
        setPurchaseAlert({ open: true, title: 'Error', content: 'Insufficient ETH balance to make the purchase.', type: 'error' });
      }
    };

    // Render an NFT card
    return (
      <Grid item xs={6} sm={4} md={3} key={index}>
        <div className="card">
          {item.urlToImg ? ( // Check if urlToImg is not null
            <img className="card--photo" src={item.urlToImg} alt={item.nftName} />
          ) : (
            <img className="card--photo" src={imageError} alt={item.nftName} />
          )}
          <p className="card--title">{item.nftName}</p>
          <p>
            <Button onClick={handlePurchase} variant="contained" color="primary">
              Purchase: {item.price} ETH
            </Button>
          </p>
        </div>
      </Grid>
    );
  });
  // Function to handle sorting of NFTs
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...nftData].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (order === 'ascending') {
        return priceA - priceB;
      } else if (order === 'descending') {
        return priceB - priceA;
      }
    });
    setNftData(sorted);
  };

  // Function to filter NFTs by category
  const filterNFTsByCategory = (category) => {
    let filteredNFTs;
    if (category === 'All') {
      // If 'All' is selected, display all NFTs
      setNftData(originalNftData);
      setNoResults(false); // Reset the noResults state
    } else {
      // Filter NFTs by the selected category
      filteredNFTs = originalNftData.filter((nft) => nft.category === category);
      setNftData(filteredNFTs);

      // Check if there are no results after filtering
      setNoResults(!filteredNFTs || filteredNFTs.length === 0);
    }
  };

  return (
    <>
      <Container>
        <SearchList onPurchase={onPurchase} ethBalance={ethBalance} />
        <h2>Market</h2>
        <Container>
          {/* Add sorting buttons */}
          <div style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px' }}>
            <Button onClick={() => handleSort('ascending')} style={{ marginRight: '10px' }} variant="outlined">Sort by Price (Low to High)</Button>
            <Button onClick={() => handleSort('descending')} variant="outlined">Sort by Price (High to Low)</Button>
          </div>
          <Container>
            <Grid container spacing={12} direction="row" justifyContent="space-evenly">
              {items}
            </Grid>
          </Container>
        </Container>
        {/* Display the pop-up alert using Dialog component */}
        <Dialog open={purchaseAlert.open} onClose={() => setPurchaseAlert({ ...purchaseAlert, open: false })
        }>
          <DialogTitle style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.title}</DialogTitle>
          <DialogContent style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.content}</DialogContent>
          <DialogActions>
            <Button onClick={() => setPurchaseAlert({ ...purchaseAlert, open: false })} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Footer/>
    </>
  );
}

export default Market;
