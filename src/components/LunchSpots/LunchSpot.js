import React, { Component } from 'react'
import Comment from '../forms/Comment'
import axios from 'axios'

class LunchSpot extends Component {
  constructor () {
    super()
    this.state = {
      info: [],
      comments: [],
      comment: ''
    }
    this.handleComment = this.handleComment.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.getInfo = this.getInfo.bind(this)
  }
  componentDidMount () {
    this.getInfo()
  }

  getInfo () {
    axios.get(`http://localhost:3002/lunchspots/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({info: res.data, comments: res.data.comments})
      // console.log('state')
      // console.log(this.state.info._id)
    })
  }
  handleComment (e) {
    this.setState({comment: e.target.value})
    console.log(this.state.comment)
  }
  submitComment (e) {
    e.preventDefault()
    axios.put(`http://localhost:3002/lunchspots/comments/${this.state.info._id}`, {comment: this.state.comment})
    let newComments = this.state.comments.slice()
    console.log('newcomments')
    console.log(newComments)
    newComments.push({'commentText': this.state.comment})
    this.setState({comments: newComments})
  }
  render (props) {
    var comments = this.state.comments.map((comment, i) => {
      return (
        <div >
          {comment.commentText}
        </div>
      )
    })
    return (
      <div>
        <h1>Individual LunchSpot</h1>
        <p>{this.state.info.name}</p>

        <p>{this.state.info.address}</p>

        <p>{this.state.info.website}</p>
        <p>{this.state.info.lunchPrice}</p>
        <p>{this.state.info.description}</p>
        <p>{this.state.info.distance}</p>
        <p>{this.state.info.recommendedItems}</p>
        <p>{this.state.info.foodType}</p>
        <p>{this.state.info.crowds}</p>
        <p>{this.state.info.ambiance}</p>
        <h3>Comments</h3>
        {comments}
        <Comment handleComment={this.handleComment} submitComment={this.submitComment} />

      </div>
    )
  }
}

export default LunchSpot
