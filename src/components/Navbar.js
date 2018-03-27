import React, { Component } from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom'
class Navbar extends Component {
    render() {
        // this code could be a LOT cleaner
        if (this.props.isLoggedIn === false) {
            return (
                <div>
                    <nav>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                    </nav>  
                </div>
                )
        } else {
            return (
                <div>
                    <nav>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                        <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                    </nav>  
                </div>
            )
        }
    }
}

export default Navbar;