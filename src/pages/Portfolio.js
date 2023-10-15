import React, { useState, useEffect } from 'react';
import Transactions from '../components/Transactions';
import '../styles/Portfolio.css';
import AddressInfo from '../components/AddressInfo';
import Footer from '../components/Footer';
import axios from 'axios'; // Import Axios


function Portfolio({ userData }) {
  const [nftCollection, setNftCollection] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch NFT collection data from the server when the component mounts
    axios.get('http://127.0.0.1:8000/nft/get/?id=2') // Replace with your actual API endpoint
      .then((response) => {
        setNftCollection(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching NFT collection data:', error);
      });
  }, []);

  const items = nftCollection.map((item, index) => (
    <div className="card" key={index}>
      <img className="card--photo" src={item.urlToImg} alt={item.nftName} />
      <p className="card--title">{item.nftName}</p>
      <p>
        <span className="bold">Price: {item.price} ETH</span>
      </p>
    </div>
  ));

  return (
    <>
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