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
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Relacje z inwestorami</Link></li>
                        <li><Link to="/">Często zadawane pytania</Link></li>
                        <li><Link to="/">Jak oglądać?</Link></li>
                        <li><Link to="/">Informacje o firmie</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Centrum pomocy</Link></li>
                        <li><Link to="/">Praca</Link></li>
                        <li><Link to="/">Warunki korzystania</Link></li>
                        <li><Link to="/">Skontaktuj się z nami</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Konto</Link></li>
                        <li><Link to="/">Karty podarunkowe</Link></li>
                        <li><Link to="/">Prywatność</Link></li>
                        <li><Link to="/">Test prędkości</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Media center</Link></li>
                        <li><Link to="/">Kup karty podarunkowe</Link></li>
                        <li><Link to="/">Ustawienia plików cookie</Link></li>
                        <li><Link to="/">Informacje prawne</Link></li>
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