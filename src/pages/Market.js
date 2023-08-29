import * as React from 'react';
import MarketData from './MarketData';
import './Market.css'
import { Container, Grid } from '@mui/material';
function Market() {

  const items = MarketData.map(item => {
    return <Grid item xs={3}>
        <div className="card">
      <img className="card--photo" src={item.img} />
      <p className="card--title">{item.title}</p>
      <p><button >Purchase: ${item.price}</button></p>;
      
    </div>
    </Grid>
  })

  return (
    <>
      <h1>Market</h1>
    
      <hr></hr>
      <div >
        <Container>
        <Grid container spacing={5}>
        {items}
        </Grid>
        </Container>
      </div>
     
   
    </>

  )
}
export default Market; <hr></hr>