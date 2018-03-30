import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render() {
        // this code could be a LOT cleaner
        // This if statement makes it so that it only renders certain nav
        // options when the user is logged in
        if (this.props.isLoggedIn === false) {
            return (
                <div>
                    <nav className='nav'>
                        <Link className='nav-link' to='/'>esGApe</Link>
                        <Link className='nav-link' to='/signup'>Signup</Link>
                        <Link className='nav-link' to='/login'>Login</Link>
                        <img src="https://image.flaticon.com/icons/svg/168/168570.svg" />
                        <Link className='nav-link wine' to='/happyhours'>Happy Hours</Link>
                        <img src="https://image.flaticon.com/icons/svg/168/168570.svg" />
                        <img src="https://image.flaticon.com/icons/svg/235/235830.svg" />
                        <Link className='nav-link plate' to='/lunchspots'>Lunch Spots</Link>
                        <img src="https://image.flaticon.com/icons/svg/235/235830.svg" />      
                    </nav>  
                </div>
                )
        } else {
            return (
                <div>
                    <nav className='nav'>
                        <Link className='nav-link' to='/'>esGApe</Link>
                        <img src="https://image.flaticon.com/icons/svg/168/168570.svg" />
                        <Link className='nav-link wine' to='/happyhours'>Happy Hours</Link>
                        <img src="https://image.flaticon.com/icons/svg/168/168570.svg" />
                        <img src="https://image.flaticon.com/icons/svg/235/235830.svg" />
                        <Link className='nav-link plate' to='/lunchspots'>Lunch Spots</Link>
                        <img src="https://image.flaticon.com/icons/svg/235/235830.svg" />
                        <Link className='nav-link' to='/newhappyhour'>Add New Happy Hour</Link>
                        <Link className='nav-link' to='/newlunchspot'>Add New Lunch Spot</Link>   
                        <input value="Log Out" type="submit" onClick={this.props.handleLogOut} />
                    </nav>  
                </div>
            )
        }
    }
}

export default Navbar;