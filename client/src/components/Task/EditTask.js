import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledH3 = styled.h3`
    font-size: 20px;
    text-decoration: underline;
    padding: 20px 20px;
    @media(min-width:500px){
        font-size: 22px;
    }
`
const StyledLabel = styled.label `
    font-size: 17px;
    margin: 20px 20px;
    @media(min-width:800px){
        font-size: 19px;
    }
`
const StyledInput = styled.input`
    padding: 10px 30px;
    font-size: 16px;
    margin: 20px 20px;
    font-weight: 700;
    background-color: #ecf0f1; 
    color: black; 
    border: 2px solid #bdc3c7;
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
  const StyledContainer = styled.div`
  background-color: #bdc3c7;
  min-height: 100vh;
`

export default class EditTask extends Component {

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
            return window.location = '/login';;
          } 

        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    data: new Date(response.data.date)
                })
            })
            .catch(error => console.log(error))

    }

    onChangeUsername=(e)=> {
        this.setState({
            username: e.target.value
        })
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

        axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
        .then(res => console.log(res));
        window.location = '/viewtask'; //na strone glowna
    }


    render() {
        return (
            <StyledContainer>
              <StyledH3>Edycja notatki</StyledH3>
              <form onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                  <StyledLabel>Notatka: </StyledLabel>
                  <textarea  style={{maxWidth: '500px', minHeight: '150px', marginLeft: '20px'}} type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                
      
        
                <div className="form-group">
                  <StyledInput type="submit" value="Edytuj" className="btn" />
                </div>
              </form>
            </StyledContainer>
            )
          }
        }