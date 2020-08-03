import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';
import {StyledAll} from '../SliderSmall/StyleIndexSlider.css';
import AppContext from '../../../context';

export default class SliderChoice extends Component {
    state = {
        info: '',
        value: '',
        slidesPerView: 1,
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
            499: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            },
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

        const {netflix, picture} = this.props;
        let value = this.context.value;

        let sort = (item) => {
          let values = picture&&picture.filter(item => item.type===value);
          this.state.slidesPerView = values
          console.log(values)
          if(values.length === 0) return;
          return values.map(items => (
            <div style={{width: '300px', marginRight: '5px'}} key={items.id} className="swiper-slide">
              <img src={items.img} alt={items.alt}/>
                    <span className="B_absolute">B</span>
                    <span className="description_absolute">{items.alt}</span>
                    <span className="opacity"> 
                            <span alt={items.alt} className="relative"><Link to={'/film/'+items.id}><i className="fas fa-play"></i></Link></span>
                  
                            <AppContext.Consumer>
                                  {(context) => (
                                      <>
                                        <span value={items.alt}  className="relative" onClick={()=> {context.addCart(items) }}>
                                          <i className="fas fa-plus-square"></i>
                                        </span> 
                                        <span value={items.alt} className="relative" onClick={()=> {
                                          context.addLike(items);
                                          }}>
                                          <i className="fas fa-thumbs-up"></i>
                                        </span>
                                        <span value={items.alt} className="relative" onClick={()=> {context.addHeart(items) }}>
                                          <i className="far fa-heart"></i>
                                        </span>

                                      </>
                                      )}
                            </AppContext.Consumer>
                  
                  </span>

            
         </div>
          ))
        }

        return (
          <>
        {value !== "Wybór" && (
             <StyledAll className="containerFilms">
             {netflix&&<h1>Baflix</h1>}
             {console.log(value)}
              {value !== "Wybor" ? <h2>Wyszukiwarka w serwisie Baflix: Kategoria <b>{value}</b></h2> : null}
               <Swiper {...params} className="swiper-container">
                {value!== "Wybor" && sort()}
               </Swiper>
         </StyledAll>
        )}
       
        </>
        )
      }
      }

      SliderChoice.contextType = AppContext;
