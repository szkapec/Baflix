import React from 'react'
import AppContext from '../../../context';
import styled from 'styled-components';
import image from '../../../assets/baflixprzyciety.png';
import {Link} from 'react-router-dom';
export default function Cart(props) {
    

    return (
        <StyledAll>
            <AppContext.Consumer>
                {(context) => {
                   return <div key={context}>
                       <img alt={image} className="img-baflix" src={image}></img>
                            

                            {!context.cart.length===0 ? null : <h2>Moja lista filmów i seriali </h2>}
                            {context.cart.length===0 ? <div>Nie masz dodanych filmów i seriali do obejrzenia</div> : null}


                            {context.cart&&context.cart.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative"><Link to={'/film/'+item.id}><i className="fas fa-play"></i></Link></span>
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {(context) => {
                   return <div key={context}>
                            <img alt={image} style={{opacity:'0'}} className="img-baflix" src={image}></img>
                            {!context.like.length===0 ? null : <h2>Polubione filmy i seriale </h2>}
                            {context.like.length===0 ? <div>Brak polubień</div> : null}
                            {context.like&&context.like.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative"><Link to={'/film/'+item.id}><i className="fas fa-play"></i></Link></span>
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {(context) => {
                   return <div key={context}>
                            <img alt={image} style={{opacity:'0'}} className="img-baflix" src={image}></img>
                            {!context.heart.length===0 ? null : <h2>Ulubione</h2>}
                            {context.heart.length===0 ? <div>Brak ulubionych</div> : null}
                            {context.heart&&context.heart.map(item => {
                             return <div key={item.id}>
                                <div>Tytuł: {item.alt}</div>
                                <div className="container-img">
                                    <img alt={item.img} className="img-film" src={item.img}></img>
                                    <span alt={item.alt} className="relative"><Link to={'/film/'+item.id}><i className="fas fa-play"></i></Link></span>
                                </div>
                            </div>
                            })}
                    </div>
                }}
            </AppContext.Consumer>
            
        </StyledAll>
    )
  

}


const StyledAll = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media(min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media(min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; } 


    color: white;
    margin-top: 60px;
    margin-left: 10px;


    .container-img {
        position: relative;
    }
    .img-baflix {
        width: 120px;
        height: 60px;
        margin:20px auto 40px;
      
    }
    .relative { 
  
        position: absolute;
        top: 30px;
        left: 40px;
        margin-bottom: 30px;
        margin-top: 30px;
        svg {
            color: red;
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
        width: 300px;
        height: 140px;
        margin-bottom: 50px
        }
    }
`