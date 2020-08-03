import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span className="footer-span">Jakieś pytania? Zadzwoń <Link to="/">888-888-888</Link> </span>
                <div className="footer-columns">
                    <ul>
                        <li><Link to="/browse">FAQ</Link></li>
                        <li><Link to="/browse">Inwestorzy</Link></li>
                        <li><Link to="/browse">Często zadawane pytania</Link></li>
                        <li><Link to="/browse">Jak oglądać?</Link></li>
                        <li><Link to="/browse">Informacje o Baflix</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/browse">Centrum pomocy</Link></li>
                        <li><Link to="/browse">Warunki</Link></li>
                        <li><Link to="/browse">Warunki korzystania</Link></li>
                        <li><Link to="/browse">Kontakt</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/browse">Konto</Link></li>
                        <li><Link to="/browse">Karty</Link></li>
                        <li><Link to="/browse">Prywatność</Link></li>
                        <li><Link to="/browse">Test prędkości</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/browse">Media center</Link></li>
                        <li><Link to="/browse">Kup karty podarunkowe</Link></li>
                        <li><Link to="/browse">Pliki cookie</Link></li>
                        <li><Link to="/browse">Informacje prawne</Link></li>
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