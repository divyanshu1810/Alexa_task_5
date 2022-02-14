import React from 'react'
import './topBar.css'
import { Link } from 'react-router-dom';

export default function topBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className='topListItem' ><Link to='/' style={{textDecoration:'none',color:'inherit'}}>HOME</Link></li>
            <li className='topListItem'><Link to='/' style={{textDecoration:'none',color:'inherit'}}>ABOUT</Link></li>
            <li className='topListItem'><Link to='/' style={{textDecoration:'none',color:'inherit'}}>CONTACT</Link></li>
            <li className='topListItem'><Link to='/write' style={{textDecoration:'none',color:'inherit'}}>WRITE</Link></li>
            <li className='topListItem'><Link to='/' style={{textDecoration:'none',color:'inherit'}}>{user && "LOGOUT"}</Link></li>
          </ul>
        </div>
        <div className="topRight">
          {user ? ( <img src="https://i.imgur.com/RM2ln57.png" alt="..profile" className='topImg' />) : 
          <ul className='topList'>
            <li className="topListItem">
            <Link to='/login' style={{textDecoration:'none',color:'inherit'}}>LOGIN</Link> 
            </li>
            <li className="topListItem">  
            <Link to='/register' style={{textDecoration:'none',color:'inherit'}}>REGISTER</Link>
            </li>
          </ul>
          } 
          <i className=" searchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
