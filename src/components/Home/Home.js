import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
class Home extends Component {
  render () {
    return (

      <div className='welcome page'>
        <h1>Welcome to EsGApe!</h1>

        <div className='title' bgcolor='#58b3ff'>
          <h1 />
          <h3>What are you looking to do?</h3>
        </div>
        <div className='container'>
          <Link to='/lunchspots'>
            <div className='clickbox'>
              <div>
                <h3>Eat</h3>
              </div>
              <div>
                <img src='https://i.giphy.com/media/eSQKNSmg07dHq/200.gif' />
              </div>
            </div>
          </Link>
          <Link to='/happyhours'>
            <div className='clickbox'>
              <div>
                <h3>Drink</h3>
              </div>
              <div>
                <img src='https://i.giphy.com/media/IRoz0jP2Pr26I/giphy.webp' />
              </div>
            </div>
          </Link>
        </div>

      </div>
    )
  }
}

export default Home
