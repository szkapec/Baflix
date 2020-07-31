import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Baflix from '../../../assets/images/baflix2.png';


export default class Film extends Component {


    state = {
        data: '',
    }

        componentDidMount() {
            axios.get(`/filmsOne/`).then(res => {
                res.data.map(item => {
                    if(item.id===this.props.match.params.id) {
                        this.setState({
                            data: item,
                        })
                    }
                })
            })
           
        }

    render() {
        const { data } = this.state;
        return (
         <StyledFirstPages>
                 <StyledImgBaflix>
                <Link to="/browse">
                    <img  src={Baflix} alt="baflix"/>
                </Link>
            </StyledImgBaflix>
             <div>
               <StyledNameMovie>{data.alt}</StyledNameMovie>
            </div>
            <StyledDescription>{data.description}</StyledDescription>
            <StyledImg>
                <img src={data.img} alt={data.alt}/>
                <span className="one"><Link to="/watch"><i className="far fa-play-circle"></i></Link></span>
                <span className="two"><a href={data.presage}><i className="fas fa-info"></i></a></span>
            </StyledImg>

            <StyledSeasonAndType>
               {data.seasons===0 ? "Czas filmu: " : "Ilość sezonów:"}  <span >{data.seasons===0 ? data.time : data.seasons}</span> <b className="block"></b> typ filmu:<span>  {data.type}</span>
            </StyledSeasonAndType>
            <div>
        
              {/* typ filmu: {data.type}
             <ResponsivePlayer></ResponsivePlayer> */}
            </div>
            
         </StyledFirstPages>
        )
    }
}


const StyledFirstPages = styled.div`
    color: white;
    padding-top: 50px;
    background-color: pink;
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`

const StyledNameMovie = styled.span`
    font-family: 'Oxygen', sans-serif;
    color: red;
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    @media(min-width: 450px){
        font-size: 30px;
    }
`

const StyledDescription = styled.div`
    width: 80%;
    margin: 30px auto 10px;
    text-align: center;
    @media(min-width: 600px) {
        text-align: left;
        width: 580px;
        margin: 30px 30px 10px;
    }
        `
const StyledImg = styled.div`
    position: relative;
    margin-left:15%;
    margin-top: 50px;
    img {
        width: 80%;
    }

    span {
        position: absolute;
        bottom: 10%;
    }
    .one {
        left: 30px;
    }
    .two {
        left: 90px;
    }
    @media(min-width: 800px) {
        width: 580px;
        margin-left: 30px;
        .one {
            svg {
                width: 40px;
                height: 40px;
                color: white;
                :hover {
                    color: #95a5a6;
                }
            }
    }
        .two {
            svg {
                margin-left: 30px;
                width: 40px;
                height: 40px;
                color: white;
                :hover {
                    color: #95a5a6;
                }
            }
        }
}
`
const StyledSeasonAndType = styled.div`
    margin-left: 30px;
    margin-top: 40px;
    span {
        color: red;
        text-transform: uppercase;
        margin: 15px 8px;
        font-size: 20px;
        border: 1px solid red;
        padding: 2px 8px;
        
    }
    .block {
        display: block;
        margin: 20px;
        @media(min-width: 390px){
            display: inline;
            margin: 10px;
        }
    }
`

const StyledImgBaflix = styled.div`
    position: relative;
    margin-left:15%;
    margin-top: 20px;
    img {
        width: 80%;
    }
    @media(min-width: 600px) {
    margin-left: 0px;
        img {
            width: 400px;
            height: 150px;
            margin: 0 auto;
        }
    }
`