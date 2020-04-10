import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled  from "styled-components";
import StyledCard from './ChangeLight';



class Programing extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      premium: '',
      admin: '',
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken) {
      // return this.props.history.push(`/login`)
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

         
  // <StyledTitle>Flexbox CSS In 20 Minutes</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/JJSoEo8JSnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>

  // <StyledTitle>Realtime Chat With Users</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/jD7FnbI76Hg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  
  // <StyledTitle>Deploy Node.js App To Digital Ocean Server</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/RE2PLyFqCzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>

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

      return this.state.admin&&this.state.premium?(<>
        <StyledCard>
            
              <StyledTitle>CSS Grid Layout Crash Course</StyledTitle>
              <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/jV8B24rSN5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
              <StyledTitle>HTML Crash Course For Absolute Beginners</StyledTitle>
              <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/UB1O30fR-EE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
              <StyledTitle>React JS Crash Course</StyledTitle>
              <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/sBws8MSXN7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
        </StyledCard>
           </>) : <div>{this.forwarding()}</div>

    }
}

export default Programing;



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
    padding-top: 30px;
    
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