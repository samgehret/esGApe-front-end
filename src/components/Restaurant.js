import React, { Component } from 'react'
import './Restaurant.css'

class Restaurant extends Component {
  render () {
    const restaurant = this.props.restaurant.name + ' $' + this.props.restaurant.drinkPrice + ' - ' + this.props.restaurant.distance
    const address = this.props.restaurant.address
    const feedback = this.props.restaurant.description
    const ambiance = this.props.restaurant.ambiance
    const crowds = this.props.restaurant.crowds
    const deals = this.props.restaurant.deals
    return (

      <div className='restaurant' onClick={this.props.handleClick}>
        <div className='restaurant-lunchspots'>
          <div className='restaurant-name'>{restaurant}</div>
          <div className='restaurant-address'>{address} </div>
          <div className='restaurant-feedback'>{feedback} </div>
          <div className='restaurant-feedback'>{ambiance} </div>
          <div className='restaurant-feedback'>{crowds} </div>
          <div className='restaurant-feedback'>{deals} </div>
        </div>
        <div className='restaurant-happyhours'>
          <div className='restaurant-name'>{restaurant}</div>
          <div className='restaurant-address'>{address} </div>
          <div className='restaurant-feedback'>{feedback} </div>
          <div className='restaurant-feedback'>{ambiance} </div>
          <div className='restaurant-feedback'>{crowds} </div>
          <div className='restaurant-feedback'>{deals} </div>
        </div>
      </div>
    )
  }
}

export default Restaurant

