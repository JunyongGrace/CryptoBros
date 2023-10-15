
import React, { useState, useEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppNav';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router';
import Market from './pages/Market';
import Portfolio from './pages/Portfolio';
import { LoginPage } from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Trade from './pages/Trade';
import axios from 'axios';
import user from '../src/data/User'

function App() {
  const [ethBalance, setEthBalance] = useState(null); // Initialize ethBalance as null
  const [nftCollection, setNftCollection] = useState([]); // Initial NFT collection
  const [userData, setUserData] = useState({}); // Initialize userData as an empty object

  let id = user.userid;

  useEffect(() => {
    // Fetch ethBalance and userName from your database
    axios.get(`http://127.0.0.1:8000/user/get/?id=${id}`)
      .then(response => {
        const user = response.data[0]; // Extract the first (and only) object from the array
        setUserData(user); // Store user data in state
        setEthBalance(user.nftBalance);
        console.log(userData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const onPurchase = (newBalance, purchasedItem) => {
    setEthBalance(newBalance);
    // Add the purchased NFT to the collection (addToNftCollection function not shown here)
    addToNftCollection(purchasedItem);
  };

  // Function to update the ETH balance after a purchase
  const updateEthBalance = (newBalance) => {
    setEthBalance(newBalance);
  };

  // Function to add an NFT to the user's collection
  const addToNftCollection = (nft) => {
    setNftCollection([...nftCollection, nft]);
  };

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/Market'
          element={<Market ethBalance={ethBalance} onPurchase={onPurchase} updateEthBalance={updateEthBalance} addToNftCollection={addToNftCollection} />}
        />
        <Route path='/Portfolio' element={<Portfolio nftCollection={nftCollection} userData={userData} />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Trade' element={<Trade />} />
      </Routes>
    </div>
  );
}

export default App;
