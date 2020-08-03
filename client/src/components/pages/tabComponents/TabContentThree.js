import React from 'react'
import styled from 'styled-components';
import {Button} from './Button.css';
import {Icon} from 'react-icons-kit';
import {cross} from 'react-icons-kit/icomoon/cross';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import {Link} from 'react-router-dom';

export default function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span className="title">Wybierz jeden plan i oglądaj wszystko na Baflix</span>
                    <Link className="btn" to="/choose-plan">
                        <Button>Spróbuj teraz</Button>
                    </Link>
                </div>
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Postawowy</th>
                                <th>Standardowy</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cena za miesiąc</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ilość urządzeń</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Oglądaj na swoim laptopie, telewizorze, telefonie i tablecie</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Oglądaj na swoim telewizorze, telefonie i tablecie</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Anuluj w dowolnym momencie</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}



const TabContainer = styled.div`
    background: var(--main-deep-dark);
    margin: 0 auto;
    color: white;

    .tab-top-content {
        padding: 48px 0 0;
        @media(max-width: 1350px){
            text-align: center;
            color: white;
            font-size: 15px;
        }
    
    }
    .tab-content {
        margin: 0 1%;
        @media(min-width: 900px) {
            margin: 0 15%;
        }
        padding-bottom: 48px 0 0;
        .title {
            text-align: left;
            margin: 0 5%;
            font-size: 20px;
            line-height: 30px;
        @media(min-width: 600px) {
            margin: 0 11%;
        }
        @media(min-width: 1440px) {
            line-height: 30px;
            font-size: 32px;
            }
        }
    }
    span {
        grid-column: 3/9;
        font-size: 20px;
        @media(max-width: 1350px){
            grid-column: 1/-1;
            font-size: 15px;
        }

    }
    .btn {
        button {
            min-width: 160px;
            margin: 10px -50px;
        }
        grid-column: 9/12;
        @media(max-width: 960px){
            grid-column: 1/-1;
            margin-left: 30%;
            margin-right: 30%;
        }
    }

    .tab-bottom-content {
     margin: 32px auto;   
    }
    table {
        width: 100%;
        margin-top: 32px;
        border-collapse: collapse;
    }
    table thead th { 
        text-transform: uppercase;
        text-align: center;
    }
    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    table tbody tr td {
        color: #999;
        padding: 14px 18px;
        text-align: center;
        @media(max-width: 960px){
            font-size: 12px;
            padding: 2px 5px;
        }

    }
    table tbody tr td:first-child {
        text-align: left;
    }
    table tbody tr:nth-child(even) {
        background: #222;
    }
    .title {
        margin-top: 32px; 
        @media(max-width: 960px){
            font-size: 20px;
            line-height: 1;
        }

    }
`