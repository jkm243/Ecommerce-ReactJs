import axios from 'axios';
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import MessageBox from '../../components/MessageBox';
import { Store } from '../../Store'

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }, } = state;
    
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  }
  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'CART_REMOVE_ITEM',
      payload: item
    })
  }
  const checkoutHandler = ()=>{
    navigate('/signin?redirect=/shipping')
  }
  return (
    <div className='carte mt-5'>
      <Helmet>
        <title>Luka - Shopping Cart</title>
      </Helmet>
      {cartItems.length === 0 ? (
        <div className='container'>
          <div className="text-center">
            <MessageBox>
              Cart is empty. {' '}
              <Link className="shop" to="/">
                Go Shopping
              </Link>
            </MessageBox>
          </div>
          <div className="text-center">
            <div className="cart-list s-cate">
              <p className="total">
                <span>Element: {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '} (items)</span>
              </p>
              <h4 className="total">
                <span>Total: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</span>
                <ul className='cart-list s-cate'>
                  <li className="total">
                    <button className="btn-cart welcome-add-cart" disabled={cartItems.length === 0}>Proceed to Checkout</button>
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </div>

      ) : (
        <div className='container'>
          <div className='test3'>
            {cartItems.map((item) => (
              <div className='test1'>
                <ul className="cart-list s-cate">
                  <li className="single-cart-list" key={item._id}>
                    <Link className='photo' to={`/product/${item.slug}`}><img src={item.image} className="cart-thumb" alt={item.name} />
                    </Link>
                    <div className="cart-list-txt">
                      <h6>
                        <Link to={`/product/${item.slug}`}>
                          {item.name}
                        </Link>
                      </h6>
                      <div> <br></br>
                        <button disabled={item.quantity === 1} className="plus"
                          onClick={() => updateCartHandler(item, item.quantity - 1)}>
                          <i className="fa fa-minus-circle"></i>
                        </button>{' '}
                        {item.quantity} x
                        <span className="price">${item.price}</span>{' '}
                        <button disabled={item.quantity === item.countInStock}
                          onClick={() => updateCartHandler(item, item.quantity + 2)}
                          className="minus">
                          <i className="fa fa-plus-circle"></i>
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeItemHandler(item)} className="photo">
                      <span className="lnr lnr-trash minus"></span>
                    </button>
                  </li>
                </ul>
              </div>))} 
              <div className="test2 text-center">
                <p className="total">
                  <span>Element: {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '} (items)</span>
                </p>
                <h4 className="total">
                  <span>Total: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</span>
                  <ul className='cart-list s-cate'>
                    <li className="total">
                      <button className="btn-cart welcome-add-cart" 
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}>Proceed to Checkout</button>
                    </li>
                  </ul>
                </h4>
              </div>             
          </div>
          
        </div>
      )
      }
    </div>

  )
};

export default Cart;