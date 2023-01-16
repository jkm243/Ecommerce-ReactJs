import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
//import data from '../pages/data'

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Hero() {

    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/products");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
              let productNum = Math.floor(Math.random() * result.length);
              let randomProduct = result[productNum];
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

  // products.filter(product => Math.floor(Math.random() * product.length).map((product) => (console.log(product))));

    return (
        loading ? (
            <LoadingBox className="App carte" />
        ) : error ? (
            <MessageBox className="App carte" variant="alert">{error}</MessageBox>
        ) : (products.filter(product => Math.floor(Math.random() * product.length)).map((product) => (
            <div className="App">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"><span className="small-circle"></span></li>
                        <li data-target="#header-carousel" data-slide-to="1"><span className="small-circle"></span></li>
                        <li data-target="#header-carousel" data-slide-to="2"><span className="small-circle"></span></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active" key={product.slug}>
                            <div className="single-slide-item slide1">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h4>great design collection</h4>
                                                        <h2>{product.name}</h2>
                                                        <p>
                                                            {product.description}
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ {product.price}.00
                                                                <del>$ {product.oldPrice}.00</del>
                                                            </p>
                                                        </div>
                                                        {product.countInStock > 0 && (
                                                            <button className="btn-cart welcome-add-cart" >
                                                                <span className="lnr lnr-plus-circle"></span>
                                                                add <span>to</span> cart
                                                            </button>)}
                                                        <button className="btn-cart welcome-add-cart welcome-more-info" >
                                                            more info
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src={product.image} alt={product.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <div className="item">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                            <h2>{products[1]["name"]}</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                                $ {products[1]["price"]}.00
                                <del>$ {products[0]["oldPrice"]}.00</del>
                            </p>
                          </div>
                            {products[1]["countInStock"] > 0 && (
                                  <button className="btn-cart welcome-add-cart" >
                                    <span className="lnr lnr-plus-circle"></span>
                                    add <span>to</span> cart
                                  </button>)}
                          <button className="btn-cart welcome-add-cart welcome-more-info" >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                            <img src={products[1]["image"]} alt={products[1]["name"]} />
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
                            <h2>{products[2]["name"]}</h2>
                          <p>
                              {products[2]["description"]}
                          </p>
                          <div className="packages-price">
                            <p>
                                $ {products[2]["price"]}.00
                                <del>$ {products[2]["oldPrice"]}.00</del>
                            </p>
                          </div>
                            {products[2]["countInStock"] > 0 && (
                              <button className="btn-cart welcome-add-cart" >
                                <span className="lnr lnr-plus-circle"></span>
                                add <span>to</span> cart
                              </button>)}
                          <button className="btn-cart welcome-add-cart welcome-more-info" >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                            <img src={products[2]["image"]} alt={products[2]["name"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>  */}
                    </div>

                </div>
            </div>
        ))))
}

export default Hero