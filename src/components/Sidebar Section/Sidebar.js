import React from 'react'
import './sidebar.scss'


// imported Images ===============>
import logo from '../../Assets/Logo.png'


// imported icons ==============>
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionOctagon } from "react-icons/bs";



export default function SideBar() {
  return (
    <div className='sideBar grid'> 

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Green Haven</h2>
      </div>


      <div className="menuDiv">
        <h3 className="divTitle">
          Quick Menu
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                DashBoard
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="settingsDiv">
        <h3 className="divTitle">
          Settings
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                charts
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon" />
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdPermContactCalendar className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>
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
  )
}
