import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import HomePic from '../images/HomePic.jpeg'
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2} sx={{paddingTop: 15}}>
            <Grid item xs={12} md={6} sx={{ color: '#008ECC'}}>
              <Typography variant="h1" component="h1">
              Welcome to CryptoBros! 
              </Typography>
              <Typography variant="h6" component="h2">
              We are an NFT trading platform that offers a safe and reliable marketplace to buy, sell and trade NFTs.
              At CryptoBros, we use smart contracts to act as escrow during the process of trading.
              Smart contracts ensure that assets are held securely until a trade is completed or cancelled.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
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