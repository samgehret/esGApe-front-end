import React, { Component } from 'react'
import axios from 'axios'
import './HappyHour.css'
import HappyHour from './HappyHour'


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

    var showBars = this.state.bars.map((bar, i) => {
      return (
       <div key={i}>
            {/* <Restaurant info={bar} /> */}
          <h1>Bars List</h1>
        </div>
      )
    }) 

    return (
      <div>
      {showBars}     
      </div>
    )
  }
}
 
export default Happyhours