import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Admin from './Admin';

export default class Twitter extends Component {

    constructor(props){

        super(props)
        this.state = {
          username: '',
          premium: false,
          admin: false,
        }
    }
    componentDidMount() {
        if(!localStorage.usertoken) {
          return window.location = '/login';
        } 
        else {
          const token = localStorage.usertoken
          const decoded = jwt_decode(token)
          console.log(decoded)
          this.setState({
            username: decoded.username,
            premium: decoded.premium,
            admin: decoded.admin,
          })
        }
      }

      forwarding = (e) => {
        if(this.state.admin===undefined){
          localStorage.removeItem('usertoken')  //wylogowanie
          return this.props.history.push(`/login`)
        }
      }

    render() {
        
        return this.state.admin&&this.state.premium?<Admin/>: <h2 style={{textAlign:'center', marginTop: '20px'}}><div>{this.forwarding()}</div></h2>
          }
        }