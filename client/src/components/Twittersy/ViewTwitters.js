import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ExerciseTwitter from './ExerciseTwitters';
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
    padding: 15px 0px;
    text-align: center;

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
const StyledAllGrid = styled.div`

@media(min-width: 1000px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
}
@media(min-width: 1500px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}
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

            
            
        

        axios.get('http://localhost:5000/twittery/')
            .then(response => {
                this.setState({
                    exercises: response.data
                })
                
            })
            .catch(error => console.log(error))
    }

    deleteExercise(id) { 
        axios.delete('http://localhost:5000/twittery/'+id)
            .then(res=> console.log(res.data));
            this.setState({
                exercises: this.state.exercises.filter(el=>el._id !== id) //zwroc elementy el.id nierowne id
            })
    }

    exercisesList = () => {
       
        return this.state.exercises.map(poj => {
          
            return <ExerciseTwitter twitters={poj} user={this.state.username} deleteTwitters={this.deleteExercise} key={poj._id}/>

        })
    }

    render() {
        console.log(this.state.exercises)
        return (
            <StyledContainer>
                <StyledH3>Twoje prywatne notatki</StyledH3>
                
                <StyledAllGrid>{this.exercisesList()}</StyledAllGrid>

                <StyledButtonContener><Link to="/addtwitters"><StyledButton  className="btn">Dodaj nowe zadanie!</StyledButton></Link></StyledButtonContener>
            </StyledContainer>
        )
    }
}