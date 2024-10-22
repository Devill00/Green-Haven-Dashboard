import React from 'react'
import './listing.scss'

//imported icons =======>
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// imported images ===============>
import img3 from '../../../Assets/img3.png'
import plant3 from '../../../Assets/plant3.png'
import plant4 from '../../../Assets/plant4.png'

export default function Listing() {
  return (
    <div className='listingSection'>
     <div className="heading flex">
      <h1>My Listings</h1>
      <button className='btn flex'>
        See All <BsArrowRightShort className='icon'/>
        </button>
     </div>

     <div className="secContainer flex">
      <div className="singleItem">
        <AiFillHeart className='icon'/>
        <img src={img3} alt="" />
        <h3>Annual Vince</h3>
      </div>
      <div className="singleItem">
        <AiOutlineHeart className='icon'/>
        <img src={plant3} alt="" />
        <h3>Mixed Flowers</h3>
      </div>
      <div className="singleItem">
        <AiOutlineHeart className='icon'/>
        <img src={plant3} alt="" />
        <h3>Rose Vince</h3>
      </div>
      <div className="singleItem">
        <AiFillHeart className='icon'/>
        <img src={plant4} alt="" />
        <h3>Annual Vince</h3>
      </div>
     </div>

     <div className="sellers flex">
      <div className="topSellers">
        <div className="heading flex">
          <h3>
            Top Sellers
          </h3>
          <button className='btn flex'>
        See All <BsArrowRightShort className='icon'/>
        </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={img3} alt="" />
            <img src={img3} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="cardText">
            <span>
              14,556 Plants Sold <br/>
              <small>21 Sellers  
                <span className="date">
                   7 Days
              </span>

              </small>
            </span>
          </div>
        </div>
      </div>
      <div className="featuredSellers">
        <div className="heading flex">
          <h3>
            Featured Sellers
          </h3>
          <button className='btn flex'>
        See All <BsArrowRightShort className='icon'/>
        </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={img3} alt="" />
            <img src={img3} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="cardText">
            <span>
              23,586 Plants Sold <br/>
              <small>26 Sellers  
                <span className="date">
                   27 Days
              </span>

              </small>
            </span>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}
