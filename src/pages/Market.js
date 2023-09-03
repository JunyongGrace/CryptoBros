import * as React from 'react';
import data from '../data/Data';
import '../styles/Market.css';
import { Container, Grid } from '@mui/material';
import SearchList from '../components/SearchList';
import Footer from '../components/Footer';

function Market({ onPurchase, ethBalance }) {
  const items = data.map((item, index) => {
    const handlePurchase = () => {
      if (ethBalance >= item.price) {
        // Deduct the price from the ETH balance
        const updatedEthBalance = ethBalance - item.price;

        // Trigger the purchase by calling the onPurchase function
        onPurchase(updatedEthBalance, item);
        // Alert user
        alert(`You purchased ${item.title} for ${item.price} ETH.`);
      } else {
        alert("Insufficient ETH balance to make the purchase.");
      }
    };

    return (
      <Grid item xs={6} lg={3} key={index}>
        <div className="card">
          <img className="card--photo" src={item.img} alt={item.title} />
          <p className="card--title">{item.title}</p>
          <p>
            <button className='buy-button' onClick={handlePurchase}>Purchase: {item.price} ETH</button>
          </p>
        </div>
      </Grid>
    );
  });

  return (
    <>
      <SearchList />
      <h2>Market</h2>
      <div>
        <Container>
          <Grid container spacing={12}>
            {items}
          </Grid>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Market;