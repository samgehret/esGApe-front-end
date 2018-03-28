import React, { Component } from 'react'

class LoginForm extends Component {
  render () {
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

export default LoginForm
