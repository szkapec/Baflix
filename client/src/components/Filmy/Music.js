import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled from "styled-components";
import StyledCard from './ChangeLight';


class Music extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      admin: '',
      premium: '',
      valueColor: false,
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



  container = () => {
    return(
      <StyledCard >
          <StyledTitle>Focus Boost Coding Music 🧩#15</StyledTitle>
          <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/cQ-a18zEBmI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
          <StyledTitle>Hacking Music Mix - Mr. Robot 🤖#13</StyledTitle>
          <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/iAYMJk9IsDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
      </StyledCard>

    )
  }
  
  
  // <StyledTitle>The Silent Forest - Chillstep Mix</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/18NHV4nJLQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
 
  // <StyledTitle>'Blissful Solitude' - Ambient Mix</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/dTW2MxfqVLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
 
  // <StyledTitle>Epic Chillstep Collection 2016 [2 Hours]</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/IfL0JsTbv0M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>

    render() {
      return this.state.admin&&this.state.premium?<div>{this.container()}</div>:<div>{this.forwarding()}</div>
    }
}

export default Music;




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
