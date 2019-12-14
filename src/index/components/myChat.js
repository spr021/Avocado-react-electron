import React from 'react'
// import './styles.css';

import AccountImg from '../img/avatars/boy.png'

class MyMsg extends React.Component {
  render () {
    return (
      <div className='msg-me'>
        <div className='talk-img'><img src={AccountImg} /></div>
        <div className='talk-msg'>{this.props.text}</div>
      </div>
    )
  }
}

export default MyMsg
