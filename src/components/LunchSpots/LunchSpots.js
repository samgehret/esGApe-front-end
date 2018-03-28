import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './LunchSpots.css'

class LunchSpots extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lunchspots: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:3002/lunchspots')
      .then((res) => {
        this.setState({lunchspots: res.data})
        console.log(res.data)
      })
  }
  render () {
    var lunchspots = this.state.lunchspots.map((lunchspot, i) => {
      return (
        <Link to={`/lunchspots/${lunchspot._id}`} info={lunchspots}>
          <div className='lunchspot' key={i}>
            {lunchspot.name}: {lunchspot.distance}
          </div>
        </Link>

      )
    })

    return (
      <div className='lunchcontainer'>
        <h1> Lunch Spots Near GA </h1>
        <div className='lunchspots'>
          {lunchspots}
        </div>
      </div>
    )
  }
}

export default LunchSpots
