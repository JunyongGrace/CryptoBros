import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <>
      <Box s>
        <Typography variant="h1" component="h1">
        Welcome to CryptoBros! 
        </Typography>
        <Typography variant="h5" component="h2">
        We are a Cryptocurrency trading platform that offers a safe and reliable marketplace to buy, sell and trade Cryptocurrency.
        At CryptoBros, we use smart contracts to act as escrow during the process of trading.
        Smart contracts ensure that assets are held securely until a trade is completed or canceled.
        </Typography>
      </Box>
    </>
  )
}

export default HomePage;