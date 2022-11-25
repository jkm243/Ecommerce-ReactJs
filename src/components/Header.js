import React from 'react'

function Header() {
    return (
        <div classNameName="App">
           <header id="home" className="welcome-hero">
          {/* <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#header-carousel" data-slide-to="0" className="active"><span className="small-circle"></span></li>
              <li data-target="#header-carousel" data-slide-to="1"><span className="small-circle"></span></li>
              <li data-target="#header-carousel" data-slide-to="2"><span className="small-circle"></span></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide-item slide1">
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>cloth covered accent chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div className="packages-price">
                                <p>
                                  $ 399.00
                                  <del>$ 499.00</del>
                                </p>
                              </div>
                              <button className="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src="assets/images/slider1.png" alt="slider1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="item">
                <div className="single-slide-item slide2">
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>mapple wood accent chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div className="packages-price">
                                <p>
                                  $ 199.00
                                  <del>$ 299.00</del>
                                </p>
                              </div>
                              <button className="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src="assets/images/slider2.png" alt="slider2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="item">
                <div className="single-slide-item slide3">
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>valvet accent arm chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div className="packages-price">
                                <p>
                                  $ 299.00
                                  <del>$ 399.00</del>
                                </p>
                              </div>
                              <button className="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button className="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src="assets/images/slider3.png" alt="slider3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div> */}

         
          <div className="top-area">
            <div className="header-area">
              
                <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                   
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

        </header>
        {/* <section id="populer-products" className="populer-products">
          <div className="container">
            <div className="populer-products-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-product-img mt40">
                      <img src="assets/images/p1.png" alt="populer-products images" />
                    </div>
                    <h2><a href="index.html">arm chair</a></h2>
                    <div className="single-populer-products-para">
                      <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-populer-products">
                    <div className="single-inner-populer-products">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="single-inner-populer-product-img">
                            <img src="assets/images/p2.png" alt="populer-products images" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <div className="single-inner-populer-product-txt">
                            <h2>
                              <a href="index.html">
                                latest designed stool <span>and</span> chair
                              </a>
                            </h2>
                            <p>
                              Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.
                            </p>
                            <div className="populer-products-price">
                              <h4>Sales Start from <span>$99.00</span></h4>
                            </div>
                            <button className="btn-cart welcome-add-cart populer-products-btn" onClick="window.location.href='#'">
                              discover more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-populer-products">
                    <div className="single-populer-products">
                      <div className="single-populer-product-img">
                        <img src="assets/images/p3.png" alt="populer-products images" />
                      </div>
                      <h2><a href="index.html">hanging lamp</a></h2>
                      <div className="single-populer-products-para">
                        <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section> */}
        </div>
    )
}

export default Header