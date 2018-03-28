import React, { Component } from 'react'
import axios from 'axios'
import LunchSpot from './LunchSpot'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
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
        <div key={i}>
          <Link to={`/lunchspots/${lunchspot._id}`} info={lunchspots}> {lunchspot.name} </Link>
          {/* {lunchspot.name} */}
        </div>

      )
    })

    return (
      <div>
        <h1> LunchSpots Near GA </h1>
        {lunchspots}
      </div>
    )
  }
}

export default LunchSpots
