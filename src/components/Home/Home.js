import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='title'>
          <h1>Welcome to EsGApe!</h1>
          <h3>What are you looking to do?</h3>
        </div>
        <div className='container'>
          <Link to='/lunchspots'>
            <div className='clickbox'>
              <h3>Eat</h3>
            </div>
          </Link>
          <Link to='/happyhours'>
            <div className='clickbox'>
              <h3>Drink</h3>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
