import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import jwt_decode from 'jwt-decode';

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
      return null;
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
            <div>
              <h4 style={{margin: '10px 0'}}>Dodaj nowa notatkę</h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Użytkownik: </label>
                  <input ref="userInput"
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
                  <textarea  type="text"
                      placeholder="Dodaj notatkę"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                
                
        
                <div className="form-group">
                  <input type="submit" value="Utwórz" className="btn btn-primary" />
                </div>
              </form>
            </div>
            )
          }
        }