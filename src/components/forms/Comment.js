import React, { Component } from 'react'
import './comments.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Comment extends Component {
  render () {
    return (
      <div>
        <h4>Add Comment</h4>

        <form>
          <label className='label'>Comment</label>
          <textarea className='comments' rows='4' cols='50' name='comment' onChange={this.props.handleComment} />
          <input value='submit' type='submit' onClick={this.props.submitComment} />
        </form>
      </div>
    )
  }
}

export default Comment
