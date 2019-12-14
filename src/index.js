import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'
import Login from './login/login'
import Container from './index/container'
import SignUp from './signup/signUp'
import ForgotPassword from './forgotPassword/forgotPassword'
import NotFound404 from './notFound/notFound'
import './index/components/styles.scss'
import './login/styles.scss'
import './settings/components/styles.scss'
import './notFound/styles.scss'
import Setting from './settings/settings'
import * as serviceWorker from './serviceWorker'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const store = createStore(conversation, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/im/'>
              <Container />
            </Route>
            <Route path='/sign-up/'>
              <SignUp />
            </Route>
            <Route path='/forgot-password/'>
              <ForgotPassword />
            </Route>
            <Route path='/setting/'>
              <Setting />
            </Route>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound404 />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
