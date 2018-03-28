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
                        <Link className='nav-link' to='/'><h3>esGApe</h3></Link>
                        <Link className='nav-link' to='/signup'>Signup</Link>
                        <Link className='nav-link' to='/login'>Login</Link>
                        <Link className='nav-link' to='/happyhours'>Happy Hours</Link>
                        <Link className='nav-link' to='/lunchspots'>Lunch Spots</Link>
                    </nav>  
                </div>
                )
        } else {
            return (
                <div>
                    <nav>
                        <Link className='nav-link' to='/'><h3>esGApe</h3></Link>
                        <Link className='nav-link' to='/happyhours'>Happy Hours</Link>
                        <Link className='nav-link' to='/lunchspots'>Lunch Spots</Link>
                        <Link className='nav-link' to='/newlunchspot'>Add New Lunch Spot</Link>
                        <Link className='nav-link' to='/newhappyhour'>Add New Happy Hour</Link>
                        <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                    </nav>  
                </div>
            )
        }
    }
}

export default Navbar;