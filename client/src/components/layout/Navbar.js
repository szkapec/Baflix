import React, { Component } from 'react'
import Logged from './Logged';
// import LoggedOut from './LoggedOut';

class Navbar extends Component {
    render() {
        return (
            <div>
                {/* Jesli zalogowany to logged jesli nie to loggedout */}
               
                <Logged/>
            </div>
        )
    }
}
export default Navbar;
