import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/plus.css'

const Offer = () => {
  return (
    <div class="offer">
      <div class="bsmall-container">
        <div class="brow">
          <div class="col-2">
            <img src="https://i.ibb.co/vJpbfdn/phylon.png" alt="phylon" border="0"/>
          </div>
          <div class="col-2">
            <p>Exclusively Available on Luka</p>
            <h1>Air Nike Phylon 2021</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quae molestias error id est voluptatibus quos amet
              numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
              eaque soluta quas modi.</small>
            <br />
            <Link to="/product/nike-phylon">
              <div  class="btnd">Buy Now &#8594;</div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer