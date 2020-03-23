import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import jwt_decode from 'jwt-decode';


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
            <div>
              <h3>Edycja twittera</h3>
              <form onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                  <label>Treść: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                  <label> Tytuł </label>
                  <input 
                      type="text" 
                      className="form-control"
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                <label>link: </label>
                <div>
                  <input type="text" className="form-control"  onChange={this.onChangeLink}></input>
                </div>
              </div>
      
        
                <div className="form-group">
                 <button style={{color: 'black', border: '2px solid #2980b9',backgroundColor: 'white', padding: '8px 15px', margin: '10px'}} type="text" >Wróć<Link to="twitter"></Link></button>
                  <input style={{color: 'black', border: '2px solid #2980b9',backgroundColor: 'white', padding: '8px 15px', margin: '10px'}} type="submit" value="Edytuj"  />
                </div>
              </form>
            </div>
            )  
          }
        }