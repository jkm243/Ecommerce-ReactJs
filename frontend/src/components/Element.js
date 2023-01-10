import React from 'react'

function Element() {
  return (
    <div className='App'>
        <div className="item">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>Air Force One Red</h2>
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
    </div>
  )
}

export default Element