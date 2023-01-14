import React from 'react'
import { Link } from 'react-router-dom';
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'

function Footer() {
  return (
    <div className='App'>
      <section id="clients" className="clients">
        <div className="container">
          <div className="owl-carousel owl-theme carte" id="client">
            <div className="item">
                <img src={c1} alt="brand-image1" />
            </div>
            <div className="item">
                <img src={c2} alt="brand-image2" />
            </div>
            <div className="item">
                <img src={c3} alt="brand-image3" />
            </div>
            <div className="item">
                <img src={c4} alt="brand-image4" />
            </div>
            <div className="item">  
                <img src={c5} alt="brand-image5" />
            </div>
          </div>

        </div>

      </section>
      <section id="newsletter" className="newsletter">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>information</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li><a href="index.html">about us</a></li>
                      <li><a href="index.html">contact us</a></li>
                      <li><a href="index.html">news</a></li>
                      <li><a href="index.html">store</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>collections</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li><a href="index.html">wooden chair</a></li>
                      <li><a href="index.html">royal cloth sofa</a></li>
                      <li><a href="index.html">accent chair</a></li>
                      <li><a href="index.html">bed</a></li>
                      <li><a href="index.html">hanging lamp</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>my accounts</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li><a href="index.html">my account</a></li>
                      <li><a href="index.html">wishlist</a></li>
                      <li><a href="index.html">Community</a></li>
                      <li><a href="index.html">order history</a></li>
                      <li><Link to="/cart">My Cart</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>newsletter</h4>
                  </div>
                  <div className="hm-foot-para">
                    <p>
                      Subscribe  to get latest news,update and information.
                    </p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input type="text" className="form-control" placeholder="Enter Email Here...." />
                    </div>
                    <div className="foot-email-subscribe">
                      <span><i className="fa fa-location-arrow"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <div className="footer-social">
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100004188587518"><i className="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fjacques_katsuva%2F&source=omni_redirect"><i className="fa fa-instagram"></i></a>
              <a href="https://twitter.com/jacqueskatsuva"><i className="fa fa-twitter"></i></a>
              <a href="https://github.com/jkm243/"><i className="fa fa-github-square"></i></a>
              <a href="https://www.jkmconception.com"><i class="fa fa-pencil"></i></a>
              <a href="https://www.jacqueskatsuva.com"><i className="fa fa-code"></i></a>
            </div>
            <p>
              &copy;copyright. designed and developed by <a href="https://www.therichpost.com/">Jacques Katsuva with template html of Jassa</a>
            </p>
          </div>
        </div>

      </footer></div>
  )
}

export default Footer