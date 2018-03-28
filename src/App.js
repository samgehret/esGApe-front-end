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
import HappyHours from './components/HappyHours/HappyHours'

// dependencies not in create-react-app
import { Route, Link, Switch, Redirect } from 'react-router-dom' // Redirect,
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
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
    const restaurant = {
      '_id': '5aba77a8952c454828cd34d5',
      'name': 'Post Pub',
      'address': '1422 L St NW, Washington, DC 20005',
      'website': 'https://postpubdc.com/',
      'drinkPrice': '7',
      'ambiance': 'A dive bar with subpar service. Expect to wait a long time between server visits.',
      'description': 'This is by far the closest bar to GA. Its a dive bar with poor service and random happy hour deals every night. Be careful on Friday night there are NO BEERS SPECIALS. Feel like drinks here should be less expensive than they are...',
      'crowds': 'Fills up for lunch and for happy hour. Can be difficult to find a seat',
      'distance': '1 block from GA',
      'deals': 'Friday after work is Absolute drinks for a reduced rate'
    }
    return (
      <div className='App'>
        <div className='Main'>

          <Navbar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
          <Switch>
            <Route path='/signup' render={() => <SignupForm handleInput={this.handleInput} handleSignUp={this.handleSignUp} />} />
            <Route path='/login' render={() => <LoginForm handleInput={this.handleInput} handleLogIn={this.handleLogIn} />} />
            <Route path='/home' render={() => <Home />} />
            <Route path='/newlunchspot' render={() => <NewLunchSpotForm email={this.state.email} handleNewLunchSpotInput={this.handleNewLunchSpotInput} />}/>
            <Route path='/newhappyhour' render={() => <NewHappyHourForm email={this.state.email} handleNewHappyHourInput={this.handleNewHappyHourInput} />}/>
            <Route path='/lunchspots' render={() => <LunchSpots />} />
            <Route path='/happyhours' render={() => <HappyHours />} />
            <Route
              path='/*'
              render={() => {
                return (
                  <Redirect to='/home' />
                )
              }}
              />
          </Switch>
          {/* <div className='search'>
            <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleSearch} />
          </div> */}
        </div>
      </div>
    )
  }
}

export default App
