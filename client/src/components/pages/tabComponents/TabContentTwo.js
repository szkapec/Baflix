import React from 'react'
import {Button} from './Button.css';
import styled from 'styled-components';
import tabTv from '../../../assets/images/tab-tv.png';
import tablet from '../../../assets/images/tab-tablet.png';
import mac from '../../../assets/images/tab-macbook.png';
import {Link} from 'react-router-dom';

export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span className="title">Oglądaj programy telewizyjne i filmy w dowolnym miejscu i czasie - spersonalizowane dla Ciebie</span>
                    <Link className="btn" to="/choose-plan">
                    <Button>Spróbuj teraz</Button>
                    </Link>
                </div>
                <div className="tab-bottom-content">
                    <div>
                        <img className="tab-img" src={tabTv} alt="tabTv"/>
                        <h3>Oglądaj na telewizorze</h3>
                        <p>Telewizory Smart TV, playstation, Xbox, Chromecast, Apple TV, Blu-ray.</p>
                    </div>
                    <div>
                        <img className="tab-img" src={tablet} alt="tablet"/>
                        <h3>Oglądaj na tablecie</h3>
                        <p>Telewizory Smart TV, playstation, Xbox, Chromecast, Apple TV, Blu-ray. </p>
                    </div>
                    <div >
                        <img className="tab-img" src={mac} alt="mac"/>
                        <h3>Oglądaj na telefonie</h3>
                        <p>Telewizory Smart TV, playstation, Xbox, Chromecast, Apple TV, Blu-ray. </p>
                    </div>
                </div>
                
                </div>
        </TabContainer>
    )
}




const TabContainer = styled.div`
    background: var(--main-deep-dark);
    color: white;
    line-height: 30px;
    button{
        min-width: 160px;
        margin: 10px -50px;
    }
    .tab-content {
        line-height: 30px;
        margin: 0 auto;
        .title {
            margin: 0 11%;
            font-size: 20px;
            line-height: 30px;
        @media(min-width: 1440px) {
            line-height: 30px;
            font-size: 32px;
            }
        }
    }
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        justify-content: center;
        align-items: center;
        padding: 38px 0;
        @media(max-width: 1440px) {
            grid-template-columns: repeat(2,1fr);
            }
      
            @media(max-width: 960px) {
                grid-template-columns: 1fr;
              text-align: center;
              row-gap: 18px;
            }
           

    }
    span {
        grid-column: 1/8;
        @media(max-width: 960px) {
            grid-column: 1/-1;
              font-size: 18px;
            }
     
        margin-top: 32px; 
        @media(max-width: 1440px) {
            font-size: 20px;
            }

    }
    .btn {
        grid-column: 10/12;
        @media(max-width: 960px) {
            grid-column: 1/-1;
              margin-left: 30%;
              margin-right: 30%;
            }

    }
    .tab-img {
        width: 290px;
    }
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 32px;
        text-align: center;
        margin-top: 30px;
        color:white;
        @media(max-width: 960px) {
            grid-template-columns: 1fr;
            }

    }
    h3 {
        margin: 8px 0;
    }
    p {
        color: var(--main-grey);
    }
    .title {
        margin-top: 32px; 
        @media(max-width: 1440px) {
            font-size: 20px;
            line-height: 1;
            }
    }
`