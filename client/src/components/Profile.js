import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import styled  from "styled-components";
import {Link} from 'react-router-dom';


const StyledH3 = styled.h3`
    font-size: 14px;
    padding: 15px 30px;
    font-weight: 700;

        @media(min-width: 400px){
        font-size: 18px;
        text-align: center;
    }
        @media(min-width: 900px){
        font-size: 23px;
        text-align: center;
    }
    
`
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
  width: 100%;
`

const StyledTd = styled.td`
  width: 140px;
  font-size: 13px;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #bdc3c7;

  @media(min-width: 400px){
        width: 180px;
        font-size: 16px;
    }
        @media(min-width: 900px){
        font-size: 20px;
    }
    @media(min-width: 900px){
        width: 140px;
        font-size: 20px;
    }
`
const StyleTable = styled.table`
  width: 100%;
  @media(min-width: 1100px){
        width: 50%;
        font-size: 20px;
        margin: 20px auto;
    }
`

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      email: '',
      errors: {},
      twittersy: '',
      numberTwitters: 0,
      notte: '',
      NumberNotes: 0,
      date: 0,
      premium: Boolean,
      admin: Boolean,
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken) {
      return window.location = '/login';
    } 
    else {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        username: decoded.username,
        last_name: decoded.last_name,
        email: decoded.email,
        date: decoded.date,
        premium: decoded.premium,
        admin: decoded.admin,
      })
      
    }

    axios.get('http://localhost:5000/twitter/')
    .then(response => {
        this.setState({
            twittersy: response.data
        })
    })
    
    .catch(error => console.log(error))

    axios.get('http://localhost:5000/exercises/')
    .then(response => {
        this.setState({
          notte: response.data
        })
        
    })
    .catch(error => console.log(error))

    
  }

  numberTwittters = () => {
   this.state.numberTwitters=0;
   this.state.NumberNotes=0;
    this.state.twittersy.length>0&&this.state.twittersy.map(poj => {
      if(this.state.username===poj.username){
        this.state.numberTwitters++;
      }
    })
      this.state.notte.length>0&&this.state.notte.map(poj => {
     
        if(this.state.username===poj.username){
          this.state.NumberNotes++;
        }
      })
}  



  render() {
    {this.numberTwittters()}
    return (
      <StyledContainer>
        <div>
          <div className="col-sm-8 mx-auto">
            <StyledH3 className="text-center">Profil użytkownika</StyledH3>
          </div>
          <StyleTable>
            <tbody>
              <tr>
                <StyledTd><b>Nazwa: </b></StyledTd>
                <StyledTd>{this.state.username}</StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Imię: </b></StyledTd>
                <StyledTd>{this.state.last_name}</StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Email:</b></StyledTd>
                <StyledTd>{this.state.email}</StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Ilość notatek:</b></StyledTd>
                <StyledTd>{this.state.NumberNotes}</StyledTd>
              </tr>

              <tr>
                <StyledTd><b>Ilość twitterow:</b></StyledTd>
                <StyledTd> {this.state.numberTwitters} </StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Data rejestracji:</b></StyledTd>
                <StyledTd>{this.state.date&&this.state.date.substring(0,10)}</StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Konto premium</b></StyledTd>
                <StyledTd>{this.state.premium?"Premium":"Konto darmowe"}</StyledTd>
              </tr>
              <tr>
                <StyledTd><b>Admin:</b></StyledTd>
                <StyledTd>{this.state.admin?"Administrator":"Nie"}</StyledTd>
              </tr>
            </tbody>
          </StyleTable>
          {this.state.admin&&this.state.premium?<div style={{margin: '20px auto' , textAlign:'center'}}><Link  to="/profile/admin">Panel Administratora</Link></div>:null}
        </div>
      </StyledContainer>
    )
  }
}

export default Profile