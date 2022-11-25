import React from 'react'

function Header() {
    return (
        <div className="App">
           <header id="home" class="welcome-hero">
          <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#header-carousel" data-slide-to="0" class="active"><span class="small-circle"></span></li>
              <li data-target="#header-carousel" data-slide-to="1"><span class="small-circle"></span></li>
              <li data-target="#header-carousel" data-slide-to="2"><span class="small-circle"></span></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="single-slide-item slide1">
                  <div class="container">
                    <div class="welcome-hero-content">
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>cloth covered accent chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div class="packages-price">
                                <p>
                                  $ 399.00
                                  <del>$ 499.00</del>
                                </p>
                              </div>
                              <button class="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span class="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button class="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-img">
                              <img src="assets/images/slider1.png" alt="slider1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="item">
                <div class="single-slide-item slide2">
                  <div class="container">
                    <div class="welcome-hero-content">
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>mapple wood accent chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div class="packages-price">
                                <p>
                                  $ 199.00
                                  <del>$ 299.00</del>
                                </p>
                              </div>
                              <button class="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span class="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button class="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-img">
                              <img src="assets/images/slider2.png" alt="slider2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="item">
                <div class="single-slide-item slide3">
                  <div class="container">
                    <div class="welcome-hero-content">
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-txt">
                              <h4>great design collection</h4>
                              <h2>valvet accent arm chair</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                              </p>
                              <div class="packages-price">
                                <p>
                                  $ 299.00
                                  <del>$ 399.00</del>
                                </p>
                              </div>
                              <button class="btn-cart welcome-add-cart" onClick="window.location.href='#'">
                                <span class="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>
                              <button class="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                more info
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="single-welcome-hero">
                            <div class="welcome-hero-img">
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

          </div>

         
          <div class="top-area">
            <div class="header-area">
              
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                   
                    <div class="top-search">
                        <div class="container">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search" />
                                <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
                            </div>
                        </div>
                    </div>
                   

                    <div class="container">            
                      
                        <div class="attr-nav">
                            <ul>
                              <li class="search">
                                <a href="#"><span class="lnr lnr-magnifier"></span></a>
                              </li>
                              <li class="nav-setting">
                                <a href="#"><span class="lnr lnr-cog"></span></a>
                              </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                                        <span class="lnr lnr-cart"></span>
                          <span class="badge badge-bg-1">2</span>
                                    </a>
                                    <ul class="dropdown-menu cart-list s-cate">
                                        <li class="single-cart-list">
                                            <a href="#" class="photo"><img src="assets/images/arrivals1.png" class="cart-thumb" alt="image3" /></a>
                                            <div class="cart-list-txt">
                                              <h6><a href="#">arm <br /> chair</a></h6>
                                              <p>1 x - <span class="price">$180.00</span></p>
                                            </div>
                                            <div class="cart-close">
                                              <span class="lnr lnr-cross"></span>
                                            </div>
                                        </li>
                                        <li class="single-cart-list">
                                            <a href="#" class="photo"><img src="assets/images/arrivals2.png" class="cart-thumb" alt="image1" /></a>
                                            <div class="cart-list-txt">
                                              <h6><a href="#">single <br /> armchair</a></h6>
                                              <p>1 x - <span class="price">$180.00</span></p>
                                            </div>
                                            <div class="cart-close">
                                              <span class="lnr lnr-cross"></span>
                                            </div>
                                        </li>
                                        <li class="single-cart-list">
                                            <a href="#" class="photo"><img src="assets/images/arrivals3.png" class="cart-thumb" alt="image2" /></a>
                                            <div class="cart-list-txt">
                                              <h6><a href="#">wooden arn <br /> chair</a></h6>
                                              <p>1 x - <span class="price">$180.00</span></p>
                                            </div>
                                            <div class="cart-close">
                                              <span class="lnr lnr-cross"></span>
                                            </div>
                                        </li>
                                        <li class="total">
                                            <span>Total: $0.00</span>
                                            <button class="btn-cart pull-right" onClick="window.location.href='#'">view cart</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="#">Jassa.</a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li class=" scroll active"><a href="#home">home</a></li>
                                <li class="scroll"><a href="#new-arrivals">new arrival</a></li>
                                <li class="scroll"><a href="#feature">features</a></li>
                                <li class="scroll"><a href="#blog">blog</a></li>
                                <li class="scroll"><a href="#newsletter">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
            </div>
              <div class="clearfix"></div>

          </div>

        </header>
        <section id="populer-products" class="populer-products">
          <div class="container">
            <div class="populer-products-content">
              <div class="row">
                <div class="col-md-3">
                  <div class="single-populer-products">
                    <div class="single-populer-product-img mt40">
                      <img src="assets/images/p1.png" alt="populer-products images" />
                    </div>
                    <h2><a href="#">arm chair</a></h2>
                    <div class="single-populer-products-para">
                      <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-populer-products">
                    <div class="single-inner-populer-products">
                      <div class="row">
                        <div class="col-md-4 col-sm-12">
                          <div class="single-inner-populer-product-img">
                            <img src="assets/images/p2.png" alt="populer-products images" />
                          </div>
                        </div>
                        <div class="col-md-8 col-sm-12">
                          <div class="single-inner-populer-product-txt">
                            <h2>
                              <a href="#">
                                latest designed stool <span>and</span> chair
                              </a>
                            </h2>
                            <p>
                              Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.
                            </p>
                            <div class="populer-products-price">
                              <h4>Sales Start from <span>$99.00</span></h4>
                            </div>
                            <button class="btn-cart welcome-add-cart populer-products-btn" onClick="window.location.href='#'">
                              discover more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="single-populer-products">
                    <div class="single-populer-products">
                      <div class="single-populer-product-img">
                        <img src="assets/images/p3.png" alt="populer-products images" />
                      </div>
                      <h2><a href="#">hanging lamp</a></h2>
                      <div class="single-populer-products-para">
                        <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        </div>
    )
}

export default Header