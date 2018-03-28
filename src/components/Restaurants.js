import React, { Component } from 'react'
import axios from 'axios'

import Restaurant from './Restaurant'

class Restaurants extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3002/happyhours')
            .then(response => {
              this.setState({
                restaurants: response.data
              })
            })
  }

  render () {
    let showRestaurants = this.state.restaurants.map((restaurant, i) => {
      return (
        <div key={i}>
          <Restaurant info={restaurant} />
        </div>
      )
    })
    // console.log('restauants')
    // console.log(showRestaurants)
    return (
      <div>
        {showRestaurants}
      </div>
    )
  }
}

export default Restaurants
