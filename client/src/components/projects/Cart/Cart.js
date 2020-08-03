import React from 'react'
import AppContext from '../../../context';
import styled from 'styled-components';
import image from '../../../assets/baflixprzyciety.png';
import {Link} from 'react-router-dom';
export default function Cart(props) {
    

    return (
        <>
         <Image alt={image} className="img-baflix" src={image}></Image>
        <StyledAll>
           
            <AppContext.Consumer>
                {(context) => {
                   return <div key={context}>
                       
                            

                            {context.cart.length===0 ? null : <h2>Moja lista filmów i seriali </h2>}
                            {context.cart.length===0&&context.heart.length===0&&context.like.length===0 ? <div><h2>Moja lista filmów i seriali</h2>Nie masz dodanych filmów i seriali do obejrzenia</div> : null}
                       
                       
                      


                            {context.cart&&context.cart.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative">
                                        <Link to={'/film/'+item.id}>
                                            <i className="fas fa-play"></i>
                                        </Link>
                                        <span onClick={()=> {
                                          context.removeCart(item);
                                           }}><i className="fas fa-trash-alt"></i></span>
                                        </span>
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {(context) => { return context.like.length!==0 && <div key={context}>
                            {context.like.length===0 ? null : <h2>Polubione filmy i seriale </h2>}
                            {context.like&&context.like.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative">
                                        <Link to={'/film/'+item.id}>
                                            <i className="fas fa-play"></i>
                                        </Link>
                                        <span onClick={()=> {
                                          context.removeLike(item);
                                           }}><i className="fas fa-trash-alt"></i>
                                           </span>
                                        </span>
                                        
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {(context) => {
                   return context.heart.length!==0 && <div key={context}>
                            {context.heart.length===0 ? null : <h2>Ulubione</h2>}
                            {context.heart&&context.heart.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative">
                                        <Link to={'/film/'+item.id}>
                                            <i className="fas fa-play"></i>
                                        </Link>
                                        <span onClick={()=> {
                                          context.removeHeart(item);
                                           }}><i className="fas fa-trash-alt"></i>
                                           </span>
                                        </span>
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            
        </StyledAll>
        </>
    )
  

}
const Image = styled.img`
        width: 120px;
        height: 60px;
        margin:100px 100px 0px;
`

const StyledAll = styled.div`
    color: white;
    margin-top: 60px;
    margin-left: 10px;

    .container-img {
        position: relative;
    }

    .relative { 
  
        position: absolute;
        top: 10px;
        left: 40px;
        margin-bottom: 30px;
        margin-top: 30px;
        svg {
            color: red;
            width: 20px;
            height: 20px;
            margin-right: 20px;
            @media(min-width:1000px) {
                height: 40px;
            }
            :hover {
                color: #c0392b;
            }
        }
    }
    .img-film {
        width: 270px;
        height:150px;
        margin: 20px auto;
        color: black;
       
    }
    h2 {
        margin: 20px 0;
    }

    @media(min-width: 400px){
        margin-left: 60px;

        .img-film {
        width: 300px;
        margin-bottom: 40px;
        }
    }
    @media(min-width: 700px){
        margin-left: 60px;

        .img-film {
        width: 400px;
        height: 240px;
        margin-bottom: 50px
        }
    }
    @media(min-width: 1000px){
        .img-film {
            width: 500px;
            height: 340px;
            margin-bottom: 50px
        }
        img {
            width: 100px;
        }
    }
`