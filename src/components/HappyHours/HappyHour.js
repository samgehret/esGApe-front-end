import React, { Component } from 'react'
import axios from 'axios'

class HappyHour extends Component {
  constructor () {
    super()
    this.state = {
      info: []
    }
  }
  componentDidMount () {
    axios.get(`http://localhost:3002/happyhour/${this.props.match.params.id}`)
          .then((res) => {
            this.setState({info: res.data})
            console.log('state')
            console.log(this.state.info)
          })
  }
  render (props) {
    // console.log('individual info')
    // console.log(this.props.match.params.id)
    return (
      <div>
        <h1>Happy Hour</h1>
        <p>{this.state.info.name}</p>

        <p>{this.state.info.address}</p>

        <p>{this.state.info.website}</p>
        <p>{this.state.info.lunchPrice}</p>
        <p>{this.state.info.description}</p>
        <p>{this.state.info.distance}</p>
        <p>{this.state.info.recommendedItems}</p>
        <p>{this.state.info.foodType}</p>
        <p>{this.state.info.crowds}</p>
        <p>{this.state.info.ambiance}</p>
      </div>
    )
  }
}

export default HappyHour
