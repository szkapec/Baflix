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
                    <span className="title">Watch TV shows and movies anytime, anywhere - prersonalized for you.</span>
                    <Link className="btn" to="/choose-plan">
                    <Button>try it now</Button>
                    </Link>
                </div>
                <div className="tab-bottom-content">
                    <div>
                        <img className="tab-img" src={tabTv} alt="tabTv"/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, playstation, Xbox, Chomecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img className="tab-img" src={tablet} alt="tablet"/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, playstation, Xbox, Chomecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div >
                        <img className="tab-img" src={mac} alt="mac"/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, playstation, Xbox, Chomecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                </div>
                
                </div>
        </TabContainer>
    )
}




const TabContainer = styled.div`
    background: var(--main-deep-dark);
    color: white;
    .tab-content {
        margin: 0 15%;
        .title {
            font-size: 32px;
            @media(max-width: 1440px) {
                font-size: 20px;
            line-height: 1;
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
            line-height: 1;
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