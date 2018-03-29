import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import HappyHours from './components/HappyHours'
import LunchSpots from './components/LunchSpots'

class Maps extends Component {
  render () {
          // center the map to the following coordinators
    let center = {
      lat: 38.904877, lng: -77.03621
    }
    let restaurant = {
        HappyHours = null,
        LunchSpots = null
    }
    return (
      <div className='GoogleMapReact'>
        <GoogleMapReact
          center={center}
// getting map closer to center increase the below number in ZOOM
          zoom={13}>
          {this.state.restaurant.map((restaurants) => {
            return <Marker
              key={restaurants.name} lat={restaurants.lat}
              lng={restaurants.lng} text={restaurants.address}
              selected={restaurant === this.state.selectedRestaurant}
    />
          })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Maps
