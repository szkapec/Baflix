import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ExerciseTwitter from './ExerciseTwitters';
import plus from '../../assets/plus.svg';
import styled,  { css }  from "styled-components";

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
            username: "",
            description: '',
            title: '',
            link: '',
            plus: false,
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


    
    onChangeLink = (e) => {
        this.setState({
            link: e.target.value,
        })
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
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
    onChangePlus = (e) => {
        this.setState({
            plus: !this.state.plus
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.state.description.length<=5) {
          this.setState({
            info: "Za któtka treść!"
          })
        }
        if(this.state.title.length<=3){
          this.setState({
            infoTitle: "Za któtka treść!"
          })
        }
        
        if(this.state.description.length>5 && this.state.title.length>3) {
          const twitt = {
            username: this.state.username,
            description: this.state.description,
            title: this.state.title,
        }
        axios.post('http://localhost:5000/twittery/add', twitt)
        .then(res => console.log(res.data));
        this.setState({
          info: '',
          plus: false,

        })
        // window.location = '/twitter'; //na strone glowna
        } 

    
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
                <StyledH3>Twittersy</StyledH3>
                <StyledAllGrid>{this.exercisesList()}</StyledAllGrid>
                <StyledButtonContener><Link to="/addtwitters"><StyledButton  className="btn">Dodaj nowe zadanie!</StyledButton></Link></StyledButtonContener>

                <form onSubmit={this.onSubmit}>
               
               
              <StyledWrapper isVisible={this.state.plus}>
              <div className="all"> 
              <div style={{color:'red'}}> {this.state.infoTitle?this.state.infoTitle:null}</div>
               <StyledText> Tytuł twittera: <div><Input onChange={this.onChangeTitle} placeholder="Tytuł"></Input></div></StyledText>
               <StyledText>Link <div> <Input onChange={this.onChangeLink} placeholder="Link"></Input></div></StyledText>
              <div style={{color:'red'}}> {this.state.info?this.state.info:null}</div>
               <StyledText> Treść: <div><Textarea onChange={this.onChangeDescription} placeholder="TREŚĆ"></Textarea></div></StyledText>
              </div>

              <div className="form-group">
                  <StyledInput type="submit" value="Dodaj twitta" className="btn" />
            </div> 
              <div style={{backgroundColor: '#2980b9', borderRadius: '50%', width: '50px',height: '50px', position:'absolute', bottom: '20px', right: '20px'}} >
                <img style={{margin: '12px 12px'}} src={plus} alt="plusowo" onClick={this.onChangePlus}></img>
             </div>
              </StyledWrapper>
             </form>
             <div style={{backgroundColor: '#2980b9', borderRadius: '50%',border: '1px solid black', width: '50px',height: '50px', position: 'fixed', left: '20px', bottom: '20px'}} >
              <img style={{margin: '12px 12px',}} src={plus} alt="plus" onClick={this.onChangePlus}></img> </div>

            </StyledContainer>
        )
    }
}


const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 30px 30px;
  flex-direction: column;
  border-radius: 20px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 280px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  @media(min-width: 600px) {
    
    padding: 100px 90px;
    width: 480px;
  }

`;


const StyledText = styled.div`
  font-size: 14px;
  font-weight: 700;
  @media(min-width:600px) {
  font-size:16px;
  }
  @media(min-width:1000px) {
  font-size:18px;
  }
`
const StyledInput = styled.input`
  margin-top: 20px;
  background-color: #2980b9;
  border-radius: 20px;
  font-weight: 700;
  width: 120px;
  font-size:14px;
  @media(min-width:600px) {
    width: 150px;
  font-size:16px;
  }
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

const Textarea = styled.textarea`
  padding: 25px 40px;
  margin: 20px 0px;
  font-size: 14px;
  background-color: hsl(0,0%,96%);
  border: none;
  height: 200px;
  border-radius: 50px; 
  @media(min-width: 600px) {
    padding: 25px 70px;
  }
  `
const Input = styled.input`
  padding: 10px 20px;
  font-size: 12px;
  margin: 20px 0px;
  font-weight: 700;
  background-color: hsl(0,0%,96%);
  border: none;
  border-radius: 50px;

  @media(min-width:500px) {
    padding: 15px 30px;
  }
  @media(min-width: 600px) {
    padding: 15px 50px;
  }
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: grey;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: 14px;
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`
const StyledGrid = styled.div`

@media(min-width: 1000px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}
@media(min-width: 1500px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}
`