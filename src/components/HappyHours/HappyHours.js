import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './HappyHours.css'

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
    let bars = this.state.bars.map((bar, i) => {
      return (
        <Link to={`/happyhours/${bar._id}`} info={bars}>
          <div className='bar' key={i}>
            {bar.name}: {bar.distance}
          </div>
        </Link>
      )
    })

    return (
      <div className='barscontainer'>
        <h1>Happy Hour Near GA</h1>
        <div className='barslist'>
          {bars}
        </div>
      </div>
    )
  }
}

export default Happyhours
