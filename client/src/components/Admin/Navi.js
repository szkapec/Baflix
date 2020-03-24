import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledContainer = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    padding: 0px;
`

const StyledLi = styled.li`
    margin: 0 auto;
    text-decoration: none;
    width: 150px;
    height: 35px;
    text-align: center;
    background-color: red;
`

class Navi extends Component {

//   logOut(e) {
//     e.preventDefault()
//     localStorage.removeItem('usertoken')  //wylogowanie
//     this.props.history.push(`login/`)
//   }

  render() {

    return (
        <>
        <div>
            <StyledContainer>
            <StyledLi><Link style={{color:'black'}} to="/profile/film/programing">
                Programowanie
            </Link>
            </StyledLi>
            <StyledLi><Link style={{color:'black'}} to="/profile/film/music">
                Muzyka
            </Link>
            </StyledLi>
            <StyledLi><Link style={{color:'black'}} to="/profile/film/mountains">
                Góry
            </Link>
            </StyledLi>
        </StyledContainer>

        </div>
  
        </>

    )
  
  }
}

export default Navi;