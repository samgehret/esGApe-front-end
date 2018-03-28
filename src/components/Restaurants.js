import React, { Component } from 'react'
import axios from 'axios'
import './Restaurants.css'
import Restaurant from './Restaurant'

class Restaurants extends Component {
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
                restaurants: response.data
              })
            })
  }

  render () {
    //const showRestaurants = this.state.restaurants.name + this.state.restaurants.address 
    let showBars = this.state.happyhours.map((bar, i) => {
      return (
        <div class='restaurants' key={i}>
          <Restaurant info = {bar} />
        </div>
      )
    }) 
    // console.log('restauants')
    // console.log(showRestaurants)
    return (
      <div>
       {showBars}
      </div>
    )
  }
}

export default Restaurants
