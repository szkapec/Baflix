import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Exercise from './Exercise';
import styled from 'styled-components';


const StyledButton = styled.button`
    display: inline-block;
    margin: 20px auto;
    background-color: white; 
    color: black; 
    border: 2px solid #bdc3c7;
    border-radius: 20px;

`
const StyledButtonContener = styled.div`
    width: 100%;
    text-align: center;
`
const StyledH3 = styled.h3`
    font-size: 14px;
    padding: 15px 30px;

        @media(min-width: 400px){
        font-size: 18px;
        text-align: center;
    }
        @media(min-width: 900px){
        font-size: 22px;
        text-align: center;
    }
`
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`


export default class ViewTask extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {
            exercises: [],
            username: '',
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

            
            
        

        axios.get('/exercises/')
            .then(response => {
                this.setState({
                    exercises: response.data
                })
                
            })
            .catch(error => console.log(error))
    }

    deleteExercise(id) { 
        axios.delete('/exercises/'+id)
            .then(res=> console.log(res.data));
            this.setState({
                exercises: this.state.exercises.filter(el=>el._id !== id) //zwroc elementy el.id nierowne id
            })
    }

    exercisesList = () => {
       
        return this.state.exercises.map(poj => {
          if(poj.username===this.state.username){
            return <Exercise exercise={poj} user={this.state.username} deleteExercise={this.deleteExercise} key={poj._id}/>
          } 
          return null

        })
    }

    render() {
        return (
            <StyledContainer>
                <StyledH3>Twoje prywatne notatki</StyledH3>
                
                {this.exercisesList()}

                <StyledButtonContener><Link to="addtask"><StyledButton  className="btn">Dodaj nowe zadanie!</StyledButton></Link></StyledButtonContener>
            </StyledContainer>
        )
    }
}