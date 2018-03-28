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
        <p>{this.state.info.drinkPrice}</p>
        <p>{this.state.info.description}</p>
        <p>{this.state.info.distance}</p>
        <p>{this.state.info.crowds}</p>
        <p>{this.state.info.ambiance}</p>
        <p>{this.state.info.deals}</p>
      </div>
    )
  }
}

export default HappyHour

// "_id": "5aba77a8952c454828cd34d5",
// "name": "Post Pub",
// "address": "1422 L St NW, Washington, DC 20005",
// "website": "https://postpubdc.com/",
// "drinkPrice": "7",
// "ambiance": "A dive bar with subpar service. Expect to wait a long time between server visits.",
// "description": "This is by far the closest bar to GA. Its a dive bar with poor service and random happy hour deals every night. Be careful on Friday night there are NO BEERS SPECIALS. Feel like drinks here should be less expensive than they are...",
// "crowds": "Fills up for lunch and for happy hour. Can be difficult to find a seat",
// "distance": "1 block from GA",
// "deals": "Friday after work is Absolute drinks for a reduced rate"