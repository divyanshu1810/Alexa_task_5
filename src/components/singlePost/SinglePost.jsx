import React from 'react'
import './singlePost.css'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i className='singlePostIcon far fa-edit'></i>
                <i className='singlePostIcon far fa-trash-alt'></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author : <b>Divyanshu</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem culpa quibusdam dolorum aliquam expedita ea minus eveniet eius accusamus alias, consectetur corporis modi id molestias iste a sapiente nobis officiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi omnis accusantium blanditiis nesciunt dicta. Enim quae error aliquid totam? Commodi autem magnam aliquid voluptatem quod placeat, molestiae quae. Quasi, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt tempore consequatur explicabo, quos, vitae quae aut nulla ipsum itaque tempora alias labore obcaecati dolorem vel. Veritatis animi laborum ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur odit veritatis, voluptatibus eligendi maiores magni commodi. Similique quaerat laborum pariatur ad quia, amet quas molestias laudantium quidem delectus id!</p>
        </div>
    </div>
  )
}
