import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';


const StyledH3 = styled.h3`
    font-size: 20px;
    padding: 30px 0px 10px;
    @media(min-width:500px){
        font-size: 22px;
    }
`
const StyledLabel = styled.label `
    font-size: 17px;
    margin: 20px 0px;
    @media(min-width:800px){
        font-size: 19px;
    }
`
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`
const StyledInput = styled.input`
  padding: 10px 30px;
  font-size: 16px;
  margin: 20px 0px;
  font-weight: 700;
  background-color: #ecf0f1;
    background-color: white; 
    color: black; 
    border: 2px solid #7f8c8d;
    border-radius: 20px;
  @media(min-width:800px){
        font-size:18px;
        padding: 10px 35px;
    }

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: grey;
  }
  `



export default class CreateExercise extends Component {

    constructor(props){

        super(props)
        this.state = {
            username: "",
            description: '',
            duration: 0,
            date: new Date(),
            users: []
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

      })
      
    }
    
   
  }


    onChangeDescription=(e)=> {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration=(e)=> {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate=(date) =>{
        this.setState({
            date,
    })
  }

    onSubmit=(e)=>{
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post('/exercises/add', exercise)
        .then(res => console.log(res.data));
        window.location = '/viewtask'; //na strone glowna
    }


    render() {
        return (
          <StyledContainer>
            <div className="container">
              <StyledH3 >Dodaj nowa prywatną notatkę</StyledH3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <StyledLabel>Użytkownik: </StyledLabel>
                  <input style={{maxWidth: '400px'}} ref="userInput"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeDuration}
                      disabled
                      >
                      
                  </input>
                </div>
                <div className="form-group"> 
                  <label>Dodaj notatkę: </label>
                  <textarea style={{minHeight:'150px', maxWidth: '400px'}} type="text"
                      placeholder="Dodaj notatkę"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                
                
        
                <div className="form-group">
                  <StyledInput type="submit" value="Utwórz" className="btn" />
                </div>
              </form>
            </div>
            </StyledContainer>
            )
          }
        }