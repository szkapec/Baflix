import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span className="footer-span">Questions? Call <Link to="/">1-888-888-888</Link> </span>
                <div className="footer-columns">
                    <ul>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Inwestor Rekations</Link></li>
                        <li><Link to="/">Ways to Watch</Link></li>
                        <li><Link to="/">Corporate Information</Link></li>
                        <li><Link to="/">Baflix Originals</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Tems of Use</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Account</Link></li>
                        <li><Link to="/">Redeem Gift</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Speed test</Link></li>
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
        @media(max-width: 960px){
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
        @media(max-width: 960px){
            font-size: 14px;
           a {
            text-decoration:underline;
           }
        }
      
    }

`