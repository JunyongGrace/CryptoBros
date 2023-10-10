import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Grid, Paper, Typography } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import user from '../data/User';
import { Link } from 'react-router-dom';

// Styling for button
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));


let authenticated = false;

// For passing information to other components whether the user is logged in
function Authenticate(){
  return authenticated;
}

// Function for Login Page
function LoginPage(){
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // For showing password
  const [login, setLogin] = useState(false); // For logging in

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get data from form
    const data = new FormData(event.currentTarget);

    // Check if email and password entered are correct
    if (data.get("email") == user.email){
      if (data.get("password") == user.password){
        authenticated = true;
        setLogin(login => !login);
      }
      else{
        alert('Wrong Password');
      }
    }
    else{
      alert('Email doesn\'t exist');
    }
  };
  
  // Log the user in if true
  useEffect(() => {
    if (login) navigate('/Market', { replace: true});
  }, [login]);

  return (
    <>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
          <Paper component='form' onSubmit={handleSubmit} noValidate m='auto' sx={{ width: 400}}>
            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>Login</Typography>
            {/* Email input */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <TextField id="input-with-sx email" label="Email" name="email" variant="standard" />
            </FormControl>
            {/* Password input */}
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password password" name='password' id='password'>Password</InputLabel>
              <Input
                id="standard-adornment-password password" 
                name='password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <>
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  </>
                }
              />
            </FormControl>
            <br></br>
            <br></br>
            <Link to={'/Register'}>
              Don't have an account? Register HERE!
            </Link>
            <br></br>
            {/* Login Button */}
            <ColorButton type='submit' variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Login</ColorButton>
          </Paper>
        </Grid>
    </>
  )
}


export {Authenticate, LoginPage};