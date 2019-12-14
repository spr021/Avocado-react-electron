import React from 'react'
import { useSelector } from 'react-redux'

function ChangeSetting () {
  const darkMod = useSelector(state => state.lightMod)

  return (
    <div className={darkMod === true ? 'chat-dark-mod' : 'chat'}>
      <span> </span>
    </div>
  )
}

export default ChangeSetting
