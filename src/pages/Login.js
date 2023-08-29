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


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));

export default function LoginPage(){
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
          <Paper m='auto' sx={{ width: 400}}>
            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>Login</Typography>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <TextField id="input-with-sx" label="Email" variant="standard" />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
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
            <ColorButton variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Login</ColorButton>
          </Paper>
        </Grid>
    </>
  )
}


