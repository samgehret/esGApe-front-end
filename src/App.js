import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Restaurant from './components/Restaurant'
import Navbar from './components/Navbar'
import SignupForm from './components/forms/SignupForm'
import LoginForm from './components/forms/LoginForm'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      restaurant: []  // restaurant start from [] empty array
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='Main'>
        <Navbar />
        {/* Add Switch? */}
          <Route path='/signup' render={() => <SignupForm />}/>
          <Route path='/login' render={() => <LoginForm />}/>
          <div className='search'>
            <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleSearch} />
          </div>
          <div className='restaurant'>
            {this.state.restaurant.map((restaurant) => {
              return <Restaurant key={restaurant.name} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App
