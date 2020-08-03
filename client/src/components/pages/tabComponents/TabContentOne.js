import React, { Component } from 'react'
import images from '../../../assets/images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from './Button.css';

import {Link} from 'react-router-dom';

 class TabContentOne extends Component {
    render() {
        return (
            <TabContentContainer>
                <div className="containers">
                    <div className="tab-content">
                        <div>
                            <span className="title" style={{marginBottom: '2rem'}}>Jeśli zdecydujesz, że Baflix nie jest dla Ciebie - nie ma problemu, bez problemu anulujesz</span>
                            <br></br>
                            <Link to="/choose-plan">
                            <Button style={{marginTop: '2rem'}}>Spróbuj teraz</Button>
                            </Link>
                        </div>
                        <img src={images} alt="tab1"/>
                    </div>
                </div>
            </TabContentContainer>
        )
    }
}
export default TabContentOne;



const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    line-height: 30px;
    .containers {
        margin: 0 10%;
    }
    img {
        width: 200px;
        margin: 0 auto;
        @media(min-width: 960px){
            width: 250px;
        }
   
    }
    .tab-content {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 32px;
        align-items: center;
        font-size: 32px;
        padding: 32px;
        color: white;
        @media(max-width: 960px){
            grid-template-columns: 100%;
           text-align: center;
           padding-left: 10px;
           padding-right: 10px;
        }
      
    }

    .title {
        margin-top: 32px; 
      
        @media(max-width: 1440px){
            font-size: 20px;
            line-height: 1;
        }
    
    }
`