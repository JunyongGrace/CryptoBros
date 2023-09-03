import * as React from 'react';
import data from '../data/Data';
import '../styles/Market.css';
import { Container, Grid } from '@mui/material';
import SearchInput from '../components/SearchList';

function Market() {

  const items = data.map(item => {
    return <Grid item xs={3}>
      <div className="card">
        <img className="card--photo" src={item.img} />
        <p className="card--title">{item.title}</p>
        <p><button >Purchase: ${item.price}</button></p>
      </div>
    </Grid>
  })

  return (
    <>
      <SearchInput></SearchInput>
      <h2>Market</h2>
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