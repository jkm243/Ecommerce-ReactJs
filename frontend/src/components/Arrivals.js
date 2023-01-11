import React, { useEffect, useReducer } from 'react'
// import data from '../pages/data'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Rating from './Rating';

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


function Arrivals() {
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
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, []);

    return (
        <div className='App'>
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    <div className="section-header">
                        <h2>new arrivals</h2>
                    </div>
                    <div className="new-arrivals-content">
                        <div className="row">
                            {loading ? (<div className='loader'>Loading...</div>) : error ? (<div className='loader'>Error</div>) :
                                (products.map((product) => (
                                    <div className="col-md-3 col-sm-4" key={product.slug}>
                                        <div className="single-new-arrival" >
                                            <div className="single-new-arrival-bg">
                                                   <Link to={`/product/${product.slug}`}>
                                                    <img src={product.image} alt={product.name} />
                                                </Link>
                                                <div className="single-new-arrival-bg-overlay"></div>
                                                <div className={"sale " + (product.countInStock === '0' ? 'bg-1' : 'bg-2')}>
                                                    <p>sale</p>
                                                </div>
                                                <div className="new-arrival-cart">
                                                    <p>
                                                        <span className="lnr lnr-cart"></span>
                                                        <a href="index.html">add <span>to </span> cart</a>
                                                    </p>
                                                    <p className="arrival-review pull-right">
                                                        <span className="lnr lnr-heart"></span>
                                                        <span className="lnr lnr-frame-expand"></span>
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <h4>
                                                <Link to={`/product/${product.slug}`}>
                                                    {product.name}
                                                </Link>
                                            </h4>
                                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                                            <p className="arrival-product-price">{product.price}$</p>
                                        </div>
                                    </div>
                                )))}
                            {/* <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals2.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">single armchair</a></h4>
                                    <p className="arrival-product-price">$80.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals3.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">wooden armchair</a></h4>
                                    <p className="arrival-product-price">$40.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals4.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">stylish chair</a></h4>
                                    <p className="arrival-product-price">$100.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals5.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">modern chair</a></h4>
                                    <p className="arrival-product-price">$120.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals6.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">mapple wood dinning table</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals7.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">arm chair</a></h4>
                                    <p className="arrival-product-price">$90.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/arrivals8.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay"></div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart"></span>
                                                <a href="index.html">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart"></span>
                                                <span className="lnr lnr-frame-expand"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="index.html">wooden bed</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section></div>
    )
}

export default Arrivals