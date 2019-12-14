import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { sendPmToChatBox } from '../../action/sendPm'
import { listOfMassage } from '../../action/listOfMassage'
import Attachment from '../img/attachment.png'
import Happiness from '../img/happiness.png'
import PaperPlane from '../img/paper-plane.png'

function WriteBox () {
  const [pm, setPm] = useState({
    pm: ''
  })

  const dispatch = useDispatch()
  const chatText = useSelector(state => state.massageList)
  const darkMod = useSelector(state => state.lightMod)

  function sendPm () {
    if (document.getElementById('my-talk').value !== '') {
      dispatch(sendPmToChatBox(pm.pm))
      document.getElementById('my-talk').value = ''
      setPm({ pm: '' })
    }

    axios.post('http://click.7grid.ir/conversation/create/', {
      token: window.localStorage.getItem('token'),
      conversation_id: '',
      text: ''
    })
      .then((response) => {
        dispatch(listOfMassage(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  function send (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('send-pm').click()
    }
  }

  return (
    <div className={darkMod === true ? 'write-box-dark-mod' : 'write-box'}>
      <div className='attach'>
        <img src={Attachment} />
      </div>
      <div className='write-box-chat'>
        <input onChange={(event) => setPm({ pm: event.target.value })} onKeyDown={(event) => send(event)} id='my-talk' type='text' placeholder='write your massage ...' />
      </div>
      <div className='emoji'>
        <img src={Happiness} />
      </div>
      <div
        onClick={() => sendPm()}
        className='send-pm'
        id='send-pm'
      >
        <img src={PaperPlane} />
      </div>
    </div>
  )
}

export default WriteBox
