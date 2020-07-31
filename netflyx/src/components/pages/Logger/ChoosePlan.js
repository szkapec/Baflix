import React, {Component} from 'react'
import styled from 'styled-components';
import logo from '../../../assets/images/baflix2.png';
import {Link} from 'react-router-dom';
import CheckMarkLogo from '../../../assets/images/Checkmark.png';
import { Button } from '../tabComponents/Button.css';
import {FooterChoosePlan} from './FooterChoosePlan';

export class ChoosePlan extends Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }
    render(){
        return (
            <MainContainer>
                <div className="stop"></div>
                <div className="header-top">
                    <Link to="/login">
                        <Logo src={logo} alt="logo"/>
                    </Link>
                    <Link to="/login" className="btn signIn-btn">
                        Sign In
                    </Link>
                </div>
                <div className="header-content">
                    <img src={CheckMarkLogo} className="checkmark-logo" alt="checkmark logo"/>
                    <p>Step <strong>1</strong>  of <strong>3</strong></p>
                    <h2>Choose your plan.</h2>
                        <div className="checked-list">
                            <div className="bullet">No Commitments, cancel anytime.</div>
                            <div className="bullet">Everything on Baflix for one low price.</div>
                            <div className="bullet">Unlimited viewing on all your devices</div>
                        </div>
                        <Link to="/login">
                            <Button>See the plans</Button>
                        </Link>
                </div>
                <FooterChoosePlan/>
                
            </MainContainer>
        )
    }
    }
    

const MainContainer = styled.div`
    .stop {
        width: 100%;
        height: 46px;
        background-color: black;
        @media(min-width:990px) {
            height: 56px;
        }
    }
    background: #fff;
     .header-top {
         background: #fff;
         height: 5rem;
         border-bottom: 1px solid #e6e6e6;
        color: black;
     }
     .header-content {
         display: grid;
         justify-content: center;
         background: #fff;
         color: var(--main-dark);
         margin-bottom: 6rem;
         width: 65%;
         position: relative;
         margin: auto;
         margin-top: 0px;
         text-align: center;
         align-content: center;
         flex-direction: column;
         z-index: 2;
     }
     .checkmark-logo {
         width: 3rem;
         margin-top: 3rem;
         margin-bottom: 2rem;
     }
     .header-content img {
         margin: 6rem auto 2rem;
     }
     .checked-list {
         text-align: left;
         margin: 16px auto 45px;
         padding-left: 18px;
         width: 95%;
         font-size: 17px;
         padding: auto;
     }

     .buttet {
         margin-top: 16px;
         margin-left: 16px;
         text-indent: -1em;
         line-height: 17px;
     }
     .checked-list .bullet::before {
         color: transparent;
         display: inline-block;
         position:relative;
         height: 0.3em;
         width: 0.8em;
         content: '';
         left: -16px;
         bottom: 3px;
         border-bottom: 1px solid #e50914;
         border-left: 1px solid #e50914;
         transform: rotate(-45deg);
     }
     .signIn-btn{
         margin: 18px 3% 0;
        padding: 8px 16px;
        font-weight: 700;
        line-height: normal;
        color: var(--main-dark);
        font-size: 18px;
        right: 0;
        position: absolute;
        cursor:pointer;
        &:hover {
            text-decoration: underline;
        }

     }
`

const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 20%;
    transform: translate(-50%,-50%);
    margin-left: 0;
    @media(min-width: 600px) {
        left: 8%;
    }
`