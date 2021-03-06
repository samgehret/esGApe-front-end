import React, { Component } from 'react'
import Comment from '../forms/Comment'
import axios from 'axios'

class LunchSpot extends Component {
  constructor () {
    super()
    this.state = {
      info: {},
      comments: [],
      comment: '',
      email: '',
      editLunchSpotName: '',
      editLunchSpotAddress: '',
      editLunchSpotWebsite: '',
      editLunchSpotDescription: '',
      editLunchSpotDistance: '',
      editLunchSpotFoodType: ''
    }
    this.handleComment = this.handleComment.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.getInfo = this.getInfo.bind(this)
    this.handleLunchSpotDelete = this.handleLunchSpotDelete.bind(this)
    this.handleLunchSpotInput = this.handleLunchSpotInput.bind(this)
    this.handleLunchSpotEdit = this.handleLunchSpotEdit.bind(this)
  }
  componentDidMount () {
    this.getInfo()
    this.setState({
      email: localStorage.email
    })
    console.log(this.state.email)
  }

  getInfo () {
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.get(`http://${endpoint}/lunchspots/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({info: res.data,
        comments: res.data.comments,
        editLunchSpotName: res.data.name,
        editLunchSpotAddress: res.data.address,
        editLunchSpotWebsite: res.data.website,
        editLunchSpotDescription: res.data.description,
        editLunchSpotDistance: res.data.distance,
        editLunchSpotFoodType: res.data.foodType
      }, () => { console.log(this.state) })
    })
  }
  handleComment (e) {
    this.setState({comment: e.target.value})
    console.log(this.state.comment)
  }
  submitComment (e) {
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    e.preventDefault()
    axios.put(`http://${endpoint}/lunchspots/comments/${this.state.info._id}`, {comment: this.state.comment})
    let newComments = this.state.comments.slice()
    console.log('newcomments')
    console.log(newComments)
    newComments.push({'commentText': this.state.comment})
    this.setState({comments: newComments})
  }
  handleLunchSpotDelete () {
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.delete(`http://${endpoint}/lunchspots/${this.state.info._id}`)
    .then(this.props.history.push('/home'))
  }
  handleLunchSpotInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.info._id)
  }

  handleLunchSpotEdit (e) {
    e.preventDefault()
    var endpoint = ''
    if (window.location.hostname === 'localhost') {
      endpoint = 'localhost:3002'
    } else {
      endpoint = 'esgape.herokuapp.com'
    }
    axios.put(`http://${endpoint}/lunchspots/${this.state.info._id}`, {
      name: this.state.editLunchSpotName,
      address: this.state.editLunchSpotAddress,
      website: this.state.editLunchSpotWebsite,
      description: this.state.editLunchSpotDescription,
      distance: this.state.editLunchSpotDistance,
      foodType: this.state.editLunchSpotFoodType
    }).then((this.props.history.push('/home')))
  }

  render (props) {
    var comments = this.state.comments.map((comment, i) => {
      return (
        <div >
          {comment.commentText}
        </div>
      )
    })
    if (this.state.email !== this.state.info.author) {
      return (
        <div>
          <h1>Individual LunchSpot</h1>
          <h2>{this.state.editLunchSpotName}</h2>
          <p>{this.state.editLunchSpotAddress}</p>
          <p>{this.state.editLunchSpotWebsite}</p>
          <p>{this.state.editLunchSpotDescription}</p>
          <p>{this.state.editLunchSpotDistance}</p>
          <p>{this.state.editLunchSpotFoodType}</p>

          <h3>Comments</h3>
          {comments}
          <Comment handleComment={this.handleComment} submitComment={this.submitComment} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Individual LunchSpot</h1>
          <h2>{this.state.editLunchSpotName}</h2>
          <p>{this.state.editLunchSpotAddress}</p>
          <p>{this.state.editLunchSpotWebsite}</p>
          <p>{this.state.editLunchSpotDescription}</p>
          <p>{this.state.editLunchSpotDistance}</p>
          <p>{this.state.editLunchSpotFoodType}</p>

          <input onClick={this.handleLunchSpotDelete} type='submit' value='Delete' />

          <h3>Comments</h3>
          {comments}
          <Comment handleComment={this.handleComment} submitComment={this.submitComment} />

          <h2>Edit LunchSpot</h2>
          <form onSubmit={this.handleLunchSpotEdit}>
            <label>Name</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotName' />
            <label>Address</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotAddress' />
            <label>Website</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotWebsite' />
            <label>Description</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotDescription' />
            <label>Distance</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotDistance' />
            <label>Food Type</label>
            <input onChange={this.handleLunchSpotInput} type='text' name='editLunchSpotFoodType' />
            <input value='submit' type='submit' />
          </form>
        </div>
      )
    }
  }
}

export default LunchSpot
