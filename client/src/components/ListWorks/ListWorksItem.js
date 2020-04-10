import React, { Component } from 'react';
import { TiEdit,TiTrash,TiArrowForwardOutline } from "react-icons/ti";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class ListWorksItem extends Component {


    state = {
        poTerminie: false,
        dzisiajWykonac: false,
        wykonaćJutro: false,
        wykonacZaDwaDni: false,
    }


    render() {
        const {item, pr, data} = this.props;
        console.log(item)
      
        let change = () => {
           console.log(item)
            if(typeof item === "string"){
                console.log(item)
                let newItem = item;
                return newItem;
            }
            return;
        };

   
        let howManyDay = () => {
            let podany = item.date?item.date:data;
            console.log(podany, 'podany?')
            let dzisiaj = new Date().toISOString().slice(0,10);
            let podanyMiesiac = parseInt(podany.substr(5,2)) 
            let dzisiajMiesiac = parseInt(dzisiaj.substr(5,2)) 
            
            let podanyDzien = parseInt(podany.substr(8,2))
            let dzisiajDzien = parseInt(dzisiaj.substr(8,2))

            console.log(dzisiajDzien, 'dzisiaj dzien')
            console.log(podanyDzien, 'podanyDzien')
            if(podanyMiesiac<=dzisiajMiesiac) {
                if(podanyDzien<dzisiajDzien){
                    this.state.poTerminie = true;
                    return <StyledH5>Już po terminie!</StyledH5>
                }
                else if(podanyDzien===dzisiajDzien){
                   this.state.dzisiajWykonac = true;
                    return <StyledH5>Do dzisiaj czas wykonania!</StyledH5>
                }
                else if(podanyDzien===dzisiajDzien+1){
                    this.state.wykonaćJutro = true;
                    return <StyledH5>Jeden dzien do wykonania</StyledH5>
                }
                else if(podanyDzien===dzisiajDzien+2){
                    
                    return <StyledH5>Dwa dni do wykonania</StyledH5>
                }
                

            }
            else if(dzisiajMiesiac>=podanyMiesiac) {
                console.log('to dopiero bedzie')
            }
            
            
        }

        howManyDay();
        return (
           
            <div>
                <StyledUl priorytet={item.priorytet} poTerminie={this.state.poTerminie} dzisiaj={this.state.dzisiajWykonac} jutro={this.state.wykonaćJutro}>
                    <li>
                        {item.description} {change()}
                        <br></br>
                        <span style={{color:'black'}}> Wykonać do - {item.date?item.date:data}</span>
                            
                        {item.description? (
                        <StyledContainer >
                            <StyledLink><span  style={{textDecoration:'none',color:'black', }}  onClick={() => {this.props.deleteExercise(this.props.item._id); }}><span>Wykonane<TiArrowForwardOutline size="20" style={{marginLeft: '5px'}}></TiArrowForwardOutline></span></span></StyledLink>
                            <StyledLink><span  style={{textDecoration:'none',color:'black', }}  onClick={() => {this.props.deleteExercise(this.props.item._id); }}><span>usuń<TiTrash size='20' style={{marginLeft: '5px'}}></TiTrash></span></span></StyledLink>    
                        </StyledContainer> 
                        ): (
                        <StyledContainer>
                            Dodano!
                        </StyledContainer> 
                        )}
                         {howManyDay()}
                    </li>
            </StyledUl>
            </div>
        );
    }
}

const StyledH5 = styled.h5`
    font-weight:700;
    color: black;
`



const StyledContainer = styled.div`
    margin: 10px;
    font-weight: 700;
    float: right;
    cursor: pointer;
`;

const StyledSpan1 = styled.span`
    float: right;
`;
const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(2,1fr); */
    background-color: ${({poTerminie,dzisiaj,jutro}) => poTerminie?'red':dzisiaj?'yellow': jutro ? '#2980b9' : 'white'};
    font-size: 12px;
    margin: 20px 5%;
    width: 90%;
    min-height: 50px;
    border: ${({priorytet}) => priorytet?"1px solid red":"1px solid black"};
    color: ${({priorytet}) => priorytet?"red":"black"};
    list-style: none;
    padding: 0 0 0 5px;
    border-radius: 10px;
    @media(min-width: 500px){
        font-size: 14px;
        margin: 20px 10%;
        width: 80%
    }
    @media(min-width:800px){
        width: 650px;
        margin: 20px auto;
        font-size: 16px;
        li{
        margin: 10px;
    }
    li{
        margin: 5px 0 0 5px;
    }
    }

`;

const StyledLink = styled.span`
text-align:center;
padding: 5px;

`;