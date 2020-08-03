import React, { Component } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppContext from '../../../context';
import p640 from '../../../assets/640.jpg'
class OneSection extends Component {

    state = {
        value: 'Wybor'
    }


    changeSelect = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render() {

        

        return (
            <StyledContainer>

                <br/>
                <StyledSecionOne>
                <span>Filmy</span>
                    <AppContext.Consumer>
                        {(context) => (
                            <select onChange={context.addItems} className="items" >
                                <option value="Wybor">Gatunki</option>
                                <option value="Komedia">Komedia</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Horror">Horror</option>
                                <option value="Dramat">Dramat</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                            </select>
                        )}
                    </AppContext.Consumer>
                </StyledSecionOne>
                <StyledDescriptionOne>jak zostałem</StyledDescriptionOne>
                <StyledDescriptionBig>
                    GANGSTERem
                </StyledDescriptionBig>
                <StyledDescriptionOne history>Historia prawdziwa</StyledDescriptionOne>
                <StyledDescriptionTwo>
                    <span>Top 10</span> <span>Nr 10 w Polsce dzisiaj</span>
                    <div>Ambitny gangster pnie się po szczeblach kariery w warszawskim półświatku i staje przed wielką szansą</div>
                </StyledDescriptionTwo>
                <StyledButton one><i className="far fa-play-circle"></i><NavLink exact to='/watch'>oglądaj</NavLink></StyledButton>
                <StyledButton two><i className="fas fa-info"></i><a href="https://www.filmweb.pl/film/Jak+zosta%C5%82em+gangsterem.+Historia+prawdziwa-2019-835083">Wiecej informacji</a></StyledButton>
            </StyledContainer>
        )
    }
}
export default OneSection;

const StyledButton = styled.button`
    border: none;
    padding: 5px 15px;
    margin: 20px 10px;
    background-color: ${props => props.one ? "#ecf0f1" : "#bdc3c7"};
    border-radius: 2px;
    box-shadow: 0px 5px 15px -5px rgba(0,0,0,0.75);
    cursor: pointer;
    font-size: 14px;
    svg {
        margin-right: 5px;
    }
    a {
        color: black;
    }
`

const StyledDescriptionOne = styled.div`
    padding: 10px 0 10px 10px;
    font-family: 'Rokkitt', serif;
    color: white;
    font-size: 26px;
    margin: ${props => props.history ? "0px 10px 30px 10px" : "20px 10px 0px 10px"};
    
`
const StyledDescriptionBig = styled.div`
    padding: 0 25px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 38px;
    color: white;
    font-weight: 900;
`

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(${p640});
    overflow: hidden;
    background-size: cover;
    z-index: 1;
    @media(min-width: 520px) {
        background-image: url('https://cdn.pixabay.com/photo/2019/04/14/17/18/gun-4127187_960_720.jpg');
    }
`
const StyledDescriptionTwo = styled.div`
    color:white;
    font-weight: 700;
    font-size: 18px;
    span:nth-child(1) {
        border: 4px solid white;
        padding: 4px 5px;
        margin: 20px 20px;
        font-size:16px;
    }
    div {
        font-weight: 300;
        font-family: 'MuseoModerno', cursive;
        margin: 30px 15px;

    }
`

const StyledSecionOne = styled.div`
    margin: 60px 20px 30px 20px;
    color: white;
    font-family: 'MuseoModerno', cursive;
    font-size: 20px;
    span{ 
        padding: 20px 20px;
    }
    select {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .4em 1.2em .3em .6em;
    width: 40%;
    max-width: 330px; 
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
.select-css::-ms-expand {
    display: none;
}
.select-css:hover {
    border-color: #888;
}
.select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    color: #222; 
    outline: none;
}
.select-css option {
    font-weight:normal;
}
    }
`