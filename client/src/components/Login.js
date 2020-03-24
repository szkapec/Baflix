import React, { Component } from 'react'
import { login } from './UserFunctions'
import styled from 'styled-components';


const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`

const StyledButton = styled.button`
  color: black;
  border: 1px solid #7f8c8d;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 20px 0;

  @media(min-width:600px) {
    padding:10px 35px;
    font-size: 20px;
  }
`
const StyledH1 = styled.h1`
  font-size: 20px;
  padding: 0 0 20px 0;

  @media(min-width: 600px) {
    font-size: 22px;
  }
  @media(min-width: 600px) {
    font-size: 24px;
  }
`

const StyledLogin = styled.label`
  font-size:16px;
  @media(min-width: 600px) {
    font-size: 18px;
  }
  @media(min-width: 600px) {
    font-size: 20px;
  }
`


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
      comPassword: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  flag = true;

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    this.flag=true;

    if(this.state.password.length <= 4 || this.state.email.length<=4){
      this.flag = false;
     this.setState({
      comPassword: "Nieprawidłowe hasło lub login!",
     })
   }
   else if(this.state.password.match(/^[0-9a-zA-Z]+$/)===null){
     this.flag = false;
     this.setState({
      comPassword: "Nieprawidłowe hasło lub login!",
     })
   }
   else {
     this.setState({comPassword: ''})
   }

   if(this.flag){
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      login(user).then(res => {
        if (res) {
          if(localStorage.usertoken.length>200){
            this.props.history.push(`/profile`)
          }
          else {
            localStorage.removeItem('usertoken')
            this.setState({
              comPassword: "Nieprawidłowe hasło lub login!!!!",
              email: '',
              password: '',
              
            })
          }
          
        }
        
        if(!res){
          return console.log('blad')
        }
      })
      .catch(err => {
        console.log("Niepoprawne haslo i login")
        // this.props.history.push(`/login`)
      })
    }
   }
  render() {

    return (
      <StyledContainer>
           <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <StyledH1>Prosze się zalogować</StyledH1>
              <div className="form-group">
              <div style={{color:'red'}}>{this.state.comPassword?this.state.comPassword:null}</div>
                <StyledLogin htmlFor="email">Adres email</StyledLogin>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Adres email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <StyledLogin htmlFor="password">Hasło</StyledLogin>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Hasło"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <StyledButton
                type="submit"
                className="btn"
              >
                Zaloguj
              </StyledButton>
            </form>
          </div>
        </div>
      </div>

      </StyledContainer>
     
    )
  }
}

export default Login