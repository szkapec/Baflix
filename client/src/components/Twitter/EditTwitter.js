import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'


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
    margin: 20px 0px;
    @media(min-width:800px){
        font-size: 19px;
    }
`


const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`
export default class EditTwitter extends Component {

    constructor(props){

        super(props)
        this.state = {
            username: "",
            description: '',
            title: '',
            link: '',
            users: []
        }
      }

    componentDidMount() {

        

        axios.get('/twitter/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    link: response.data.link,
                    title: response.data.title,
                })
            })
            .catch(error => console.log(error))

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
    onChangeLink=(e)=> {
        this.setState({
            link: e.target.value
        })
    }
    onChangeTitle=(e) =>{
        this.setState({
            title: e.target.value,
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const twitters = {
            username: this.state.username,
            description: this.state.description,
            link: this.state.link,
            title: this.state.title,
        }
console.log(this.state.username)
        axios.post('/twitter/updateTwitter/' + this.props.match.params.id, twitters)
        .then(res => console.log(res));
        // window.location = '/twitter'; //na strone glowna
    }


    render() {
        return (
            <StyledContainer>
              <div className="container"> 
              <StyledH3>Edycja twittera</StyledH3>
              <form onSubmit={this.onSubmit}>
                
                
                <div className="form-group">
                  <StyledLabel> Tytuł </StyledLabel>
                  <input 
                  style={{maxWidth: '500px'}}
                      type="text" 
                      className="form-control"
                      onChange={this.onChangeTitle}
                      placeholder="Tytuł"
                      />
                </div>
                <div className="form-group">
                <StyledLabel>Link: </StyledLabel>
                <div>
                  <input style={{maxWidth: '500px'}} type="text" className="form-control" placeholder="Link"  onChange={this.onChangeLink}></input>
                </div>
              </div>

              <div className="form-group"> 
                  <StyledLabel>Treść: </StyledLabel>
                  <textarea style={{maxWidth: '500px'}} type="text"
                      required
                      className="form-control"
                      onChange={this.onChangeDescription}
                      placeholder="Treść"
                      />
                </div>
        
                <div className="form-group">
                 <button style={{color: 'black', border: '2px solid #2980b9',backgroundColor: 'white', padding: '8px 15px', margin: '10px', borderRadius:'10px'}} type="text" >Wróć<Link to="twitter"></Link></button>
                  <input style={{color: 'black', border: '2px solid #2980b9',backgroundColor: 'white', padding: '8px 15px', margin: '10px', borderRadius:'10px'}} type="submit" value="Edytuj"  />
                </div>
              </form>
              </div>
            </StyledContainer>
            )  
          }
        }