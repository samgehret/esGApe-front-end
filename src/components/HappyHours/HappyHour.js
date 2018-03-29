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
    this.getInfo()
  }

  getInfo () {
    axios.get(`http://localhost:3002/happyhours/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({info: res.data})
      // console.log('state')
      // console.log(this.state.info._id)
    })
  }

  render (props) {
    // console.log('individual info')
    // console.log(this.props.match.params.id)
    return (
      <div>
        <h1>It's always 5 o'clock somewhere.</h1>
        <p>{this.state.info.name}</p>

        <p>{this.state.info.address}</p>

        <p>{this.state.info.website}</p>
        <p>{this.state.info.distance}</p>
        <p>{this.state.info.ambiance}</p>
        <p>{this.state.info.description}</p>
        <p>Avergae price ${this.state.info.drinkPrice}</p>
        <p>Deals List: {this.state.info.deals}</p>
      </div>
    )
  }
}

export default HappyHour
