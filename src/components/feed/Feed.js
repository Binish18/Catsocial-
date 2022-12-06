import React from 'react'
import { Posts } from '../../dummy'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
const Feed = () => {
  return (
    <div className='feed'>
        <div className='feedwrapper'>
            <Share/>
            {Posts.map((p) => (
          <Post key={p.id} post={p} /> 
        ))}
        </div>
    </div>
  )
}

export default Feed