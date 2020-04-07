import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Navi from '../Filmy/Navi';




export default class Admin extends Component {

    constructor(props){

        super(props)
        this.state = {
          username: '',
          premium: false,
          admin: false,
        }
    }

    render() {
        return (
            <>
            <Navi/>
            <StyledContainer>
              <StyledTitle> Panel Administatora</StyledTitle>
              <StyledTitle> Ten panel jest tylko dla Admina</StyledTitle>
              <StyledDiv>Będzie dodane:</StyledDiv>
              <br></br>
              <ul>
                <li>zmiana nazwy uzytkownika</li>
                <li>zmiana emaila</li>
                <li>wyswietlenie notatek i twitterow  po użytkowniku</li>
                <li>możliwośc zmienay i usuniecia notatki</li>
              </ul>
         
            <br></br><br></br>
              <StyledDiv>Idz do fimów: <Link to="/profile/film">Filmy</Link></StyledDiv>
              <StyledDiv>Wróć do strony głównej:  <Link to="/profile">Wróć</Link> </StyledDiv>
              </StyledContainer>
            </>

        )}
    }

const StyledDiv = styled.div`
  margin-left: 20px;
`

const StyledTitle = styled.div`
    text-align:center;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 12px;
    padding-top: 30px;
    max-width: 700px;
    
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
const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`