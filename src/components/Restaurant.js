import React, { Component } from 'react'
import './Restaurant.css'

class Restaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bar: this.props.info
    }
  }

  render () {
    return (
      <div className='bar-detail'>
        <h3>{this.state.bar.name}</h3>
      </div>
    )
  }
}

export default Restaurant
