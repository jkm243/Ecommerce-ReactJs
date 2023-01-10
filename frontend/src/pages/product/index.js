import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const params = useParams();
    const { slug } = params;
    return (
        <div className='App carte'><h1>{slug}</h1>
        </div>
    )
}

export default Product