import * as React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/Market.css';
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchList from '../components/SearchList';
import Footer from '../components/Footer';
import imageError from '../images/imageError.png'; // Tell webpack this JS file uses this image
import { useNavigate } from 'react-router';


function Market({ onPurchase, ethBalance }) {
  // States to manage NFT data, sorting, and purchase alerts
  const [nftData, setNftData] = useState([]);
  const [originalNftData, setOriginalNftData] = useState([]); // Store a copy of the original data
  const [purchaseAlert, setPurchaseAlert] = useState({ open: false, title: '', content: '', type: 'success' });
  const [sortOrder, setSortOrder] = useState('');
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  console.log(ethBalance);

  // Fetch NFT data from the server when the component mounts
  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/nft/get/')
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
    // Function to handle the purchase of an NFT
    const handlePurchase = () => {
      if (ethBalance >= item.price) {
        const updatedEthBalance = ethBalance - item.price;
        onPurchase(updatedEthBalance, item);
        setPurchaseAlert({ open: true, title: 'Success', content: `You purchased ${item.nftName} for ${item.price} ETH.`, type: 'success' });
        // Navigate to the "Trade" page and pass the selected NFT data
        navigate('/Trade', { state: { nft: item } });
      } else {
        setPurchaseAlert({ open: true, title: 'Error', content: 'Insufficient ETH balance to make the purchase.', type: 'error' });
      }
    };

    // Render an NFT card
    return (
      <Grid item xs={5} lg={3} key={index}>
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
      <SearchList onPurchase={onPurchase} ethBalance={ethBalance} />
      <h2>Market</h2>
      <div>
        {/* Sorting buttons */}
        <div style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px' }}>
          <Button onClick={() => handleSort('ascending')} style={{ marginRight: '10px' }} variant="outlined">
            Sort by Price (Low to High)
          </Button>
          <Button onClick={() => handleSort('descending')} variant="outlined">
            Sort by Price (High to Low)
          </Button>
        </div>
        {/* Category filter buttons */}
        <div style={{ textAlign: 'left', marginLeft: '100px', marginBottom: '20px', textAlign: 'center' }}>
          <Button onClick={() => filterNFTsByCategory('All')} style={{ marginLeft: '90px', marginRight: '15px' }} variant="outlined">
            All
          </Button>
          <Button onClick={() => filterNFTsByCategory('Music')} style={{ marginRight: '15px' }} variant="outlined">
            Music
          </Button>
          <Button onClick={() => filterNFTsByCategory('Art')} style={{ marginRight: '15px' }} variant="outlined">
            Art
          </Button>
          <Button onClick={() => filterNFTsByCategory('History')} style={{ marginRight: '15px' }} variant="outlined">
            History
          </Button>
          <Button onClick={() => filterNFTsByCategory('Entertainment')} variant="outlined">
            Entertainment
          </Button>
        </div>
        <Container>
          <Grid container spacing={12}>
            {noResults ? (
              <div className="no-results">No NFTs in this category</div>
            ) : (
              items
            )}
          </Grid>
        </Container>
      </div>
      <Dialog open={purchaseAlert.open} onClose={() => setPurchaseAlert({ ...purchaseAlert, open: false })}>
        <DialogTitle style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.title}</DialogTitle>
        <DialogContent style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.content}</DialogContent>
        <DialogActions>
          <Button onClick={() => setPurchaseAlert({ ...purchaseAlert, open: false })} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
}

export default Market;