import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid xs={12} md={6} sx={{paddingY: 10, color: '#008ECC'}}>
              <Typography variant="h1" component="h1">
              Welcome to CryptoBros! 
              </Typography>
              <Typography variant="h6" component="h2">
              We are a Cryptocurrency trading platform that offers a safe and reliable marketplace to buy, sell and trade Cryptocurrency.
              At CryptoBros, we use smart contracts to act as escrow during the process of trading.
              Smart contracts ensure that assets are held securely until a trade is completed or cancelled.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default HomePage;