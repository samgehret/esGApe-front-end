import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Restaurant from './components/Restaurant'
//import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurant: []  // restaurant start from [] empty array
    }
  }

  render () {
    const restaurant = {
      '_id': '5aba77a8952c454828cd34d5',
      'name': 'Post Pub',
      'address': '1422 L St NW, Washington, DC 20005',
      'website': 'https://postpubdc.com/',
      'drinkPrice': '7',
      'ambiance': 'A dive bar with subpar service. Expect to wait a long time between server visits.',
      'description': 'This is by far the closest bar to GA. Its a dive bar with poor service and random happy hour deals every night. Be careful on Friday night there are NO BEERS SPECIALS. Feel like drinks here should be less expensive than they are...',
      'crowds': 'Fills up for lunch and for happy hour. Can be difficult to find a seat',
      'distance': '1 block from GA',
      'deals': 'Friday after work is Absolute drinks for a reduced rate'
    }

    return (
      <div className='App'>
        <div className='Main'>
          <div className='search'>
            <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleSearch} />
          </div>
          <div>
            <Restaurant restaurant={restaurant} />
          </div>
          {/* <div className='restaurant'>
            {this.state.restaurant.map((restaurant) => {
              return <Restaurant key={restaurant.name} />
            })}
          </div> */}
        </div>
      </div>
    )
  }
}

export default App
