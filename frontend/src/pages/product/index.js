import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
// import Rating from '../../components/Rating';
import { useParams } from 'react-router-dom'

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
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        };
        fetchData();
    }, [slug]);


    return (loading ? (
        <div className='App carte'>Loading....</div>
    ) : error ? (
        <div className='App carte'>{error}</div>
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
                                        <h2>{product.name}</h2>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div className="packages-price">
                                            <p>
                                                $ {product.price}
                                                <del>$ 499.00</del>
                                            </p>
                                        </div>
                                        <button className="btn-cart welcome-add-cart" >
                                            <span className="lnr lnr-plus-circle"></span>
                                            add <span>to</span> cart
                                        </button>
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