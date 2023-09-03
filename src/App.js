import React, { useState } from 'react';
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

function App() {
  const [ethBalance, setEthBalance] = useState(10.0); // Initial ETH balance
  const [nftCollection, setNftCollection] = useState([]); // Initial NFT collection

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
        <Route path='/Portfolio' element={<Portfolio nftCollection={nftCollection} ethBalance={ethBalance} />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Trade' element={<Trade />} />
      </Routes>
    </div>
  );
}

export default App;