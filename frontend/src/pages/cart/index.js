import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MessageBox from '../../components/MessageBox';
import { Store } from '../../Store'

const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }, } = state;
  return (
    <div className='App carte mt-5'>
      <Helmet>
        <title>Luka - Shopping Cart</title>
      </Helmet>
      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty.
          <Link to="/">
            Go Shopping
          </Link>
        </MessageBox>
      ) : (<div>
        {cartItems.map((item) => (
          <ul className="cart-list s-cate">
            <li className="single-cart-list" key={item._id}>
              <a href="index.html" className="photo"><img src={item.image} className="cart-thumb" alt={item.name} /></a>
              <div className="cart-list-txt">
                <h6>
                <Link to={`/product/${item.slug}`}>
                  {item.name}
                </Link>
                </h6> 
                <div> <br></br>
                <button disabled={item.quantity === 1} className="plus">
                  <i className="fa fa-minus-circle"></i>
                </button>
                  {item.quantity} x   
                <span className="price">${item.price}</span>
                  <button disabled={item.quantity === item.countInStock} className="minus">
                    <i className="fa fa-plus-circle"></i>
                  </button>
                </div>
              </div>
              <div className="cart-close">
                <span className="lnr lnr-cross"></span>
              </div>
            </li>
            
          </ul>))}
          <div className="cart-list s-cate">
            <p className="total">
              <span>Element: {cartItems.reduce((a,c)=> a+c.quantity,0)}{' '} (items)</span> 
            </p>
            <h4 className="total">
              <span>Total: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</span>
              <ul className='cart-list s-cate'>
                <li className="total">
                  <button className="btn-cart welcome-add-cart" disabled={cartItems.length===0}>Proceed to Checkout</button>
                </li>
              </ul>
            </h4>
            
          </div>
      </div>
      )
      }</div>
)};

export default Cart;