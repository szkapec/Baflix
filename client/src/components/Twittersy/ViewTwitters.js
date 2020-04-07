import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ExerciseTwitter from './ExerciseTwitters';
import styled from "styled-components";
import AddTwitters from './AddTwitters';

export default class ViewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            username: "",
            description: '',
            title: '',
            link: '',
            twittersy: [],
            info: '',
            infoTitle: '',
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

            
            
        

        axios.get('http://localhost:5000/twittery/')
            .then(response => {
                this.setState({
                    exercises: response.data
                })
                
            })
            .catch(error => console.log(error))
    }


 



    exercisesList = () => {
       
        return this.state.exercises.map(poj => {
            return <ExerciseTwitter twitters={poj} user={this.state.username} deleteTwitters={this.deleteExercise}  key={poj._id} username={poj.username}/>

        })
    }

    render() {
        return (
            <StyledContainer>
                <StyledH3>Twittersy</StyledH3>
                <StyledAllGrid>{this.exercisesList()}</StyledAllGrid>
                <AddTwitters username={this.state.username}/>
            </StyledContainer>
        )
    }
}




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
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`


const StyledH3 = styled.h3 `
text-decoration: underline;
width: 80%;
margin: 0px auto 0px;
padding: 20px 0;
text-align: center;
padding: 30px auto;
font-size: 22px;

@media(min-width:500px){
  font-size: 26px;
}
@media(min-width:1000px){
  font-size: 28px;
}
`