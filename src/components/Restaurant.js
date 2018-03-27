import React, { Component } from 'react'

class Restaurant extends Component {
  render () {
    const style = { backgroundImage: "url('" + this.props.restaurant.imageUrl + "')"}

    const name = this.props.restaurant.name + '$$$' + ' - ' + this.props.restaurant.name

    return (

      <div className='restaurant'>
        <div className='restaurant-picture' style={style} />
        <div className='restaurant-name'>{name}</div>
      </div>
    )
  }
}

export default Restaurant
