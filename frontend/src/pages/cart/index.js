import React from 'react'

const Cart = () => {
  return (
    <div className='App carte'>                     
    <ul className="cart-list s-cate">
    <li className="single-cart-list">
      <a href="index.html" className="photo"><img src="assets/images/arrivals1.png" className="cart-thumb" alt="image3" /></a>
      <div className="cart-list-txt">
        <h6><a href="index.html">arm <br /> chair</a></h6>
        <p>1 x - <span className="price">$180.00</span></p>
      </div>
      <div className="cart-close">
        <span className="lnr lnr-cross"></span>
      </div>
    </li>
    <li className="single-cart-list">
      <a href="index.html" className="photo"><img src="assets/images/arrivals2.png" className="cart-thumb" alt="image1" /></a>
      <div className="cart-list-txt">
        <h6><a href="index.html">single <br /> armchair</a></h6>
        <p>1 x - <span className="price">$180.00</span></p>
      </div>
      <div className="cart-close">
        <span className="lnr lnr-cross"></span>
      </div>
    </li>
    <li className="single-cart-list">
      <a href="index.html" className="photo"><img src="assets/images/arrivals3.png" className="cart-thumb" alt="image2" /></a>
      <div className="cart-list-txt">
        <h6><a href="index.html">wooden arn <br /> chair</a></h6>
        <p>1 x - <span className="price">$180.00</span></p>
      </div>
      <div className="cart-close">
        <span className="lnr lnr-cross"></span>
      </div>
    </li>
    <li className="total">
      <span>Total: $0.00</span>
      <button className="btn-cart pull-right" onClick="window.location.href='#'">view cart</button>
    </li>
  </ul></div> 
  )
}

export default Cart