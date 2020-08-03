import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppContext from '../../../context';
import movies from '../../../assets/Glosss.m4a';
 
export default class SliderFilms extends Component {

    state = {
        info: '',
      }
  
      render() {
        // const {id,img,time, alt, presage, seasons,type} = this.props
        const {picture} = this.props
        const params = {
          slidesPerGroup: 1,
          slidesPerView: 1,
          pagination: {
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
           
        },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          spaceBetween: 10
      }
      let audio = new Audio(movies);
        return(
          <>
            <StyledAll className="one">
              <h2>Top filmy</h2>
                <Swiper {...params} className="swiper-containers">
                      {picture&&picture.map((item,id)=> {
                        return <div key={id} className="swiper-slides">
                            <StyledTop>
                                Top {item.top}
                            </StyledTop>
                            <StyledText>
                              <div className="">
                              <StyledNameSeries>{item.alt}</StyledNameSeries>
                                <StyledTitle>
                                  {item.text}
                                </StyledTitle>
                              </div>
                              
                              </StyledText>
                            <Description>
                              <div>Gatunek: <b>{item.type}</b></div>
                              <div> {item.seazon===0?"Film " : "Liczba sezonów:"} <b>{item.seazon!==0?item.seazon:item.time}</b></div>
                              <div>Triller: <button><a href={item.triller}>triller</a></button> </div>
                            </Description>
                             
                            <img className="pictures" src={item.img} alt={item.alt}/>
                            <div className="absolut">
                              <Link to={'film/'+item.id}><i className="fas fa-play"></i></Link>
                                  
                                  <AppContext.Consumer>
                                    {(context) => {
                                     return <span value={item.alt}  className="relative" onClick={()=> {
                                       context.addCart(item)
                                       audio.play() }}>
                                          <i className="fas fa-plus-square"></i>
                                        </span> 
                                    }}
                                  </AppContext.Consumer>
                                  
                            </div>
                        </div>
                      })}
                </Swiper>
            </StyledAll>
         
        </>
        )
      }
    }

const StyledTop = styled.div`
  position:absolute;
  right: 10px;
  top: 30px;
  color:white;
  padding: 5px 10px;
  font-weight: 700;
  border: 2px solid white;
`
const StyledText = styled.div`
  color: white;
  position: absolute;
  top: 50px;
  left: 10px;
  right: 10px;
  @media(min-width: 700px) {
    width: 70%;
    font-size: 18px;
  }
  @media(min-width: 1200px) {
    width: 50%;
    font-size: 20px;
  }
`

const StyledNameSeries = styled.div`
  font-size: 32px;
  color: red;
  font-family: 'MuseoModerno',cursive;
  font-weight: 700;
  letter-spacing: 6px;
  margin-bottom: 30px;
  margin-left: 30px;
  text-decoration: underline;
  @media(min-width: 700px) {
    font-size: 38px;
  }
  @media(min-width: 1200px) {
    font-size: 42px;
  }
`

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin: 10px auto 30px;
  letter-spacing: 2.5px;
  @media(min-width: 700px) {
    font-size: 18px;
  }
  @media(min-width: 1200px) {
    font-size: 20px;
  }
`
const Description = styled.div`
position: absolute;
bottom: 100px;
left: 0px;
letter-spacing: 2.5px;
color: white;
margin: 30px 30px;

  div{
    margin-top: 15px;
  }
  button {
  background-color: white;
  color: black;
  border: 2px solid #555555;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 15px;
  transition-duration: 0.4s;
  cursor: pointer;
  a{
    color:black;
    text-decoration: none;
  }
  }

  button:hover {
  background-color: #555555;
  a {
  color: white;
  }
}
`
    
    
    const StyledAll = styled.div`
    color: white;
    position: relative;
    margin-bottom: 10px;
    h2 {
      font-size: 24px;
      margin-left: 20px;
      color: white;
      @media(min-width: 600px) {
        font-size: 28px;
      }
    }
    .pictures {
      width: 100vw;
      height: 80vh;
     padding-top: 30px;


    }
    .absolut {
      position: absolute;
      bottom: 10px;
      opacity: 1;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      svg {
        height: 50px;
        width: 50px;
        border: 2px solid rgba(197,184,184,0.4);
        background-color: rgba(197,184,184,0.5);
        margin: 10px;
        padding: 10px;
        border-radius: 50%;
        @media(min-width: 700px) {
          margin: 30px;
          padding: 10px;
        }
        :hover {
          border: 2px solid rgba(197,184,184,0.7);
          background-color: rgba(197,184,184,0.8);
        }
      }
      a { 
        text-decoration: none;
        color: white;

      }
      :hover{
          animation-name:opacity;
      }
    }

`

