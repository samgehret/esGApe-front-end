import React, { Component } from 'react'
// import logo from './logo.svg';
// stylesheet
import './App.css'
// components
import Restaurant from './components/Restaurant'
import Navbar from './components/Navbar'
import SignupForm from './components/forms/SignupForm'
import LoginForm from './components/forms/LoginForm'
import Restaurants from './components/Restaurants'
// dependencies not in create-react-app
import { Route, Link, Switch } from 'react-router-dom' // Redirect,
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
    //this.restaurant = this.restaurant.bind(this)
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
      console.log('successful signup')
    })
  }

  handleLogIn (e) {
    e.preventDefault()
    axios.post('http://localhost:3002/users/login', {email: this.state.email, password: this.state.password})
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    console.log('successful login')
  }

  // handleHappyHours (e) {
  //   e.preventDefault()
  //   axios.post('http://localhost:3002/happyhours', {email: this.state.email, password: this.state.password})
  //   .then(response => {
  //     localStorage.token = response.data.token
  //     this.setState({
  //       isLoggedIn: true
  //     })
  //   })
  //   console.log(happyhours)
  // }

  render () {
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
          <nav>
            <Link id='esGApe' to='/'><h1>esGApe</h1> </Link>
            <Link id='1' to='/restaurant'>Lunch </Link>
            <Link to='/restaurant'> Happy Hours</Link>
            <Link to='/login'> Log In </Link>
            <Link to='/signup'>Sign Up</Link>
          </nav>
          <Switch>
            <Route path='/signup' render={() => <SignupForm handleInput={this.handleInput} handleSignUp={this.handleSignUp} />} />
            <Route path='/login' render={() => <LoginForm handleInput={this.handleInput} handleLogIn={this.handleLogIn} />} />
            <Route path='/restaurant' render={() => <Restaurant restaurant={restaurant} />} />
            <Route path='/restaurants' render={() => {
              return (<Restaurants key={restaurant.name} />
              )
            }}
            />
          </Switch>

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
