import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default class LoginFooter extends Component {
    render() {
        return (
            <FooterContainer>
                <span className="footer-span">Questions? Call <Link to="/">1-888-888-888</Link> </span>
                <div className="footer-columns">
                    <ul>
                        <li><Link to="/">Gift cad Teams</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="/">Terms of use</Link></li>
                      
                    </ul>
                    <ul>
                        <li><Link to="/">Privacy Statement</Link></li>
                      
                    </ul>
                    <ul>
                        <li><Link to="/">Media center</Link></li>
                        <li><Link to="/">Buy gift Cards</Link></li>
                        <li><Link to="/">Cookie Preferences</Link></li>
                        <li><Link to="/">Legal Notices</Link></li>
                    </ul>
                    
                     </div>
            </FooterContainer>
        )
    }
}




const FooterContainer = styled.footer`
    justify-content: center;
    padding-top: 100px;
    margin-top: 100px;
    position: relative;
    z-index: 1;
    background: var(--main-deep-dark);
    padding-top: 100px;
    padding-bottom: 30px;
    color: #999;
  
    .footer-columns {
        width: 70%;
        margin: 16px auto 0;
        font-size: 15px;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        @media(max-width:960px){
            grid-template-columns: repeat(2,1fr);
            font-size: 12px;
        }
 
    }

    ul li {
        list-style: none;
        line-height: 2.5;
    }
    a {
        color: #999;
        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .footer-span {
        margin-left: 18%;
        font-size: 18px;
        @media(max-width:960px){
            font-size: 14px;
           a {
            text-decoration:underline;
           }
        }
    }

`