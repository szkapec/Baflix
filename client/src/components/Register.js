import React, { Component } from 'react'
import { register } from './UserFunctions'
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

class Register extends Component {

    state = {
      username: '',
      last_name: '',
      email: '',
      password: '',
      errors: {},
      flaga: true,
      comLog: '',
      comName: '',
      comMail: '',
      comPass: '',
    }


  flags = true;
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }
  onSubmit = (e) => {
    e.preventDefault()
   this.flags = true;

    const newUser = {
      username: this.state.username,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    }

    if(this.state.username.length < 4){
       this.flags = false;
      this.setState({
        comLog: "Login jest za krótki!",
        
      })
    }
    else if(this.state.username.match(/^[0-9a-zA-Z]+$/)===null){
      this.flags = false;
      this.setState({
        comLog: "Wstrzykiwanie SQL!",
      })
    }
    else {
      this.setState({
        comLog: '',

      })
    }

    if(this.state.last_name.length<=3) {
      this.flags = false;
      this.setState({comName:'Podaj prawidłowe imię!'})
    } else this.setState(
      {comName: "",

      })
    if(this.state.email.length>5) {
      const regex = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,3}');

      if(regex.test(this.state.email)){
        this.setState({comMail:'', flaga:true})
      } else {
        this.flags = false;
        this.setState({comMail: "Niepoprawny email!"})
      }

    } else {
      this.flags = false;
      this.setState({comMail: "Niepoprawny email!"})
    } 
    

    if(this.state.password.length>=4) {
      if(this.state.password.match(/^[0-9a-zA-Z]+$/)===null) {
        this.flags = false;
        this.setState({comPass: 'Niedozwolone znaki!' })
      }
      else {
        this.setState(
          {comPass: '', 
          // flaga: true
        })
      }
    
    }
    else {
      this.flags = false;
      this.setState({comPass: 'Hasło jest za słabe!'})
    }

    if(this.flags===true) {
      register(newUser).then(res => {
        this.props.history.push(`/login`)
      })
    }
    else {
      this.setState({
        comment: 'Niepoprawne logowanie!!',
        flaga: false,
      })
    }

  }





  render() {
    return (
      <StyledContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form  onSubmit={this.onSubmit}>
              <StyledH1>Zarejestruj się</StyledH1>
              <div className="form-group">
                <StyledLogin htmlFor="name">Login</StyledLogin>
                <input style={this.state.comLog?{border:'1px solid red'}:null}
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Wprowadz swoj login"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div style={{color:'red'}}>{this.state.comLog?this.state.comLog:null}</div>
              <div className="form-group">
                <StyledLogin htmlFor="name">Imię</StyledLogin>
                <input style={this.state.comName?{border:'1px solid red'}:null}
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Wprowadz swoje imię"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div style={{color:'red'}}>{this.state.comName?this.state.comName:null}</div>
              <div className="form-group">
                <StyledLogin htmlFor="email">Adres email </StyledLogin>
                <input style={this.state.comMail?{border:'1px solid red'}:null}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Podaj email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div style={{color:'red'}}>{this.state.comMail?this.state.comMail:null}</div>
              <div className="form-group">
                <StyledLogin htmlFor="password">Hasło</StyledLogin>
                <input style={this.state.comPass?{border:'1px solid red'}:null}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Podaj hasło"
                  minLength='4'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div style={{color:'red'}}>{this.state.comPass?this.state.comPass:null}</div>
              <StyledButton
                type="submit"
                className="btn"
              >
                Zarejestruj!
              </StyledButton>
              
            </form>
          </div>
        </div>
      </div>
      </StyledContainer>
    )
  }
}

export default Register