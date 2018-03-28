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
        <div className='bar-preview'>
          <h3>{this.state.bar.name}</h3>
        </div>
      )
    }
   
  //   return (
  //     <div>
  //       {this.props.info.name}
  //       </div>
  //   )
  // }
}

export default Restaurant


