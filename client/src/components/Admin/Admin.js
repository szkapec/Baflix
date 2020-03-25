import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Navi from '../Filmy/Navi';

const StyledContainer = styled.div`
  background-color: #ecf0f1;
  min-height: 100vh;
`


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

         
              <h1> Panel administatora</h1>
              <h2> Jeszcze tu nic nie ma ale bedzie xD</h2>
              <div>Zmiana nazwy uzytkownika, zmiana emaila, wyswietlenie notatek i twitterow po użytkowniku i mozliwosc ich zmiany</div>
              <br></br>
              <br></br>
              <br></br>

              <div>idz do fimów: <Link to="/profile/film">Filmy</Link></div>
              <div>Wróć do strony głównej:  <Link to="/profile">Wróć</Link> </div>
              </StyledContainer>
            </>

        )}
    }