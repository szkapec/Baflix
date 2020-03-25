import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledH3 = styled.h3`
    font-size: 20px;
    padding: 25px 30px;
    text-align:center;

        @media(min-width: 400px){
        font-size: 18px;
        text-align: center;
    }
        @media(min-width: 900px){
        font-size: 22px;
        text-align: center;
    }
`
const StyledDiv = styled.div `
      font-size: 16px;
    padding: 15px 30px;
    text-align:center;
`
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`
const StyledLink = styled.div`
  text-align:center;
  margin: 40px auto;
`



const Zalogowany = () => {

  return (
    <>
    <StyledContainer>
      <StyledH3>Witam na mojej stronie</StyledH3>
      <hr></hr>
      <StyledDiv>Zostałeś prawidłowo zalogowany</StyledDiv>
      <hr></hr>
      <StyledDiv>Strona została napisana w React + Express + Node + MongoDB</StyledDiv>
      <hr></hr>
      <StyledDiv>Konto premium daje dodatkowe możliwości w aplikacji - napisz do Admina </StyledDiv>
      <hr></hr>
      <StyledDiv>Zapraszam do testowania aplikacji!</StyledDiv>

    </StyledContainer>
    </>
   
  )
}


const Niezalogowany = () => (
  <>
  <StyledContainer>
    <StyledH3 className="text-center">Witamy na stronie!</StyledH3>
    <StyledDiv>Proszę się zalogować aby zobaczyć treść strony</StyledDiv>

   <StyledLink>
        <Link style={{marginRight: '30px', color:'black', border: '1px solid #7f8c8d' , borderRadius: '20px', padding: '10px 20px'}} to="/register">Rejestracja</Link>
        <Link style={{MarginLeft: '30px', color:'black', border: '1px solid #7f8c8d' , borderRadius: '20px', padding: '10px 20px'}} to="/login">Logowanie</Link></StyledLink> 
  </StyledContainer>

  </>
 
)

class Landing extends Component {



  render() {
    return (
      <div>
        <div>
          <div className="col-sm-8 mx-auto">
            
          </div>
          {localStorage.usertoken? <Zalogowany/> : <Niezalogowany/>}
        </div>
      </div>
    )
  }
}

export default Landing