import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppContext from '../../../context';
import movies from '../../../assets/Glosss.m4a';
 
export default class HightSlider extends Component {

    state = {
        info: '',
      }
  
      render() {
        // const {id,img,time, alt, presage, seasons,type} = this.props
        const {picture} = this.props
        const params = {
          slidesPerGroup: 2,
          slidesPerView: 2,
          pagination: {
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            499: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            699: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            999: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
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
              <h2>Najwyżej oceniane</h2>
                <Swiper {...params} className="swiper-containers">
                      {picture&&picture.map((item,id)=> {
                        return <div key={id} className="swiper-slides">
                            <StyledSpan className="opacity">
                            <span className="B_absolute">B</span>
                            <div className="description">{item.alt}</div>
                            <br></br>
                            <div className="red">
                              <span className="news">Nowość </span>
                              <span className="sixteen">16+</span>
                              <span className="title">{item.time}</span>
                             </div>
                            <br></br>
                              <div> <span className="seasons">Sezonów <b>{item.seasons}</b></span> <b className="seasons"> || Typ {item.type}</b></div>
                             
                            </StyledSpan>
                            <img src={item.img} alt={item.alt}/>
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
    const StyledSpan = styled.span`
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      opacity: 0;
      color: red;
      animation-duration:3s;
      svg {
        bottom: 50px;
        left: 100px;
      }

      .news {
        color: red;
      }
      .red { 
        color: red;
      }
      .sixteen {
        border: 1px solid red;
        padding: 1px 3px;
        margin: 10px;
      }
      .description {
        color: green;
      }
    `
    
    const StyledAll = styled.div`
       h2 {
      margin-left: 20px;
      color: white;
    }
      position:relative;
    
      .B_absolute {
          position:absolute;
          top: 0px;
          left: 10px;
          color: #c0392b;
          font-weight: 900;
          font-size: 26px;
          @media(min-width: 680px) {
            top: 10px;
            font-size: 30px;
          }
          @media(min-width: 1500px) {
            top: 15px;
            font-size: 29px;
          }
        }
    .absolut {
      position: absolute;
      bottom: 50px;
      opacity: 0;
      transition: 1000ms all;
      color: white;
      svg {
        height: 50px;
        width: 50px;
        border: 2px solid rgba(197,184,184,0.4);
        background-color: rgba(197,184,184,0.5);
        margin: 30px;
        padding: 10px;
        border-radius: 50%;
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

    .swiper-containers {

      width: 100%;
      height: 100%;

    }

    .swiper-slides {
      position: relative;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;
      font-weight: 700;
      transition: 500ms all;
      
      img{
        height: 600px;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: black;
      }
      :hover {
        
       .opacity{
          opacity:1;
          animation-name:opacity;
          z-index: 999;
       }
       
        opacity: 1;
        transform: scale(1.1);

        div{
          opacity: 1;
          
        }
        .seasons {
          color: green;
        }
      }
    }





    @media(min-width:500px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 15px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -15px;
      }
    }

    @media(min-width:600px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 15px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -15px;
      }
    }

    @media(min-width:700px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 10px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -10px;
      }
    }
    @media(min-width:800px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 12px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -12px;
      }
    }
    @media(min-width:900px) {
      .swiper-slides:hover {
    }
    }
    @media(min-width:1000px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 10px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -10px;
      }

  }

    @media(min-width:1300px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 15px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -15px;
      }
    }
    @media(min-width:1500px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 20px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -20px;
      }
    }
    @media(min-width:1700px) {
      .swiper-slides:nth-child(1):hover {
        margin: 0 25px;
      }
      .swiper-slides:nth-child(10):hover {
        margin: 0 -25px;
      }
    }

    }
    
@keyframes opacity
{
0% { opacity: 0; }
100% { opacity: 1;}
}


`

