import React, { Component } from 'react'
import axios from 'axios'
import LunchSpot from './LunchSpot'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

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
          <h1>hello world</h1>
        </div>

      )
    })

    return (
      <div>
        {lunchspots}
      </div>
    )

    // if (this.state.lunchspots) {
    //   let lunchspots = this.state.lunchspots
    //   return (
    //     <div>
    //       {lunchspots.map((lunchspot) => {
    //         return (
    //           <Link to={`/lunchspots/${lunchspot._id}`}>{lunchspot.name}</Link>
    //         )
    //       })}
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div >
    //       <p>waiting for api to execute...</p>
    //     </div>
    //   )
    // }
  }
}

export default LunchSpots
