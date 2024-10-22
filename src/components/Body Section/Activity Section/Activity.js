import React from 'react'
import './activity.scss'

// imported icons ======>
import { BsArrowRightShort } from "react-icons/bs";


// imported images ======>
import customerimage from '../../../Assets/customerimage.webp';
import customer2 from '../../../Assets/customer2.webp';
import customer3 from '../../../Assets/customer3.webp';
import customer4 from '../../../Assets/customer4.webp';
import customer5 from '../../../Assets/customer5.jpg';

export default function Activity() {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All 
          <BsArrowRightShort className="icon"/>

        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer2} alt="" />
          <div className="customerDetails">
            <span className="name">
              Jack Reacher
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={customerimage} alt="" />
          <div className="customerDetails">
            <span className="name">
                Ola Martha
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">4 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={customer3} alt="" />
          <div className="customerDetails">
            <span className="name">
              Michael Scofield
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">8 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={customer4} alt="" />
          <div className="customerDetails">
            <span className="name">
              Dr. Sara Tancredi
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">15 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={customer5} alt="" />
          <div className="customerDetails">
            <span className="name">
              Dr. Drunkestien
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">25 min ago</div>
        </div>
      </div>
    </div>
  )
}
