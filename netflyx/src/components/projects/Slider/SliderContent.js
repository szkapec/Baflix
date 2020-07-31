/** @jsx jsx */
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import { css, jsx } from '@emotion/core'
export const SliderContent = props => (
    <div
      css={css`
        transform: translateX(-${props.translate}px);
        transition: transform ease-out ${props.transition}s;
        height: 100%;
        width: ${props.width}px;
        display: flex;
 

      `}
    >
      {props.children}
    </div>
  )
  


export const Arrow = ({ direction, handleClick }) => (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 50%;
        ${direction === 'right' ? `right: 25px` : `left: 25px`};
        height: 50px;
        width: 50px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;
        overflow: hidden;
  
        &:hover {
          transform: scale(1.1);
        }
  
        img {
          transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  
          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === 'right' ? <img alt={direction} src={rightArrow} /> : <img alt={direction} src={leftArrow} />}
    </div>
  )
  
  
 export const Dot = ({ active }) => (
    <span
      css={css`
      
        @media(min-width: 600px){
          padding: 10px;
          margin-right: 5px;
          cursor: pointer;
          border-radius: 50%;
          background: ${active ? 'black' : 'white'};
          overflow: hidden;
        }
      `}
    />
  )
  
  export const Dots = ({ slides, activeSlide }) => (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      `}
    >
      {slides.map((slide, i) => (
        <Dot key={i+slide} active={activeSlide === i} />
      ))}
    </div>
  )
  
  
export const Slide = ({ content, width }) => {

return <div
      css={css`
        height: 100%;
        width: 100%;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
      `}
      
    />
}
    
  