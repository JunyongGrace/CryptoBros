import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import HomePic from '../images/HomePic.jpeg'
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

//Function for homepage
const HomePage = () => {
  // const [tx_hash, setTx_hash] = useState('')
  // useEffect(()=>{},[tx_hash]) //If change check database
  // async function getAPI(){
  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/');
  //     const json = await response.json();
  //     console.log(json.tx);
  //   } catch (error) {
  //     console.error(`Download error: ${error.message}`);
  //   }
  // }
  
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2} sx={{paddingTop: 15}}>
            <Grid item xs={12} md={6} sx={{ color: '#008ECC'}}>
             {/* Title */}
              <Typography variant="h1" component="h1">
              Welcome to CryptoBros! 
              </Typography>
              <Typography variant="h6" component="h2">
             {/* About */}
              We are an NFT trading platform that offers a safe and reliable marketplace to buy, sell and trade NFTs.
              At CryptoBros, we use smart contracts to act as escrow during the process of trading.
              Smart contracts ensure that assets are held securely until a trade is completed or cancelled.
              </Typography>
              <Typography variant="h6" component="h2">
              {tx_hash}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
            {/* Home Page Picture */}
              <img src={HomePic} height='80%' width='100%'></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>  
    </>
  )
} 

export default HomePage;