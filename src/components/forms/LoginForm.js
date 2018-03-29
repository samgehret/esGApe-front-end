import React, { Component } from 'react'
import './forms.css'

class LoginForm extends Component {
  render () {
    if (this.props.error) {
      return (
        <div>
          <h1>Login</h1>
          <div className='error'>
            {this.props.error}
          </div>

          <form>
            <label>Email</label>
            <input type='text' name='email' maxLength='25' onChange={this.props.handleInput} />
            <label>Password</label>
            <input type='password' name='password' maxLength='25' onChange={this.props.handleInput} />
            <input value='submit' type='submit' onClick={this.props.handleLogIn} />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input type='text' name='email' maxLength='25' onChange={this.props.handleInput} />
            <label>Password</label>
            <input type='password' name='password' maxLength='25' onChange={this.props.handleInput} />
            <input value='submit' type='submit' onClick={this.props.handleLogIn} />
          </form>
        </div>
      )
    }
  }
}

export default LoginForm
