import React from 'react'
import logo from '../login/logo2.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { withRouter } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  BrowserRouter as Router, Link
} from 'react-router-dom'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: '',
      email: '',
      password: ''
    }
  }

  handleClick () {
    this.setState({ ...this.state, loading: true })
    axios.post('http://click.7grid.ir/auth/signin/', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        window.localStorage.setItem('token', response.data.data.token)
        console.log('state', this.state)
        this.props.history.push('/im/')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this.setState({ ...this.state, loading: false })
      })
  }

  render () {
    return (
      <>
        <div className='loginLogo'><img src={logo} /></div>
        <div className='loginBox'>
          <div className='signInText'>
            <p>Sign in</p>
            <p>Please enter your email address and password.</p>
          </div>
          <div>
            <TextField onChange={(event) => this.setState({ ...this.state, email: event.target.value })} className='email-login' id='outlined-required' label='E-mail' variant='outlined' />
          </div>
          <div>
            <TextField onChange={(event) => this.setState({ ...this.state, password: event.target.value })} className='password-login' id='outlined-password-input' label='Password' type='password' autoComplete='current-password' variant='outlined' />
          </div>
          <div className='progress-bar'>
            {this.state.loading === true ? <CircularProgress /> : ''}
          </div>
          <div className='signInButton'>
            <Link to='/im/'><Button className='button-login' variant='contained' color='primary'>Sing in</Button> </Link>
            <div className='forgotText'>
              <Link className='forgotPassword' to='/forgot-password/'>Forgot Password?</Link>
              <div>Don't have an account?<Link className='signUpLink' to='/sign-up/'> Sign up</Link></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Login)
