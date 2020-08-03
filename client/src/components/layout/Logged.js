import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components';
export class Logged extends Component {

    state = {
        visible: false,
    }

    render() {
    const userLink = (
        <StyledUlUserLink className="navbar-nav" onClick={ () => this.setState({visible:false})}>
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Strona główna
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/browse" className="nav-link">
                  Filmy i seriale
                </NavLink>
            </li>
  
            <li  className="nav-item">
              <NavLink to="/news" className="nav-link">
                  Najnowsze
                </NavLink>
            </li>
  
            <li  className="nav-item">
              <NavLink to="/information" className="nav-link">
                  Informacje
                </NavLink>
            </li>
  
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">
              Moja lista
            </NavLink>
          </li>
        </StyledUlUserLink>
      )

      const usersOption = (
            <span className="navbar-link">
            
                <span>
                    
                    <div onClick={() => {
                        this.setState({
                            visible: !this.state.visible,
                        })
                    }} 
                    className="nav-link">
                        <i style={{color: 'white'}} className="fas fa-bell"></i>
                       
                    </div>
                  
                </span>
                <span>
                    <NavLink to="/YourAccount" className="nav-link">
                        <StyledImg src="https://placeimg.com/640/480/any" alt="picturerandoms"/>
                    </NavLink>
                </span>
            </span>
      )
     
       const notification = (
        <>
          <StyledViewsConditional onClick={ () => this.setState({visible:false})}>Aktualnie brak powiadomień</StyledViewsConditional>
        </>
    )
        return (
        <div className="navbar-link" style={{position: 'relative'}}>
            
            <StyledNav onClick={ () => this.setState({visible:false})} className="navbar navbar-expand-lg navbar-dark  "> 
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample10"
                aria-controls="navbarsExample10"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    Przeglądaj
                </button>

                <span className="collapse navbar-collapse justify-content-md-left" id="navbarsExample10">
                {/* {localStorage.usertoken ? userLink : loginRegLink} */}
                {userLink}
                </span>
               
            </StyledNav>
            <StyledSpanRight>
                        {usersOption}
                        {this.state.visible ? notification : null}
            </StyledSpanRight>
            <StyledColor>

            </StyledColor>

          </div>
        )
    }
}

export default Logged

const StyledViewsConditional = styled.div`
    border-top: 4px solid #95a5a6;
    color: black;
    width: 150px;
    height: 60px;
    background-color: #ecf0f1;
    position: fixed;
    top: 55px;
    right: 50px;
    z-index: 9999999;
    border-radius: 2px;

    font-size: 16px;
    text-align: center;
    box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.75);
    font-family: 'Cantarell', sans-serif;
    @media(min-width: 700px) {
        width: 200px;
        height: 70px;
    }
    @media(min-width: 980px) {
        top: 70px;
        width: 250px;
    }
`

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    
    @media(min-width: 990px) {
        width: 40px;
        height: 40px;
    }
`

const StyledSpanRight = styled.span`
    span:nth-child(3) {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999;

    }
    span:nth-child(2) {
        position: fixed;
        top: 0;
        right: 60px;
        z-index: 999;

    }
    span:nth-child(1) {
        position: fixed;
        top: 0;
        right: 140px;
        z-index: 999;

    }

`
const StyledNav = styled.nav`
    position:fixed;
    top:0;
    width: 200px;
    background-color: rgba(0,0,0,0.8);
    z-index: 9;

    @media(min-width: 990px) {
        width: 100%;
    }
`

const StyledColor = styled.div`
    position: fixed;
    top: 0;
    left:0;
    background-color: rgba(0,0,0,0.8);
    width: 100vw;
    margin-left: 200px;
    height: 46px;
    z-index: 0;
    @media(min-width: 990px) {
        height: 56px;
        margin-left:0;
    }
`

const StyledUlUserLink = styled.ul`
    li {
        z-index: 99;
        a { 
           z-index: 99;
           color: white;
        }
    }
`