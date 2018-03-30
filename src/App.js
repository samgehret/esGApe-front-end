import React, { Component } from 'react'
// import logo from './logo.svg';
// stylesheet
import './App.css'
// components
import HappyHour from './components/HappyHours/HappyHour'
import Navbar from './components/Navbar'
import SignupForm from './components/forms/SignupForm'
import LoginForm from './components/forms/LoginForm'
import NewLunchSpotForm from './components/forms/NewLunchSpotForm'
import NewHappyHourForm from './components/forms/NewHappyHourForm'
import Home from './components/Home/Home'
import LunchSpots from './components/LunchSpots/LunchSpots'

import LunchSpot from './components/LunchSpots/LunchSpot'
import HappyHours from './components/HappyHours/HappyHours'

// dependencies not in create-react-app

import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      errorSignup: null,
      errorLogin: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp (e) {
    e.preventDefault()
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.post(`http://${endpoint}/users/signup`, {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      localStorage.email = this.state.email
      this.setState({
        error: null,
        isLoggedIn: true
      })
      this.props.history.push('/home')
    }).catch(err => {
      if (err.response.status === 400) {
        this.setState({errorLogin: 'Sorry bro, all fields are required'})
      }
      if (err.response.status === 401) {
        this.setState({errorLogin: 'Sorry bro, email already taken'})
      }
      if (err.response.status === 404) {
        this.setState({errorLogin: 'Sorry bro, something went wrong...'})
      }
    })
  }

  handleLogIn (e) {
    e.preventDefault()
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.post(`http://${endpoint}/users/login`, {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      localStorage.email = this.state.email
      this.setState({
        // error: null,
        isLoggedIn: true
      })
      this.props.history.push('/home')
    })
    .catch(err => {
      if (err.response.status === 400) {
        this.setState({errorLogin: 'Sorry bro, all fields are required'})
      }
      if (err.response.status === 401) {
        this.setState({errorLogin: 'Sorry bro, couldnt find this user'})
      }
      if (err.response.status === 404) {
        this.setState({errorLogin: 'Sorry bro, wrong password...'})
      }
    })
  }

  handleLogOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
    window.location.replace('/')
  }
  render () {
    return (

      <div className='app'>
        <div className='main'>
          <Navbar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
          <Switch>
            <Route path='/signup' render={(props) => <SignupForm {...props} error={this.state.errorSignup} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />} />
            <Route path='/login' render={() => <LoginForm error={this.state.errorLogin} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />} />
            <Route path='/home' render={() => <Home />} />
            <Route path='/newlunchspot' render={(props) => <NewLunchSpotForm {...props} email={this.state.email} handleNewLunchSpotInput={this.handleNewLunchSpotInput} />} />
            <Route path='/newhappyhour' render={(props) => <NewHappyHourForm {...props} email={this.state.email} handleNewHappyHourInput={this.handleNewHappyHourInput} />} />
            <Route exact path='/lunchspots' render={() => <LunchSpots />} />
            <Route exact path='/lunchspots/:id' render={(props) => <LunchSpot {...props} />} />
            <Route exact path='/happyhours' render={() => <HappyHours />} />
            <Route exact path='/happyhours/:id' render={(props) => <HappyHour {...props} />} />
            <Route path='/*'
              render={() => {
                return (
                  <Redirect to='/home' />
                )
              }}
              />
          </Switch>
        </div>
      </div>

    )
  }
}

export default withRouter(App)
