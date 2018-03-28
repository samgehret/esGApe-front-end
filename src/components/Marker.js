import React, { Component } from 'react'
import './Marker.css'

class Marker extends Component {
  render () {
    let classes = 'marker'
    if (this.props.selected) {
      classes += ' selected'
    }
    return (
      //render happyhours and lunchspots
      <div className={classes}>{this.props.restaurants}</div>)
  }
}

export default Marker