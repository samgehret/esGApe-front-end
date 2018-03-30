import React, { Component } from 'react'
import axios from 'axios'
import './forms.css'

class NewLunchSpotForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      newLunchSpotName: '',
      newLunchSpotAddress: '',
      newLunchSpotWebsite: '',
      newLunchSpotDescription: '',
      newLunchSpotDistance: '',
      newLunchSpotFoodType: ''

    }
    this.handleNewLunchSpotInput = this.handleNewLunchSpotInput.bind(this)
    this.handleNewLunchSpotSubmit = this.handleNewLunchSpotSubmit.bind(this)
  }

  handleNewLunchSpotInput (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleNewLunchSpotSubmit (e) {
    e.preventDefault()
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.post(`http://${endpoint}/lunchspots`, {
      name: this.state.newLunchSpotName,
      address: this.state.newLunchSpotAddress,
      website: this.state.newLunchSpotWebsite,
      description: this.state.newLunchSpotDescription,
      distance: this.state.newLunchSpotDistance,
      foodType: this.state.newLunchSpotFoodType,
      author: this.state.email
    })
  }
  componentWillMount () {
    this.setState({
      email: localStorage.email
    })
  }
  render () {
    return (
      <div className='form'>
        <h1>Submit New Lunch Spot</h1>
        <form action='/lunchspots' onSubmit={this.handleNewLunchSpotSubmit}>
          <label>Name</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotName' />
          <label>Address</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotAddress' />
          <label>Website</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotWebsite' />
          <label>Description</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotDescription' />
          <label>Distance</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotDistance' />
          <label>Food Type</label>
          <input onChange={this.handleNewLunchSpotInput} type='text' name='newLunchSpotFoodType' />
          <input onChange={this.handleNewLunchSpotInput} value='submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default NewLunchSpotForm
