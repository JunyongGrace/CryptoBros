import * as React from 'react';
import PortfolioData from './PortfolioData';
import './Portfolio.css';
import Transactions from './Transactions';
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
      <Transactions></Transactions>
      <hr></hr>
      <section className="cards-list">
        {items}
      </section>
      <hr></hr>
    </>

  )
}
export default Portfolio;