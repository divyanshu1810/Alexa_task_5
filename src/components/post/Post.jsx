import React from 'react'
import './post.css'
export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span><hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDes'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores at nostrum libero commodi nobis. Veniam at explicabo asperiores fugit! Officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nobis distinctio cumque vitae laboriosam. Magni, odit ea pariatur possimus sunt voluptas. Quod consequuntur harum similique veritatis nesciunt minima, ipsam fuga blanditiis eaque deserunt officia magnam. Nesciunt, quisquam eveniet. Nostrum in earum porro. Rem dolorum aspernatur incidunt nihil eaque, explicabo velit!</p>
    </div>
  )
}
