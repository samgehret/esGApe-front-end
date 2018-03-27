import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
class Navbar extends Component {
    render() {
        // this code could be a LOT cleaner
        // This if statement makes it so that it only renders certain nav
        // options when the user is logged in
        if (this.props.isLoggedIn === false) {
            return (
                <div>
                    <nav>
                        <Link className="nav-link" to='/signup'>Signup</Link>
                        <Link className="nav-link" to='/login'>Login</Link>
                    </nav>  
                </div>
                )
        } else {
            return (
                <div>
                    <nav>
                        <Link className="nav-link" to='/signup'>Signup</Link>
                        <Link className="nav-link" to='/login'>Login</Link>
                        <Link className="nav-link" to='/newrestaurant'>Add New Restaurant</Link>
                        <Link className="nav-link" to='/newbar'>Add New Bar</Link>
                        <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                    </nav>  
                </div>
            )
        }
    }
}

export default Navbar;