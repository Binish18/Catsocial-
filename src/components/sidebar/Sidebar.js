import React from 'react'
import {MdRssFeed} from 'react-icons/md'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {AiFillPlayCircle} from 'react-icons/ai'
import {MdGroup} from 'react-icons/md'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {BsCalendarEvent} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'
import './Sidebar.css'
import { Users } from '../../dummy'
import CloseFriend from '../closeFriend/CloseFriend'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatSquareTextFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <AiFillPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <AiOutlineQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWork className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
            

        </ul>
      </div>
    </div>
  )
}

export default Sidebar