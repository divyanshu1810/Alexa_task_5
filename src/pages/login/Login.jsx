import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="email" placeholder='Enter your email...' />
            <label>Password</label>
            <input  className='loginInput' type="password" placeholder='Enter your passwword...' />
            <button className="loginLoginButton"><Link className='link' to='/login'>Login</Link></button>
        </form>
            <button className="registerLoginButton"><Link className='link' to='/register'>Register</Link></button>
    </div>
  )
}
