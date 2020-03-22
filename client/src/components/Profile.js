import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken) {
      return null;
    } 
    else {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        username: decoded.username,
        last_name: decoded.last_name,
        email: decoded.email
      })
      
    }

  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h4 className="text-center">Profil użytkownika</h4>
          </div>
          <table style={{fontSize:'12px'}} className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Nazwa: </td>
                <td>{this.state.username}</td>
              </tr>
              <tr>
                <td>Imię: </td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile