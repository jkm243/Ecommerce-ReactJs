import React from 'react'

function Header() {
  return (
    <div classNameName="App">
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
                  <li className="search">
                    <a href="index.html"><span className="lnr lnr-magnifier"></span></a>
                  </li>
                  <li className="nav-setting">
                    <a href="index.html"><span className="lnr lnr-cog"></span></a>
                  </li>
                  <li className="dropdown">
                    <a href="index.html" className="dropdown-toggle" data-toggle="dropdown" >
                      <span className="lnr lnr-cart"></span>
                      <span className="badge badge-bg-1">2</span>
                    </a>
                    <ul className="dropdown-menu cart-list s-cate">
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
                    </ul>
                  </li>
                  <li className="nav-setting">
                    <a href="index.html"><span className="lnr lnr-moon"></span></a>
                  </li>
                </ul>
              </div>
              
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">Luka.</a>

              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" scroll active"><a href="#home">home</a></li>
                  <li className="scroll"><a href="#new-arrivals">new arrival</a></li>
                  <li className="scroll"><a href="#feature">features</a></li>
                  <li className="scroll"><a href="#blog">blog</a></li>
                  <li className="scroll"><a href="#newsletter">contact</a></li>
                </ul>
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