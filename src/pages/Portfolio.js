import React from 'react';
import Transactions from '../components/Transactions';
import SearchInput from '../components/SearchList';
import '../styles/Portfolio.css';
import AddressInfo from '../components/AddressInfo';
import Footer from '../components/Footer';

function Portfolio({ nftCollection, userData }) {
  const items = nftCollection.map((item, index) => (
    <div className="card" key={index}>
      <img className="card--photo" src={item.img} alt={item.title} />
      <p className="card--title">{item.title}</p>
      <p>
        <span className="bold">Price: {item.price} ETH</span>
      </p>
    </div>
  ));

  return (
    <>
      <SearchInput />
      <AddressInfo ethBalance={userData.nftBalance} userName={userData.userName} />
      <h2>Your Collections</h2>
      <section className="cards-list">{items}</section>
      <h2>Transactions</h2>
      <Transactions />
      <Footer />
    </>
  );
}

export default Portfolio;
