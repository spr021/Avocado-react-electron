import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../img/contact.png'
import Star from '../img/star.png'
import Information from '../img/information.png'
import Menu from '../img/menu.png'
import AccountImg from '../img/avatars/boy.png'

function Account () {
  const darkMod = useSelector(state => state.lightMod)
  const nickName = useSelector(state => state.name)
  const profImg = useSelector(state => state.profImg)

  return (
    <div className={darkMod === true ? 'account-dark-mod' : 'account'}>
      <div onClick='profileView()'>
        <div className='profile-img'>
          <img src={profImg} />
        </div>
        {console.log('!@#$%^&*', nickName)}
        <div className='username'>{nickName}</div>
      </div>
      <div>
        <div className='new-msg'>
          <span>+ New Massage</span>
        </div>
        <div className='account-list'>
          <div className='account-img'>
            <img src={AccountImg} />
          </div>
          <div className='account-name'>saber</div>
        </div>
        <div className='fav'>
          <div><img src={Contact} /></div>
          <div><img src={Star} /></div>
          <div><img src={Information} /></div>
          <div><img src={Menu} /></div>
        </div>
      </div>
    </div>
  )
}

export default Account
