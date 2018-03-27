import React, { Component } from 'react'
import './Restaurant.css'

class Restaurant extends Component {
  render () {
    // const restaurant = this.props.restaurant.name + ' $' + this.props.restaurant.drinkPrice + ' - ' + this.props.restaurant.distance
    // const address = this.props.restaurant.address
    // const feedback = this.props.restaurant.description
    // const ambiance = this.props.restaurant.ambiance
    // const crowds = this.props.restaurant.crowds
    // const deals = this.props.restaurant.deals
    console.log(this.props.info)
   
    return (
      <div>
        {this.props.info.name}
        </div>
    )
  }
}

export default Restaurant

