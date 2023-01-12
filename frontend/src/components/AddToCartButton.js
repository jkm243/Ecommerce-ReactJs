import React from 'react'

const AddToCartButton = (props) => {
    const { inStock } = props;
    return (inStock>0&&(
        <button className="btn-cart welcome-add-cart" >
            <span className="lnr lnr-plus-circle"></span>
            add <span>to</span> cart
        </button>)
    )}
export default AddToCartButton;