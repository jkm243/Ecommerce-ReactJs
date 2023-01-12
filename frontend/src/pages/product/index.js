import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import Rating from '../../components/Rating';
import { useParams } from 'react-router-dom'
import Badge from '../../components/Badge';
import AddToCartButton from '../../components/AddToCartButton';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getError } from '../../utils';

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, product: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Product() {
    const params = useParams();
    const { slug } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);


    return (loading ? (
        <LoadingBox className="App carte"/>
    ) : error ? (
            <MessageBox className="App carte" variant="alert">{error}</MessageBox>
    ) : (
        <div className="item active">
            <div className="single-slide-item slide1">
                <div className="container">
                    <div className="welcome-hero-content">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="single-welcome-hero">
                                    <div className="welcome-hero-img">
                                        <img src={"../../" + (product.image)} alt="prod-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="single-welcome-hero">
                                    <div className="welcome-hero-txt">
                                    <Helmet>
                                        <title>{product.name}</title>
                                        </Helmet>
                                                <h2>{product.name}</h2>
                                        <Rating  rating={product.rating} numReviews={product.numReviews}/>
                                        <Badge inStock={product.countInStock}/>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div className="packages-price">
                                            <h2>
                                                ${product.price}
                                                <del>$ {product.oldPrice}</del>
                                            </h2>
                                        </div>
                                        <AddToCartButton inStock={product.countInStock}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Product