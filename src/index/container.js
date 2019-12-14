import React from 'react'
import { useSelector } from 'react-redux'
import Menu from './components/menu'
import Contacts from './components/contacts'
import Chat from './components/chat'

function Container () {
  const blurModd = useSelector(state => state.blurMod)

  return (
    <div className={blurModd === true ? 'container-blur-mod' : 'container'}>
      <Menu />
      <Contacts />
      <Chat />
    </div>

  )
}

export default Container
