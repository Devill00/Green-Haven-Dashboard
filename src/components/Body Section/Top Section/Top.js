import React from 'react'
import './top.scss'


//imported images ==========>
import profile1 from '../../../Assets/profile1.jpg'
import img2 from '../../../Assets/img2.png'
import vid9 from '../../../Assets/vid9.mp4'

// imported icons =========>
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BsArrowRightShort } from 'react-icons/bs';
import { BsQuestionOctagon } from "react-icons/bs";




export default function Top() {
  return (

  <div className="topSection">
    <div className='top flex'>
     <div className='left'>
      <div className='welcome'>Welcome to Green Haven.</div>
      <p>Hello israTech, Welcome back!</p>
     </div>

     <div className='searchBar flex'>
      <input type="text" placeholder=' Search DashBoard' />
      <BiSearchAlt className='icon'/>
     </div>

     <div className='right flex'>
      <AiOutlineMessage className='icon'/>
      <FaRegBell className='icon'/>
      <div className="profileimg">
      <img src={profile1} alt="" />
      </div>
      
     </div>
 </div>

 <div className="cardSection flex">
  <div className="rightCard flex">
    <h1>Create and sell extraordinary products</h1>
    <p>The World's fast growing industry today are natural made products!</p>

    <div className="buttons flex">
      <button className="btn">Explore More</button>
      <button className="btn transparent">Top Sellers</button>
    </div>

    <div className="videoDiv">
      <video src={vid9} autoPlay loop muted></video>

    </div>
  </div>

  <div className="leftCard flex">
    <div className="main flex">

      <div className="textDiv">
        <h1>My Stats</h1>

        <div className="flex">
          <span>
            Today <br /> <small>4 Orders</small>
            </span>
            <span>
            This Month <br /> <small>121 Orders</small>
            </span>
        </div>
       
       <span className="flex link">
        Go to my orders <BsArrowRightShort className='icon'/>
       </span>
      </div>

      <div className="imgDiv">
        <img src={img2} alt="" />
      </div>

    </div>



    <div className="sideBarCard">
      <BsQuestionOctagon className='icon' />
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>

        <h3>Help Center</h3>
        <p>Having Trouble ?, Contact Us</p>

        <button className='btn'>Go to help center</button>
      </div>
      </div>


  </div>
 </div>
    </div>
  )
}
