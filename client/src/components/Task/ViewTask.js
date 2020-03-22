import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Exercise from './Exercise';
import styled from 'styled-components';


const StyledButton = styled.button`
    background-color: white; 
  color: black; 
  border: 2px solid yellowgreen;
  border-radius: 20px;
  margin-top: 20px;
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

            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
              username: decoded.username,
            })
            
        

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
            <div>
                <h3 style={{margin: '10px',fontSize: '14px'}}>Notatki widzisz je tylko Ty :)</h3>
                
                {this.exercisesList()}

                <Link to="addtask"><StyledButton  className="btn">Dodaj nowe zadanie!</StyledButton></Link>
            </div>
        )
    }
}