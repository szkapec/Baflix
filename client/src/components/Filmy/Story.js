import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled  from "styled-components";
import Navi from './Navi';
import StyledCard from './ChangeLight';


class Story extends Component {
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
  all = () => {
    return(
      <>
        <StyledCard>
          <StyledTitle>Tu będa bajki dla Modelsona ale czekam na prawa autorskie</StyledTitle>
        </StyledCard>
      </>
    )
  }

//   <StyledTitle>Król Lew 2 Czas Simby Lektor PL</StyledTitle>
//               <StyledTitle><a href="http://ebd.cda.pl/620x368/421592879">Link</a></StyledTitle>
//               <StyledTitle>Droga do El Dorado (2002) Dubbing PL</StyledTitle>
//               <StyledTitle><a href="http://ebd.cda.pl/620x368/4224891f7">Link</a></StyledTitle>
              
    render() {
        return this.state.admin&&this.state.premium?<div>{this.all()}</div>: <h2>{this.forwarding()}</h2>
    }
}

export default Story;


const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
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


const StyledIframe = styled.div`
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


const StyledContener = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`
