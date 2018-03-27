import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Restaurant from './components/Restaurant'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurant: []  // restaurant start from [] empty array
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='Main'>
          <div className='search'>
            <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleSearch} />
          </div>
          <div className='restaurant'>
            {this.state.restaurant.map((restaurant) => {
              return <Restaurant key={restaurant.name} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App
