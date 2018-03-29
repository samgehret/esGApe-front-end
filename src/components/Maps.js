import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import HappyHours from './components/HappyHours'
import LunchSpots from './components/LunchSpots'

class Maps extends Component {
  render () {
         
    let restaurant = {
        HappyHours = null,
        LunchSpots = null
    }
    return (
      <h1>Map Map Map</h1>
      <p>{this.state.info.address}</p>

      https://maps.googleapis.com/maps/api/geocode/json?address=high+st+hasting&components=country:GB&key=YOUR_API_KEY

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
