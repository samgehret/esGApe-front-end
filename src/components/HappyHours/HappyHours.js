import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import './Happyhours.css'

class Happyhours extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bars: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:3002/happyhours')
      .then((res) => {
        this.setState({bars: res.data})
        console.log(res.data)
      })
  }
  render () {
    let bars = this.state.bars.map((happyhour, i) => {
      return (
        <Link to={`/happyhours/${happyhour._id}`} info={bars}>
          <div className='bar' key={i}>
            {happyhour.name}: {happyhour.distance}
          </div>
        </Link>
      )
    })

    return (
      <div className='barscontainer'>
        <h1> Bars Near GA </h1>
        <div className='bars'>
          {bars}
        </div>
      </div>
    )
  }
}

export default Happyhours
