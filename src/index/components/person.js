import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { sendNameToHeader } from '../../action/contacts'
import { MassageList } from '../../action/loadMassageList'

function Person (props) {
  function loadPerson () {
    dispatch(sendNameToHeader(props.nickName, props.imgProfile))

    axios.post('http://click.7grid.ir/conversation/details/', {
      token: window.localStorage.getItem('token'),
      conversation_id: '',
      size: 40,
      date: ''
    })
      .then((response) => {
        dispatch(MassageList(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const dispatch = useDispatch()
  const darkMod = useSelector(state => state.lightMod)

  return (
    <div className={darkMod === true ? 'person-dark-mod' : 'person'} onClick={() => loadPerson()}>
      <div className='img-profile'>
        <img src={props.imgProfile} />
      </div>
      <div className='ct-info'>
        <div>
          <div className='nick-name'>{props.nickName}</div>
          <div className='date-pm'>{props.datePm}</div>
        </div>
        <div>
          <div className='last-pm'>{props.lastPm}</div>
          <div className='new-pm'><span>{props.newPm}</span></div>
        </div>
      </div>
    </div>
  )
}

export default Person
