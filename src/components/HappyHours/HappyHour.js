import React, { Component } from 'react'
import Comment from '../forms/Comment'
import axios from 'axios'

class HappyHour extends Component {
  constructor () {
    super()
    this.state = {
      info: {},
      comments: [],
      comment:'',
      email: '',
      editHappyHourName: '',
      editHappyHourAddress: '',
      editHappyHourWebsite:'',
      editHappyHourDescription:'',
      editHappyHourDistance:'',
      editHappyHourFoodType:''
    }
    this.handleComment = this.handleComment.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.getInfo = this.getInfo.bind(this)
    this.handleHappyHourDelete = this.handleHappyHourDelete.bind(this)
    this.handleHappyHourInput = this.handleHappyHourInput.bind(this)
    this.handleHappyHourEdit = this.handleHappyHourEdit.bind(this)
  }

  componentDidMount () {
    this.getInfo()
    this.setState({
      email: localStorage.email
  })
  console.log(this.state.email)
  }

  getInfo () {
    axios.get(`http://localhost:3002/happyhours/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({info: res.data, comments: res.data.comments,
        editHappyHourName: res.data.name,
        editHappyHourAddress: res.data.address,
        editHappyHourWebsite: res.data.website,
        editHappyHourDescription: res.data.description,
        editHappyHourDistance: res.data.distance,
        editHappyHourFoodType: res.data.foodType,
        },  () => {  console.log(this.state) })
      })
    }
    handleComment (e) {
      this.setState({comment: e.target.value})
      console.log(this.state.comment)
    }
    submitComment (e) {
      e.preventDefault()
      axios.put(`http://localhost:3002/happyhours/comments/${this.state.info._id}`, {comment: this.state.comment})
      let newComments = this.state.comments.slice()
      console.log('newcomments')
      console.log(newComments)
      newComments.push({'commentText': this.state.comment})
      this.setState({comments: newComments})
    }
    handleHappyHourDelete() {
      axios.delete(`http://localhost:3002/happyhours/${this.state.info._id}`)
      .then(window.location.replace('http://localhost:3000/happyhours/'))
    }
    handleHappyHourInput(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
      console.log(this.state.info._id)
    }
  
    handleHappyHourEdit() {
      axios.put(`http://localhost:3002/happyhours/${this.state.info._id}`, {
        name: this.state.editHappyHourName,
        address: this.state.editHappyHourAddress,
        website: this.state.editHappyHourWebsite,
        description: this.state.editHappyHourDescription,
        distance: this.state.editHappyHourDistance,
        foodType: this.state.editHappyHourFoodType
      })
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
      <h1>Individual HappyHour</h1>
      <h2>{this.state.info.name}</h2>
      <p>Address: {this.state.info.address}</p>
      <p>Website: {this.state.info.website}</p>
      <p>Description: {this.state.info.description}</p>
      <p>Distance: {this.state.info.distance}</p>
      <p>Cuisine: {this.state.info.foodType}</p>
      
      <h3>Comments</h3>
      {comments}
      <Comment handleComment={this.handleComment} submitComment={this.submitComment} />
    </div>
  )
} else {
  return (
    <div>
      <h1>Individual HappyHour</h1>
      <h2>{this.state.info.name}</h2>
      <p>Address: {this.state.info.address}</p>
      <p>Website: {this.state.info.website}</p>
      <p>Description: {this.state.info.description}</p>
      <p>Distance: {this.state.info.distance}</p>
      <p>Cuisine: {this.state.info.foodType}</p>
      
      <input onClick={this.handleHappyHourDelete} type="submit" value="Delete" />
      
      <h3>Comments</h3>
      {comments}
      <Comment handleComment={this.handleComment} submitComment={this.submitComment} />

      <h2>Edit HappyHour</h2>
      <form onSubmit={this.handleHappyHourEdit}>
        <label>Name</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourName" />
        <label>Address</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourAddress" />
        <label>Website</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourWebsite" />
        <label>Description</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourDescription" />
        <label>Distance</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourDistance" />
        <label>Food Type</label>
        <input onChange={this.handleHappyHourInput} type="text" name="editHappyHourFoodType" />
        <input value="submit" type="submit" />
    </form>
    </div>
  )
}
      










    }










  }

export default HappyHour
