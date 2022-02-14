import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <h1 className="settingsUpdateTitle">Update Your Account</h1>
                <h1 className="settingsDelete">Delete Account</h1>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://i.imgur.com/RM2ln57.png" alt="" />
                    <label htmlFor="fileInput"><i className='settingsPPIcon far fa-user-circle'></i></label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Divaynshu' />
                <label>Email</label>
                <input type="email" placeholder='Divaynshu@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
