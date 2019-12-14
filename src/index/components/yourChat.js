import React from 'react'
// import './styles.css';

import Avatar from '../img/avatars/girl-1.png'

class YourMsg extends React.Component {
  render () {
    return (
      <div className='msg-you'>
        <div className='talk-img'><img src={Avatar} /></div>
        <div className='talk-msg'>{this.props.text}</div>
      </div>
    )
  }
}

export default YourMsg
