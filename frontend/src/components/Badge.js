import React from 'react'

const Badge = (props) => {
    const {inStock} = props;
  return (<>
  <span className='text'>Status : </span>
    {inStock > 0 ? (
        <span className="badge text-bg-success">In stock</span>
    ):(
        <span className="badge text-bg-danger">Out of stock</span>
    )}
    </>
  )
}

export default Badge