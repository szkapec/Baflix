import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Message from './Message';

    

   


export default class Comunicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            username: "",
            description: '',
        };
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


        axios.get('http://localhost:5000/message/')
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

    axios.post('http://localhost:5000/message/add', message)
    .then(res => console.log(res.data))
    window.location = '/'; //na strone glowna
}

    exercisesList = () => {
        var description = []
        var username = [];
        this.state.exercises.map((poj,number) => {
           description.push(poj.description)
           username.push(poj.username)
        })

        return <Message username={username.reverse()} description={description.reverse()}/>
    }

    //   return <Message exercise={poj} key={poj._id}/>
    render() {
        return (
            <>
            <div>
                <h3>Czat:</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Użytkownik</th>
                            <th>Wiadomość</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>

            <div>
            <br></br>
              <h3>Napisz wiadomość</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Wiadomość: </label>
                  <textarea   type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Wyślij" className="btn btn-primary" />
                </div>
              </form>
            </div>
            </>
        )
    }
}