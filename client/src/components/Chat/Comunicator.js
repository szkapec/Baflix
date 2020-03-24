import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ComunicatorMessage from './ComunicatorMessage';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    max-width: 80%;
    margin: auto;
    
`
const StyledLabel = styled.div`
    text-align: center;
    color: white;
    margin: 15px auto;
`
const StyledInput = styled.input`
    margin: 20px 0 20px 40px;
    padding: 10px 30px;
    font-size: 16px;
    font-weight: 700;
    background-color: ${({inputs}) => (inputs?'#6B4226':'#00CC66')} ;
    color: ${({inputs}) => inputs?'black':'white'};
    border: none;
    border-radius: 50px;
    @media(min-width: 700px){
        margin: 20px 0 20px 69px;
    }
    @media(min-width: 1000px){
        margin: 20px 0 20px 93px;
    }
    @media(min-width: 1200px){
        margin: 20px 0 20px 111px;
    }
`
   const StyledAll = styled.div`
        width: 100%;
        min-height: 100vh;
         margin: 0;
        background-color: #2c3e50;
   `


export default class Comunicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            username: "",
            description: '',
            input: true,
        };
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


        axios.get('/message/')
            .then(response => {
                this.setState({
                    exercises: response.data
                })
            })
            .catch(error => console.log(error))
    }


onChangeDescription=(e)=> {
    this.setState({
        description: e.target.value
    })
}


onSubmit=(e)=>{
    e.preventDefault();
    const message = {
        username: this.state.username,
        description: this.state.description,
        
    }

    axios.post('/message/add', message)
    .then(res => console.log(res.data))
    // window.location = '/'; //na strone glowna
}

    exercisesList = () => {
        console.log(this.state.exercises)
        console.log(this.state.exercises.length>0)
        var description = []
        var username = [];
        this.state.exercises.length>0&&this.state.exercises.map((poj,number) => {
           description.push(poj.description)
           username.push(poj.username)
        })

        return <ComunicatorMessage username={username.reverse()} description={description.reverse()}/>
    }

    onChangeInput = () => {
        this.setState({
            input: !this.state.input,
        })
    }
    //   return <Message exercise={poj} key={poj._id}/>
    render() {
        return (
            <StyledAll>
            <div>
                <h3 style={{fontSize: '20px',color:'white', padding: "12px"}}>Czat:</h3>
                <div style={{marginTop:'30px'}}>{this.exercisesList()}</div>
                        
        
            </div>

            <div>
            <br></br>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <StyledLabel>Napisz wiadomość: </StyledLabel>
                  <StyledTextArea   type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      placeholder="Text"
                     
                      />
                </div>
                <div className="form-group">
                  <StyledInput inputs={this.state.input} onClick={this.onChangeInput} type="submit" value="Wyślij" className="btn" />
                </div>
              </form>
            </div>
            </StyledAll>
        )
    }
}