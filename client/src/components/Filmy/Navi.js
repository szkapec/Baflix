import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';



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
            <StyledContainer colors={this.props.colors}>
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
            <StyledLi><Link style={{color:'black'}} to="/profile/film/story">
                Bajki
            </Link>
            </StyledLi>
        </StyledContainer>

        </div>
  
        </>

    )
  
  }
}

export default Navi;




const StyledContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style-type: none;
    margin:0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    background-color: ${({colors})=> colors?'black':'#ecf0f1'} ;
  

    

    @media(min-width:600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 50px);
    font-size:15px;
    padding: 15px 10px;
    }
    @media(min-width:1000px) {
        padding: 20px 50px;
        font-size:16px;
    }
    @media(min-width:1400px) {
        padding: 20px 60px;
        margin-bottom: 50px;
    }
`

const StyledLi = styled.li`

    border: 1px solid #7f8c8d;
    margin: 10px;
    border-radius: 15px;
    background-color: #bdc3c7;
    @media(min-width:1000px) {
        margin: 10px 30px;
    }
    @media(min-width:1200px) {
        margin: 10px 50px;
    }
    @media(min-width:1400px) {
        margin: 10px 70px;
    }
    @media(min-width:1600px) {
        margin: 10px 100px;
    }
`

