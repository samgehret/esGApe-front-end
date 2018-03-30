import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './HappyHours.css'

class HappyHours extends Component {
  constructor (props) {
    super(props)
    this.state = {
      happyhours: []
    }
  }
  componentDidMount () {
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.get(`http://${endpoint}/happyhours`)
      .then((res) => {
        this.setState({happyhours: res.data})
        console.log(res.data)
      })
  }
  render () {
    var happyhours = this.state.happyhours.map((lunchspot, i) => {
      return (
        <Link to={`/happyhours/${lunchspot._id}`} info={happyhours}>
          <div className='lunchspot' key={i}>
            {lunchspot.name}: {lunchspot.distance}
          </div>
        </Link>

      )
    })

    return (
      <div className='lunchcontainer'>
        <h1> Happyhour Spots Near GA </h1>
        <div className='happyhours'>
          {happyhours}
        </div>
      </div>
    )
  }
}

export default HappyHours
