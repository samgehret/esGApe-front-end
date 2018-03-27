import React, { Component } from 'react'
// import logo from './logo.svg';
//stylesheet
import './App.css'
// components
import Restaurant from './components/Restaurant'
import Navbar from './components/Navbar'
import SignupForm from './components/forms/SignupForm'
import LoginForm from './components/forms/LoginForm'
// dependencies not in create-react-app
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      restaurant: []  // restaurant start from [] empty array
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
    console.log(this.state)
  }
  
  handleInput(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSignUp(e) {
    e.preventDefault()
    axios.post('http://localhost:3002/users/signup', {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
    })
    console.log('successful signup')
  })

  
  }

  handleLogIn(e) {
    e.preventDefault()
    axios.post("http://localhost:3002/users/login", {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    console.log('successful login')
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
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
        <Navbar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>
        {/* Add Switch? */}
          <Route path='/signup' render={() => <SignupForm handleInput={this.handleInput} handleSignUp={this.handleSignUp} />}/>
          <Route path='/login' render={() => <LoginForm handleInput={this.handleInput} handleLogIn={this.handleLogIn} />}/>
          <div className='search'>
            <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleSearch} />
          </div>
          <div>
            <Restaurant restaurant={restaurant} />
          </div>
          {/* <div className='restaurant'>
            {this.state.restaurant.map((restaurant) => {
              return <Restaurant key={restaurant.name} />
            })}
          </div> */}
        </div>
      </div>
    )
  }
}

export default App
