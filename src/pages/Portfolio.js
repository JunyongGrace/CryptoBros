import React from 'react';
import Transactions from '../components/Transactions';
import SearchInput from '../components/SearchList';
import '../styles/Portfolio.css';
import AddressInfo from '../components/AddressInfo';
import Footer from '../components/Footer';


// Portfolio component received 
function Portfolio({ nftCollection, ethBalance }) {
  const items = nftCollection.map((item, index) => (
    <div className="card" key={index}>
      <img className="card--photo" src={item.img} alt={item.title} />
      <p className="card--title">{item.title}</p>
      <p>
        <span className="bold">Price: ${item.price} ETH</span>
      </p>
    </div>
  ));

  return (
    <>
      <SearchInput />
      <AddressInfo ethBalance={ethBalance} />
      <h2>Your Collections</h2>
      <section className="cards-list">{items}</section>
      <h2>Transactions</h2>
      <Transactions />
      <Footer></Footer>
    </>

  );
}

export default Portfolio;