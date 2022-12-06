import React from 'react'
import './Share.css'
import {MdPermMedia} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import {BsFillEmojiLaughingFill} from 'react-icons/bs'
import {MdLabel} from 'react-icons/md'

const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="/assets/1.jpg" alt="" />
        <input
          placeholder="What's in your mind Sebastain?"
          className="shareInput"
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <MdPermMedia   
                   color="tomato" className="shareIcon"/>
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  <MdLabel color="blue" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                  <ImLocation color="green" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  <BsFillEmojiLaughingFill color="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton">Share</button>
      </div>
    </div>
  </div>
  )
}

export default Share