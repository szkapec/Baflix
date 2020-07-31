import React, { Component } from 'react'
import styled from 'styled-components';
import image from '../../../assets/images/baflix2.png';

export default class Error extends Component {
    render() {
        return (
            <StyledAll>
                <img alt="baflix" src={image}></img>
                <div> ERROR </div>
                <div>Nie ma takiej podstony</div>
            </StyledAll>
        )
    }
}

const StyledAll = styled.div`
    margin: 100px auto;
    font-size: 40px;
    color: white;
    background-color: black;
    text-align: center;

    img {
        width: 300px;
        height: 100px;
        margin: 50px;
    }
`