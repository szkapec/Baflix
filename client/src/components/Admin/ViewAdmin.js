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
          return console.log("MUSIC")//this.props.history.push(`/login`)
        }
        setTimeout(() => {
          if(!this.state.admin){
            window.location = '/login'
            return localStorage.removeItem('usertoken');
          }
          else if(!this.state.premium){
            window.location = '/login'
            return localStorage.removeItem('usertoken');
          }
         
      }, 100);
        return <div style={{textAlign: 'center', marginTop: '20px'}}> 404 Brak dostępu</div>
        
      }
        
        
        //window.location = '/login';//localStorage.removeItem('usertoken');
      
    render() {
      
      console.log(this.state)
    return this.state.admin&&this.state.premium?<Admin/>: <div>{this.forwarding()}</div> //<h2 style={{textAlign:'center', marginTop: '20px'}}><div>{this.forwarding()}</div></h2>
          }
        }