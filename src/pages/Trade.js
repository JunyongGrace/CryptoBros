import { Container, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// Styling for button
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));

// Function for trade page
export default function Trade(){
  return (
    <>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
        <Paper m='auto' sx={{ width: 400}}>
          <Container>
            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>Buy</Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
            {/* Amount */}
              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
              {/* NFTs */}
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">NFT(s):</InputAdornment>}
                label="Amount"
                pattern='^[1-9]\d*$'
                type='number' 
              />
            </FormControl>
            <Typography component='h2' variant='h6' sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, display: 'flex', justifySelf: 'self-start', marginLeft: 1 }}>You pay: <Typography component='p' variant='p' sx={{ fontWeight: 'normal'}}> &nbsp; 10 ETH</Typography></Typography>
          </Container>
          <ColorButton variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Buy</ColorButton>
        </Paper>
      </Grid>
    </>
  )
}
