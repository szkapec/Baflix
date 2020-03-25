import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled from "styled-components";
import Navi from './Navi';

const Input = styled.input`
  padding: 10px 25px;
  font-size: 14px;
  margin: 20px 20px;
  font-weight: 700;
  background-color: ${({colors}) => colors?'#7f8c8d':'black'};
  color: ${({colors}) => colors?'black':'white'};
  border:none;
  border-radius: 50px;
  float: right;
  margin-right: 30px;

`;


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
    color: ${({colors}) => !colors?'black':'#7f8c8d'};
    
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
const StyledCard = styled.div`
  background-color: ${({colors}) => colors?'black':'#ecf0f1'} ;
  min-height: 100vh;
`
const StyledContener = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`

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
      return this.props.history.push(`/login`)
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
      return this.props.history.push(`/login`)
    }
  }

  changeInput = (e) => {
    this.setState({
      valueColor: !this.state.valueColor
    })
  }

  container = () => {
    return(
      <>
      <StyledCard colors={this.state.valueColor}>
          
            <Navi colors={this.state.valueColor}/>
            <StyledContener>
                <StyledTitle colors={this.state.valueColor}>Programming / Coding / Hacking music vol.16 (CONNECTION LOST)</StyledTitle>
                <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/l9nh1l8ZIJQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
                <Input colors={this.state.valueColor} type="button" onClick={this.changeInput} value={this.state.valueColor?'Jasny':'Ciemny'}></Input>

              </StyledContener>
              
      </StyledCard>
            
      </>
    )
  }
  // <StyledTitle>Concentration Programming Music</StyledTitle>
  // <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/0r6C3z3TEKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  
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