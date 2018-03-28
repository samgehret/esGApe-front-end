import React, { Component } from 'react'
import axios from 'axios'

class LunchSpot extends Component {
  constructor () {
    super()
    this.state = {
      info: []
    }
  }
  componentDidMount () {
    axios.get(`http://localhost:3002/lunchspots/${this.props.match.params.id}`)
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
        <h1>Individual LunchSpot</h1>
        <p>{this.state.info.name}</p>

        <p>{this.state.info.address}</p>

        <p>{this.state.info.website}</p>
        <p>{this.state.info.drinkPrice}</p>
        <p>{this.state.info.ambiance}</p>
        <p>{this.state.info.desc}</p>
        <p>{this.state.info.description}</p>
        <p>{this.state.info.crowds}</p>
        <p>{this.state.info.distance}</p>
        <p>{this.state.info.deals}</p>
      </div>
    )
  }
}

export default LunchSpot
