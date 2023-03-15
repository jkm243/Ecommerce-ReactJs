import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer } from 'react-toastify';

function Header() {
  const theme = window.localStorage.getItem("theme");
  const [isClicked, setIsClicked] = useState(false)
  if (theme === "dark") document.body.classList.add("dark");

  const triggerToggle = () => {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked(isClicked => !isClicked);
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  }

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart,userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="top-area">
        <div className="header-area">

          <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-search"></i></span>
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                </div>
              </div>
            </div>


            <div className="container">
              <div className="attr-nav">
                <ul>
                  {/* <li className="search">
                    <a href="index.html"><span className="lnr lnr-magnifier"></span></a>
                  </li>
                  <li className="nav-setting">
                    <a href="index.html"><span className="lnr lnr-cog"></span></a>
                  </li> */}
                  <li className="nav-setting">
                    <Link to="/cart" data-toggle="dropdown">
                      <span className="lnr lnr-cart" ></span>
                      {cart.cartItems.length > 0 && (
                        <span className="badge badge-bg-1">
                        {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}</span>
                      )}
                    </Link>
                  </li>
                  <>
                    {userInfo ? (
                       <li className="dropdown">
                        <a className="dropdown-toggle" data-bs-toggle="dropdown" href="/shipping" role="button" aria-expanded="false">{userInfo.name}</a>
                        <ul className="dropdown-menu">
                            <li><Link to="/profile">
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </Link></li>
                            <li><Link to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </Link></li>                            
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><Link
                          className="dropdown-item"
                          to="/signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link></li>
                          </ul>
                        </li>                      
                    ) : (<li><Link className="nav-setting" to="/signin">Sign In</Link></li>)}
                  </>
                  <li className="nav-setting">
                    <button className="dark-mode-btn dark-mode" onClick={triggerToggle}>{isClicked ? "🌓" : "☀️"}</button>
                  </li>
                </ul>
              </div>

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>

                <Link to="/" className="navbar-brand">
                  Luka.
                </Link>
              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                {/* <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                  <li >
                    <Link to="/" className="scroll active">
                      Home
                    </Link>
                  </li>
                  <li className="scroll"><a href="#new-arrivals">new arrival</a></li>
                  <li className="scroll"><a href="#feature">features</a></li>
                  <li className="scroll"><a href="#blog">blog</a></li>
                  <li className="scroll"><a href="#newsletter">contact</a></li>
                </ul> */}
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  )
}

export default Header