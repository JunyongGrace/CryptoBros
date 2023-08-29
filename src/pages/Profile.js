import { Button, Container, FormControl, Grid, Paper, TextField, Typography, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import * as React from 'react';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[700]),
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[900],
  },
}));

export default function Profile(){
  return (
    <>
    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
      <Container>
        <Paper m='auto'>
          <Container>
            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold', paddingY: 2, marginBottom: 2 }}>Edit Profile</Typography>
            <Grid container spacing={10}>
              <Grid item xs={6} sx={{display: 'flex', justifySelf: 'self-start'}}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <Typography component='h4' variant='h6' sx={{ fontWeight: 'bold', marginTop: 2,  display: 'flex', justifySelf: 'self-start'}}>Username</Typography>
                  <TextField id="input-with-sx" label="Username" variant="standard" />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{display: 'flex', justifySelf: 'self-start'}}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <Typography component='h4' variant='h6' sx={{ fontWeight: 'bold', marginTop: 2,  display: 'flex', justifySelf: 'self-start'}}>Email</Typography>
                  <TextField id="input-with-sx" label="Email" variant="standard" />
                </FormControl>
              </Grid>
            </Grid>
            <ColorButton variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Save</ColorButton>
          </Container>
        </Paper>
      </Container>
    </Grid>
    </>
  )
}
