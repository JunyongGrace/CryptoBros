import * as React from 'react';
import PortfolioData from './PortfolioData';
import './Portfolio.css'
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
      <h1>'Profile Section'</h1>
      <hr></hr>
      <section className="cards-list">
        {items}
      </section>
      <hr></hr>
      <h1>'Transaction Section'</h1>
    </>

  )
}
export default Portfolio;