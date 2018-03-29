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
import { Route, Link, Switch, Redirect } from 'react-router-dom' // Redirect,
import axios from 'axios'
//import GoogleMapReact from 'google-map-react'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
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
    console.log(this.state)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSignUp (e) {
    e.preventDefault()
    axios.post('http://localhost:3002/users/signup', {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    localStorage.email = this.state.email
    window.location.replace('/')
  }

  handleLogIn (e) {
    e.preventDefault()
    axios.post('http://localhost:3002/users/login', {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
      localStorage.email = this.state.email

    })
    window.location.replace('/')
  }

  handleLogOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false 
    })
    localStorage.clear()
    window.location.replace('/')
    console.log('logged out')
  }
  render () {
  
    console.log(this.state)

    return (

      <div className='app'>
        <div className='main'>
          <Navbar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
          <Switch>
            <Route path='/signup' render={() => <SignupForm handleInput={this.handleInput} handleSignUp={this.handleSignUp} />} />
            <Route path='/login' render={() => <LoginForm handleInput={this.handleInput} handleLogIn={this.handleLogIn} />} />
            <Route path='/home' render={() => <Home />} />
            <Route path='/newlunchspot' render={() => <NewLunchSpotForm email={this.state.email} handleNewLunchSpotInput={this.handleNewLunchSpotInput} />}/>
            <Route path='/newhappyhour' render={() => <NewHappyHourForm email={this.state.email} handleNewHappyHourInput={this.handleNewHappyHourInput} />}/>
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
        <div className='map'>
           
        </div>
      </div>
    )
  }
}

export default App
