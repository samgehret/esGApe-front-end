import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to EsGApe!</h1>
        <h2>What are you looking to do</h2>
        <div className='container'>
          <div className='clickbox'>
            <h3>Eat Lunch</h3>
          </div>
          <div className='clickbox'>
            <h3>Go to Happy Hour</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
