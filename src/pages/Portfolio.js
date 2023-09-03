import * as React from 'react';
import data from '../data/Data';
import Transactions from '../components/portfolio/Transactions';
import SearchInput from '../components/portfolio/SearchList';
import '../components/styles/Portfolio.css'
import AddressInfo from '../components/portfolio/AddressInfo';
import Footer from '../components/Footer';


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
      <Footer></Footer>
    </>

  )
}
export default Portfolio;