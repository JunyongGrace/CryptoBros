import * as React from 'react';
import data from '../data/Data';
import Transactions from '../components/Transactions';
import SearchInput from '../components/SearchList';
import '../styles/Portfolio.css'
import AddressInfo from '../components/AddressInfo';


function Portfolio() {

  const items = data.map(item => {
    return <div className="card">
      <img className="card--photo" src={item.img} />
      <p className="card--title">{item.title}</p>
      <p><span className="bold">Price: ${item.price}</span></p>
    </div>
  })

  return (
    <>
      <SearchInput></SearchInput>
      <AddressInfo></AddressInfo>
      <h2>Your Collections</h2>
      <section className="cards-list">
        {items}
      </section>
      <h2>Transactions</h2>
      <Transactions></Transactions>
    </>

  )
}
export default Portfolio;