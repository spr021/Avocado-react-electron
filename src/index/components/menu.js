import React from 'react'
import logo2 from '../img/logo2.png'
import contacts from '../img/contacts.png'
import chat from '../img/chat.png'
import group from '../img/group.png'
import channel from '../img/channel.png'
import file from '../img/file.png'
import settings from '../img/settings.png'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return (
      <div className='menu'>
        <Link to='/im/'>
          <div className='logo'><img className='img-logo' src={logo2} /></div>
        </Link>
        <div className='menu-item'><img className='img-logo' src={contacts} /></div>
        <div className='menu-item'><img className='img-logo' src={chat} /></div>
        <div className='menu-item'><img className='img-logo' src={group} /></div>
        <div className='menu-item'><img className='img-logo' src={channel} /></div>
        <div className='menu-item'><img className='img-logo' src={file} /></div>
        <Link to='/setting/'>
          <div className='menu-item menu-item-setting'><img className='img-logo' src={settings} /></div>
        </Link>
      </div>
    )
  }
}

export default Menu
