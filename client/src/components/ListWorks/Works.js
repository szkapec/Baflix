import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ListWorksItem from './ListWorksItem';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default class Works extends Component {
        constructor(props) {
            super(props)
            this.state = {
                username:'',
                description:'',
                listWorks: [],
                date: new Date().toISOString().slice(0,10),
                priorytet: false,
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

        axios.get('/list/')
            .then(response => {
                this.setState({
                    listWorks: response.data
                })
            })
            .catch(error => console.log(error))
    }


    handleList = (e) => {
        this.setState({
            description: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let tempDesc = {
            description: this.state.description,
            username: this.state.username,
        }
        console.log(tempDesc)
        
        this.state.listWorks.push(tempDesc);
        this.setState({})
        const list = {
            username: this.state.username,
            description: this.state.description,
            priorytet: this.state.priorytet,
            date: this.state.date,
        }
        axios.post('/list/add', list)
        .then(res => console.log(res.data));
        this.listMap()

        this.setState({
            description: '',
        })
    }
    deleteExercise = (id) => { 
        axios.delete('/list/'+id)
            .then(res=> console.log(res.data));
            this.setState({
                listWorks: this.state.listWorks.filter(el=>el._id !== id) //zwroc elementy el.id nierowne id
            })
    }

    listMap = () => {
       
        return this.state.listWorks&&this.state.listWorks.map((item, index) => {
            
            if(this.state.username===item.username){
                return <ListWorksItem data={this.state.date} pr={this.state.priorytet} item={item} key={index} deleteExercise={this.deleteExercise}/>
            }
        })
    }


zmianaDaty = (e) => {
    this.setState({
        date: e.target.value
    })
}
changePriorytet = () => {
    this.setState({
        priorytet: !this.state.priorytet
    })
}

    render() {
        return (
            <div>
                <StyledContainer onSubmit={this.onSubmit} >
                  
                   <div>
                   <label className="labelAdd" htmlFor="item">Dodaj zadanie:  </label>
                   <StyledInput placeholder="zadanie" value={this.state.description} onChange={this.handleList} type="text" name="item"></StyledInput>
                   </div>
                  
                    <StyledLabel priorytet={this.state.priorytet} className="label" htmlFor="check">Priorytet?
                    <input className="inputPriorytet" type="checkbox" name="check"  onChange={this.changePriorytet}></input></StyledLabel>

                    <label className="spanDoKiedy">Do kiedy wykonać: </label>
                    <input style={{borderRadius: '10px'}} type="date" value={this.state.date} min={this.minDate}  onChange={this.zmianaDaty}></input>
                    
                    <div>
                    <button type="submit">dodaj</button>
                    </div>
                
                </StyledContainer>
                
                {this.state.listWorks.length>0?this.listMap():<StyledWar>Brak zadań do wykonania;)</StyledWar>}

                
            </div>
        )
    }
}
const StyledWar = styled.div`
    text-align: center;
`
const StyledLabel = styled.label`
    color:  ${({priorytet}) => priorytet?"red":"black"};
`

const StyledContainer = styled.form`
 font-size: 12px;
 text-align: center;

    button {
        display: inline-block;
        margin: 20px auto;
        background-color: white; 
        color: black; 
        border: 2px solid green;
        border-radius: 10px;
        padding: 5px 5px;
    }
    .label {
        width: 100%;
    }
    .inputPriorytet {
        margin-left: 10px;
    }
    .labelAdd {
        width: 100%;
        margin: 20px auto 0;
    }
    .spanDoKiedy {
        width:100%;
    }

    @media(min-width:800px){
        font-size: 16px;

        .spanDoKiedy {
            width: auto;
            margin-right: 20px;
        }
  }
`

const StyledInput = styled.input`
border: none;
padding: 5px 5px;
font-size: 12px;
border-radius: 10px;
background-color: white;

color: black;
border: 2px solid green;
margin: 5px auto;
font-weight: 700;
margin-left: 10px;
@media(min-width:800px){
      font-size:16px;
      padding: 5px 15px;
  }
  `

