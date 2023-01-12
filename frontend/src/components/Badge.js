import React from 'react'

const Badge = (props) => {
    const {inStock} = props;
  return (<>
  <span className='text'>Status : </span>
    {inStock > 0 ? (
        <span class="badge text-bg-success">In stock</span>
    ):(
        <span class="badge text-bg-danger">Out of stock</span>
    )}
    </>
  )
}

export default Badge