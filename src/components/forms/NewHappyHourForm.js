import React, { Component } from 'react'
import axios from 'axios'
import './forms.css'

class NewHappyHourForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      newHappyHourName: '',
      newHappyHourAddress: '',
      newHappyHourWebsite: '',
      newHappyHourDescription: '',
      newHappyHourDistance: '',
      newHappyHourFoodType: ''

    }
    this.handleNewHappyHourInput = this.handleNewHappyHourInput.bind(this)
    this.handleNewHappyHourSubmit = this.handleNewHappyHourSubmit.bind(this)
  }
  handleNewHappyHourInput (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleNewHappyHourSubmit (e) {
    e.preventDefault()
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.post(`http://${endpoint}/happyhours`, {
      name: this.state.newHappyHourName,
      address: this.state.newHappyHourAddress,
      website: this.state.newHappyHourWebsite,
      description: this.state.newHappyHourDescription,
      distance: this.state.newHappyHourDistance,
      foodType: this.state.newHappyHourFoodType,
      author: this.state.email
    }).then(console.log('working'))
  }
  componentWillMount () {
    this.setState({
      email: localStorage.email
    })
  }
  render () {
    return (
      <div className='form'>
        <h1>Submit New Happy Hour</h1>
        <form action='/happyhours' onSubmit={this.handleNewHappyHourSubmit}>
          <label>Name</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourName' />
          <label>Address</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourAddress' />
          <label>Website</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourWebsite' />
          <label>Description</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourDescription' />
          <label>Distance</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourDistance' />
          <label>Food Type</label>
          <input onChange={this.handleNewHappyHourInput} type='text' name='newHappyHourFoodType' />
          <input onChange={this.handleNewHappyHourInput} value='submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default NewHappyHourForm
