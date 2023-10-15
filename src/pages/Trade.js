import { Container, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import user from '../data/User'

// Styling for button
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));


// Function for trade page

export default function Trade() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedNFT = location.state.nft; // Access the selected NFT data from the route state
  // Initialize state with the selected NFT data
  const [nft, setNft] = useState(selectedNFT);
  const [userData, setUserData] = useState({}); // Initialize userData as an empty object
  const [formData, setFormData] = useState({
    address: '',
    privateKey: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { address, privateKey } = formData;
  let id = user.userid;

  

  async function doTransaction() {
    if(address.slice(0,2) != '0x') {alert('Input data not found')}
    else{
      if (!isSubmitting) {
        try{
          setIsSubmitting(true);
          let res = await axios.get(`http://127.0.0.1:8000/transaction/get/?sender=${address}&pk=${privateKey}&amount=${nft.price}&senderId=${id}&nftId=${nft.nftId}`)
          
          alert("Successfully Purchased")
        }
        catch(error){
          alert(error.response.data.error)
        }
        setIsSubmitting(false);
      }
    }
  }
  

  return (
    <Grid container justifyContent="center" marginTop="10%">
      <Paper sx={{ width: 400, margin: 'auto', padding: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>
            Buy {nft.nftName} {/* Display the NFT name from the state */}
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-address">Address</InputLabel>
            {/* Address input */}
            <OutlinedInput
              id="outlined-adornment-address"
              startAdornment={<InputAdornment position="start">Address:</InputAdornment>}
              label="Address"
              value={address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-privatekey">Private Key</InputLabel>
            {/* Private Key input */}
            <OutlinedInput
              id="outlined-adornment-privatekey"
              startAdornment={<InputAdornment position="start">Private Key:</InputAdornment>}
              label="Private Key"
              type="password"
              value={privateKey}
              onChange={(e) => setFormData({ ...formData, privateKey: e.target.value })}
            />
          </FormControl>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, display: 'flex', justifySelf: 'self-start', marginLeft: 1 }}>
            You pay: <Typography variant="p" sx={{ fontWeight: 'normal' }}>&nbsp; {nft.price} ETH</Typography> {/* Display NFT price from the state */}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 2, marginBottom: 2 }}
            onClick={() => doTransaction()}
            disabled={isSubmitting}
          >
            Buy
          </Button>
      </Paper>
    </Grid>
  );
}