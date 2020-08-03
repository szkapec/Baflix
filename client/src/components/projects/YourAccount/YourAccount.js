import React, { Component } from 'react'
import styled from 'styled-components';
import image from '../../../assets/images/baflix2.png'
import {Link} from 'react-router-dom';
export default class YourAccount extends Component {
    render() {
        return (
            <StyledAll>
                <div>
                    <Link to="/browse">
                         <img src={image} alt="image baflix"/>
                    </Link>
                </div>
                <span> Nie jestes zalogowany </span>
                
            </StyledAll>
        )
    }
}

const StyledAll = styled.div`
    margin-top: 100px;
    color:white;
    margin-left: 40px;

    img {
        width: 300px;
        margin-bottom: 50px;
    }
`