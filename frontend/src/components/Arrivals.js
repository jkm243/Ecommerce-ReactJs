import React, { useEffect, useReducer } from 'react'
// import data from '../pages/data'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Rating from './Rating';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

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
                            {loading ? (<LoadingBox />) : 
                                error ? (<MessageBox variant="alert">{error}</MessageBox>) :
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
                                            <Rating rating={product.rating} numReviews={product.numReviews} />
                                            <p className="arrival-product-price">{product.price}$</p>
                                        </div>
                                    </div>
                                )))}
                        </div>
                    </div>
                </div>

            </section></div>
    )
}

export default Arrivals