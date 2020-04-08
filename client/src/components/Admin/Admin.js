import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Navi from '../Filmy/Navi';
import StyledCard from '../Filmy/ChangeLight';



export default class Admin extends Component {

    constructor(props){

        super(props)
        this.state = {
         
        }
    }

    render() {
        return (
            <>
            <StyledCard>
              <StyledTitle> Panel Administatora</StyledTitle>
              <StyledTitle> Ten panel jest tylko dla Admina</StyledTitle>
              <StyledDiv>Będzie dodane:</StyledDiv>
              <br></br>
              <ol>
                <li>Lista zadań do zrobienia</li>
                <li>dodanie alertow przy usuwaniu i dodawaniu czy modyfikacji</li>
                <li>jebane prawa autorskie</li>
                <li>O... banowanie(usuniecie z bazy?) i sprawdzanie obrazliwych słów</li>
                <li>zmiana nazwy uzytkownika</li>
                <li>zmiana emaila</li>
                <li>wyswietlenie notatek i twitterow  po użytkowniku</li>
                <li>możliwośc zmienay i usuniecia notatki(kazdej tylko admin)</li>
                <li>polaczenie z 2 bazami danych dla bezpieczeństwa</li>
                <li>calkowite zabezpieczenie PSBC</li>
                
                
              </ol>

              <ul>
                lista zadan do zrobienia:
                <li>to co bylo u samuraja czyli dodawanie do tablicy z wymiarem czasowym</li>

                <li>dodawanie zadan juz zrobionych i usuwanie ich </li>
                <li>a na samym koncu zapisywanie do bazy wanych odzielnym buttonem</li>
              </ul>
         
            <br></br><br></br>
              <StyledDiv>Idz do fimów: <Link to="/profile/film">Filmy</Link></StyledDiv>
              <StyledDiv>Wróć do strony głównej:  <Link to="/profile">Wróć</Link> </StyledDiv>
              </StyledCard>
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