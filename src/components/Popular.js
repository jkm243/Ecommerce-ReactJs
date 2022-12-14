import React from 'react'

function Popular() {
  return (
    <div className='App'>
      <section id="populer-products" className="populer-products">
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

      </section>
    </div>
  )
}
export default Popular