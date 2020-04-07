import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{minHeight:'100vh', backgroundColor: ' #ecf0f1',}}>
                 <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>page not found</h2>
                        <h3>the requested url <span className="text-danger">{this.props.location.pathname}</span>{" "}</h3> was not found
                        <div>   <button style={{border: 'none', borderRadius: '20px', color: 'black', textDecoration:'none',padding: '5px 20px', marginTop: '20px'}}><Link to="/profile">Profile</Link></button></div>
                    </div>
                </div>
             
            </div>

            </div>
        )
    }
}


