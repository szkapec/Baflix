import React, { Component } from 'react';
import { TiEdit,TiTrash,TiArrowForwardOutline } from "react-icons/ti";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ListWorksItem extends Component {




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


        return (
           
            <div>
                
                <StyledUl priorytet={item.priorytet}>
                    <li>
                        {item.description} {change()}
                        <span style={{color:'black'}}> - do {item.date?item.date:data}</span>
                            
                        {item.description? (
                        <StyledContainer>
                            <StyledLink><span  style={{textDecoration:'none',color:'black', }}  onClick={() => {this.props.deleteExercise(this.props.item._id); }}><span>Wykonane<TiArrowForwardOutline size="20" style={{marginLeft: '5px'}}></TiArrowForwardOutline></span></span></StyledLink>
                            <StyledLink><span  style={{textDecoration:'none',color:'black', }}  onClick={() => {this.props.deleteExercise(this.props.item._id); }}><span>usuń<TiTrash size='20' style={{marginLeft: '5px'}}></TiTrash></span></span></StyledLink>    
                        </StyledContainer> 
                        ): (
                        <StyledContainer>
                            Dodano!
                        </StyledContainer> 
                        )}
                        
                    </li>
            </StyledUl>
            </div>
        );
    }
}


const StyledSpanColor = styled.span`
    color: ${({pr}) => pr?"red":"black"};
`

const StyledContainer = styled.div`
    margin: 10px;
    font-weight: 700;
    float: right;
`;

const StyledSpan1 = styled.span`
    float: right;
`;
const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(2,1fr); */

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