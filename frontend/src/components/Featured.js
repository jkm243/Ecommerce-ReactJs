import React from 'react'

function Featured() {
  return (
    <div>
      <section id="feature" className="feature">
        <div className="container">
          <div className="section-header">
            <h2>featured products</h2>
          </div>
          <div className="feature-content">
            <div className="row">
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="assets/images/f1.jpg" alt="feature-image4" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3><a href="index.html">designed sofa</a></h3>
                    <h5>$160.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="assets/images/f2.jpg" alt="feature-image3" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3><a href="index.html">dinning table </a></h3>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="assets/images/f3.jpg" alt="feature-image2" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3><a href="index.html">chair and table</a></h3>
                    <h5>$100.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-feature">
                  <img src="assets/images/f4.jpg" alt="feature-image1" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3><a href="index.html">modern arm chair</a></h3>
                    <h5>$299.00</h5>
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

export default Featured