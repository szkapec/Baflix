import styled from 'styled-components';

export const StyledAll = styled.div`
.B_absolute {
  position:absolute;
  top: 20px;
  left: 10px;
  color: #c0392b;
  font-weight: 900;
  font-size: 16px;
  cursor: default;
  @media(min-width: 680px) {
    top: 10px;
    font-size: 26px;
  }
  @media(min-width: 1500px) {
    top: 15px;
    font-size: 29px;
  }
}
.description_absolute {
  position:absolute;
  bottom: 10px;
  left: 0px;
  right: 0px;
  color: #c0392b;
  font-weight: 900;
  font-size: 18px;
  text-decoration: underline;
  letter-spacing: 3px;
  cursor: default;
  font-size: 12px;
  @media(min-width: 400px) {
    font-size: 14px;
  }
  @media(min-width: 700px) {
    font-size: 16px;
  }
}
.swiper-container {
      width: 100%;
      height: auto;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      background-color: grey;
      justify-content: center;
      align-items: center;
      transition: 500ms all;
    }
    .swiper-slide img {
      width: 100%;
      height: auto;
      max-height: 172px;
    }
 
    .containerFilms {
      background-color: #000;
      color: white;
    }

    h1 {
      text-align: center;
      color: red;
      font-weight: 900;
    }
    h2 {
      font-size: 24px;
      margin-left: 20px;
      color: white;
      @media(min-width: 600px) {
        font-size: 28px;
      }
    }

    :root {
      --swiper-theme-color: rgb(55, 188, 191);
    }
    .swiper-container {
      position: relative;
      padding: 20px 0;
    }


    .swiper-slide:nth-child(1):hover {
      margin: 0 10px;
    }

    .swiper-slide:nth-child(10):hover {
      margin: 0 -10px;
    }

    @media(min-width:500px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 10px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -10px;
      }
    }

    @media(min-width:600px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 10px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -10px;
      }
    }

    @media(min-width:700px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 35px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -35px;
      }
    }
    @media(min-width:800px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 38px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -38px;
      }
    }
    @media(min-width:900px) {
      .swiper-slide:hover {
        transform: scale(1.3);
    }
    }
    @media(min-width:1000px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 25px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -25px;
      }
      .swiper-slide:hover {
        transform: scale(1.3);
    }
  }

    @media(min-width:1300px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 40px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -40px;
      }
    }
    @media(min-width:1500px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 50px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -50px;
      }
    }
    @media(min-width:1700px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 55px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -55px;
      }
    }
    @media(min-width:1900px) {
      .swiper-slide:nth-child(1):hover {
        margin: 0 60px;
      }
      .swiper-slide:nth-child(10):hover {
        margin: 0 -60px;
      }
    }
h1 {
  margin: 0;
  padding: 10px;
}
.swiper-container {
position: relative;
overflow: hidden;
padding: 30px 0;
/* szerokosc obramowania środkowego-wewnetrznego */
}
.swiper-slide {
background-color: #222f3e;
}
.swiper-slide:hover {
  transform: scale(1.1);
  z-index: 9999;
  @media(min-width: 700px){
  transform: scale(1.4);
}
}


.opacity {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0;
}

/* HOVER */
.swiper-slide:hover {
  width: 100px;
  border-radius: 5px;
  padding-top: 20px;
  /* wysokosc paska */
  .opacity{
    opacity:1;
  }
  .opacity span svg  {
    animation-duration:5s;
    animation-name:opacity;
    color: white;
}
  .opacity span svg:hover {
      color: black;
}
}


.relative {
  position: absolute;
  :nth-child(1){
    left: 20px;
    top: -2px;
    svg {
      width: 10px;
    }
 
  }
  :nth-child(2){
    left: 30%;
    top: -2px;
    svg {
      width: 10px;
    }
  }
  :nth-child(3){
    right: 30%;
    top: -2px;
    svg {
      width: 10px;
    }
  }
  :nth-child(4){
    right: 20px;
    top: -2px;
    svg {
      width: 10px;
    }
  }
}

@keyframes opacity
{
0% { opacity: 0; }
100% { opacity: 1;}
}

@media(min-width: 1500px) {
.swiper-container {
padding: 35px 0;
}
.swiper-container {
padding: 35px 0;
}
.swiper-slide:hover {
  padding-top: 25px;
}
.relative {
  :nth-child(1){
    left: 30px;
    top: 0px;
    svg {
      width: 15px;
    }
  }
  :nth-child(2){
    left: 35%;
    top: 0px;
    svg {
      width: 15px;
    }
  }
  :nth-child(3){
    right: 35%;
    top: 0px;
    svg {
      width: 15px;
    }
  }
  :nth-child(4){
    right: 30px;
    top: 0px;
    svg {
      width: 15px;
    }
  }
}
}
@media(min-width: 1800px) {
.swiper-container {
padding: 40px 0;
}
}
`
