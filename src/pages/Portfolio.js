import * as React from 'react';
import PortfolioData from '../components/portfolio/PortfolioData';
import Transactions from '../components/portfolio/Transactions';
import SearchBar from '../components/portfolio/SearchBar';
import '../components/styles/Portfolio.css'

function Portfolio() {

  const items = PortfolioData.map(item => {
    return <div className="card">
      <img className="card--photo" src={item.img} />
      <p className="card--title">{item.title}</p>
      <p><span className="bold">Price: ${item.price}</span></p>
    </div>
  })

  return (
    <>
      <SearchBar></SearchBar>
      <Transactions></Transactions>
      <h2>Your Collection</h2>
      <section className="cards-list">
        {items}
      </section>
    </>

  )
}
export default Portfolio;