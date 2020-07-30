/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import {SliderContent, Slide, Arrow, Dots} from './SliderContent'
import styled from 'styled-components';


const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const SliderFilms = props => {
  const { slides } = props
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    id: 0,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition, id } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    let interval = null

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000)
    }

    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }
  const nextSlide = () =>
    setState({
      ...state,
      id:  id>2?0:id+1,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,

    })
  const prevSlide = () =>
    setState({
      id: id<0?3:id-1,
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        key={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => {
          return <Slide width={getWidth()} key={_slide.link + i + _slide} content={_slide.link} />
      })}
      </SliderContent>
      <StyledTop>
          Top {props.slides[activeSlide].top}
      </StyledTop>
      <StyledText>
       <div className="">

       <StyledNameSeries>{props.slides[activeSlide].alt}</StyledNameSeries>

        <StyledTitle>
          {props.slides[activeSlide].text}
        </StyledTitle>
        
          
       </div>
       
      </StyledText>
      
      <Description>
            <div>Gatunek: <b>{props.slides[activeSlide].type}</b></div>
            <div> Liczba sezonów: <b>{props.slides[activeSlide].seazon}</b></div>
            <div>Triller: <button><a href={props.slides[activeSlide].triller}>triller</a></button> </div>
          </Description>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  )
}



const SliderCSS = css`
  z-index:0;
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`
const StyledTop = styled.div`
  position:absolute;
  right: 10px;
  top: 10px;
  color:white;
  padding: 5px 10px;
  font-weight: 700;
  border: 2px solid white;
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


export default SliderFilms
