import React from 'react'
import { useSelector } from 'react-redux'
// import './styles.scss';
import Account from './account'
import ChatBox from './chatBox'
import WriteBox from './writeBox'

function Chat () {
  const darkMod = useSelector(state => state.lightMod)
  const profile = useSelector(state => state.name)

  return (
    <div className={darkMod === true ? 'chat-dark-mod' : 'chat'}>
      <Account />
      <div className='tc-line' />
      <ChatBox />
      {profile !== '' ? <><div className='tc-line' /><WriteBox /></> : ''}
    </div>
  )
}

export default Chat
