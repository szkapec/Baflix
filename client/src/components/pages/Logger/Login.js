import React, { Component } from 'react'
import logo from '../../../assets/images/baflix2.png';
import styled from 'styled-components';
import './login.css';
import LoginForm from './LoginForm';
import LoginFooter from './LoginFooter';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                 <div className="stop"></div>
                <div className="header-top">
                   
                   <Link to="/">
                        <Logo src={logo} alt="logo" className="logo"/>
                   </Link>
                </div>
                <LoginForm/>
                <LoginFooter/>
            </div>
        )
    }
}

const Logo = styled.img`
    width: 200px;
    position: absolute;
    top: 25%;
    left: 100px;
    transform: translate(-50%,-50%);
    margin-left: 0;
    @media(min-width: 500px){
        width: 350px;
        height: 80px;
        left: 150px;
    }
`
