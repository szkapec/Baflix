import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';
import {StyledAll} from './StyleIndexSlider.css';
import AppContext from '../../../context';
import movies from '../../../assets/Glosss.m4a';

export default class IndexSlider extends Component {

    state = {
      info: '',
      cart: [],
    }



    render() {
      const params = {

        slidesPerGroup: 2,
        slidesPerView: 2,
        pagination: {
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          // when window width is <= 499px
          499: {
              slidesPerView: 3,
              spaceBetweenSlides: 30
          },
          // when window width is <= 999px
          699: {
              slidesPerView: 4,
              spaceBetweenSlides: 40
          },
          999: {
              slidesPerView: 6,
              spaceBetweenSlides: 40
          },
      },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        },
        spaceBetween: 10
    }


 
     const {baflix, picture, News} = this.props;
    let audio = new Audio(movies);
      return(
        <>
    
        <StyledAll className="containerFilms">
         {baflix&&<h1>Baflix</h1>}
          <h2>{!News?this.props.description:'Nowe filmy na Baflix!'}</h2>
            
            <Swiper {...params} className="swiper-container">
              {picture&&picture.map(item => {
                  return <div key={item.id} className="swiper-slide">
                    
                    <img src={item.img} alt={item.alt}/>
                    <span className="B_absolute">B</span>
                    <span className="description_absolute">{item.alt}</span>
                    <span className="opacity"> 
                            <span alt={item.alt} className="relative"><Link to={'/film/'+item.id}><i className="fas fa-play"></i></Link></span>
                         

                            <AppContext.Consumer>
                                  {(context) => (
                                      <>
                                        <span value={item.alt}  className="relative" onClick={()=> {context.addCart(item) }}>
                                          <i className="fas fa-plus-square"></i>
                                        </span> 
                                        <span value={item.alt} className="relative" onClick={()=> {
                                          context.addLike(item);
                                          audio.play() }}>
                                          <i className="fas fa-thumbs-up"></i>
                                        </span>
                                        <span value={item.alt} className="relative" onClick={()=> {context.addHeart(item) }}>
                                          <i className="far fa-heart"></i>
                                        </span>

                                      </>
                                      )}
                            </AppContext.Consumer>
                    </span>
              
                  </div>
              })}
            </Swiper>
            
      </StyledAll>
       
      </>
      )
    }
    }

