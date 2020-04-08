import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled  from "styled-components";
import Navi from './Navi';
import StyledCard from './Music';

class ViewFilm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      admin: '',
      premium: '',
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken) {
      return console.log("locc")//this.props.history.push(`/login`)
    } 
    else {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        username: decoded.username,
        premium: decoded.premium,
        admin: decoded.admin,
      })
      
    }
  }

filmy = () => {

  return (
    <>

    

    <StyledCard>
    <Navi/>
    <StyledContener>
        <StyledTitle>Ambient Music for Studying</StyledTitle>
        <StyledIframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1yuDK3IXnb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
        <StyledTitle>CSS Grid Layout Crash Course</StyledTitle>
        <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/jV8B24rSN5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
      
    </StyledContener>
    </StyledCard>

    </>
  )
}

forwarding = (e) => {
  if(this.state.admin===undefined){
    localStorage.removeItem('usertoken')  //wylogowanie
    return console.log("MUSIC")//this.props.history.push(`/login`)
  }
  setTimeout(() => {
    if(!this.state.admin){
      return  window.location = '/profile';
    }
    if(!this.state.premium){
      return  window.location = '/profile';
    }
}, 3000);
  return <div style={{textAlign: 'center', marginTop: '20px'}}> 404 Brak dostępu</div>
  
}

    render() {
        return this.state.admin&&this.state.premium?<div>{this.filmy()}</div>:<div>{this.forwarding()}</div>
    }
}

export default ViewFilm;




// const StyledContainer = styled.div`
//   background-color: #ecf0f1;
//   min-height: 100vh;
// `

const StyledIframe = styled.iframe`
  width: 99%;
  margin: 0px 1px 10px;
  height: 200px;

  @media(min-width: 400px) {
    height: 300px;
    margin: 0px 1px 30px;
  }
  @media(min-width: 500px) {
    height: 400px;
    width: 80%;
    margin: 0px 10% 50px;
  }
  @media(min-width: 800px) {
    width: 700px;
    margin: 0px 10% 50px;
  }
`
const StyledTitle = styled.div`
    text-align:center;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 12px;
    
  @media(min-width: 400px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media(min-width: 500px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media(min-width: 800px) {
    text-align: center;
    width: 700px;
    margin: 0px 10% 10px;
  }
`

const StyledContener = styled.div`
  position: relative;
  width: 100%;
  margin: auto;


`