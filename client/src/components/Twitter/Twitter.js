import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import plus from '../../assets/plus.svg';
import styled,  { css }  from "styled-components";


import ViewTwitters from './ViewTwitters';


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

export default class Twitter extends Component {

    constructor(props){

        super(props)
        this.state = {
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


    
/*
  // componentDidMount() {
  //   if(!localStorage.usertoken) {
  //     return window.location = '/login'
  //   } 
  //   else {
  //     const token = localStorage.usertoken
  //     const decoded = jwt_decode(token)
  //     this.setState({
  //       username: decoded.username,
  //     })
  //   }
    
  //   axios.get('http://localhost:5000/twitter/')
  //   .then(response => {
  //       this.setState({
  //           twittersy: response.data
  //       })
        
        
  //   })
  //   .catch(error => console.log(error))
  // }
*/

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
            link: this.state.link
        }
        axios.post('http://localhost:5000/twitter/add', twitt)
        .then(res => console.log(res.data));
        this.setState({
          info: '',
          plus: false,

        })
        window.location = '/twitter'; //na strone glowna
        } 

    
    }


    viewsList = () => {
       
      return this.state.twittersy.map(poj => {
        
          return <ViewTwitters twitty={poj} username={poj.username} user={this.state.username}  key={poj._id}/>
        
      
      })
  }


    render() {
        return (
            // <StyledContainer>
            //   <StyledH3>Lista twitterów</StyledH3>
              
          
            //   <form onSubmit={this.onSubmit}>
               
               
            //   <StyledWrapper isVisible={this.state.plus}>
            //   <div className="all"> 
            //   <div style={{color:'red'}}> {this.state.infoTitle?this.state.infoTitle:null}</div>
            //    <StyledText> Tytuł twittera: <div><Input onChange={this.onChangeTitle} placeholder="Tytuł"></Input></div></StyledText>
            //    <StyledText>Link <div> <Input onChange={this.onChangeLink} placeholder="Link"></Input></div></StyledText>
            //   <div style={{color:'red'}}> {this.state.info?this.state.info:null}</div>
            //    <StyledText> Treść: <div><Textarea onChange={this.onChangeDescription} placeholder="TREŚĆ"></Textarea></div></StyledText>
            //   </div>

            //   <div className="form-group">
            //       <StyledInput type="submit" value="Dodaj twitta" className="btn" />
            // </div> 
            //   <div style={{backgroundColor: '#2980b9', borderRadius: '50%', width: '50px',height: '50px', position:'absolute', bottom: '20px', right: '20px'}} >
            //     <img style={{margin: '12px 12px'}} src={plus} alt="plusowo" onClick={this.onChangePlus}></img>
            //  </div>
            //   </StyledWrapper>
            //  </form>
             
             
            //   <div style={{backgroundColor: '#2980b9', borderRadius: '50%',border: '1px solid black', width: '50px',height: '50px', position: 'fixed', left: '20px', bottom: '20px'}} >
            //   <img style={{margin: '12px 12px',}} src={plus} alt="plus" onClick={this.onChangePlus}></img> 
            //  </div>
   
            //  <StyledGrid>{this.viewsList()}</StyledGrid>
            // </StyledContainer>
            )
          }
        }