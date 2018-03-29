import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import styled from 'styled-components'

class Home extends Component {
  render () {
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;`
    const Wrapper = styled.section`padding: 4em; background: papayawhip;`

    return (

      <div className='welcome page'>
        <Wrapper>
          <Title><h1>Welcome to EsGApe!</h1></Title>

          <div className='title' bgcolor='#58b3ff'>
            <h1 />
            <Title><h3>What are you looking to do?</h3></Title>
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
        </Wrapper>
      </div>
    )
  }
}

export default Home
