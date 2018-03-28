import React, { Component } from 'react'
import axios from 'axios'

import HappyHour from './HappyHour'

class HappyHours extends Component {
  constructor (props) {
    super(props)

    this.state = {
      happyhours: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3002/happyhours')
            .then(response => {
              this.setState({
                happyhours: response.data
              })
            })
  }

  render () {
    let showHappyHours = this.state.happyhours.map((happyhour, i) => {
      return (
        <div key={i}>
          <HappyHour info = {happyhour} />
        </div>
      )
    })
    // console.log('restauants')
    // console.log(showRestaurants)
    return (
      <div>
       {showHappyHours}
      </div>
    )
  }
}

export default HappyHours
