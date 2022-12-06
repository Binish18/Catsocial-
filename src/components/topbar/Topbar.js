import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPersonFill} from 'react-icons/bs'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import './Topbar.css'
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">CatSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BiSearch className="searchIcon" />
          <input
            placeholder="Search for cat"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsPersonFill/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatLeftTextFill/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/1.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}

export default Topbar