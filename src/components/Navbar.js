import React, { Component } from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;