import * as React from 'react';
import { useState } from 'react';
import data from '../data/Data';
import '../styles/Market.css';
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; // Import the Dialog component
import SearchList from '../components/SearchList';
import Footer from '../components/Footer';


function Market({ onPurchase, ethBalance }) {
  const [purchaseAlert, setPurchaseAlert] = useState({ open: false, title: '', content: '', type: 'success' });
  const [sortOrder, setSortOrder] = useState(''); // Initialize sorting order state
  const [nftData, setNftData] = useState([...data]); // Initialize NFT data state

  const items = nftData.map((item, index) => {
    const handlePurchase = () => {
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

    return (
      <Grid item xs={5} lg={3} key={index}>
        <div className="card">
          <img className="card--photo" src={item.img} alt={item.title} />
          <p className="card--title">{item.title}</p>
          <p>
            <Button onClick={handlePurchase} variant="contained" color="primary">
              Purchase: ${item.price}
            </Button>
          </p>
        </div>
      </Grid>
    );
  });

  // Function to handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...nftData].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (order === 'ascending') {
        return priceA - priceB;
      } else if (order === 'descending') {
        return priceB - priceA;
      }
    });
    // Update the NFT data state with the sorted order
    setNftData(sorted);
  };

  return (
    <>
      <SearchList onPurchase={onPurchase} ethBalance={ethBalance} />
      <h2>Market</h2>
      <div>
        {/* Add sorting buttons */}
        <div style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px' }}>
          <Button onClick={() => handleSort('ascending')} style={{ marginRight: '10px' }} variant="outlined">Sort by Price (Low to High)</Button>
          <Button onClick={() => handleSort('descending')} variant="outlined">Sort by Price (High to Low)</Button>
        </div>
        <Container>
          <Grid container spacing={12}>
            {items}
          </Grid>
        </Container>
      </div >
      {/* Display the pop-up alert using Dialog component */}
      < Dialog open={purchaseAlert.open} onClose={() => setPurchaseAlert({ ...purchaseAlert, open: false })
      }>
        <DialogTitle style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.title}</DialogTitle>
        <DialogContent style={{ color: purchaseAlert.type === 'success' ? 'green' : 'red' }}>{purchaseAlert.content}</DialogContent>
        <DialogActions>
          <Button onClick={() => setPurchaseAlert({ ...purchaseAlert, open: false })} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog >
      <Footer />
    </>
  );
}

export default Market;