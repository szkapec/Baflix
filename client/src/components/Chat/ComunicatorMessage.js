import React from 'react';
import styled from 'styled-components';

const StyledAll = styled.div`
    padding: 10px;
    margin: 10px;
    margin-bottom: 10px;
    display: flex;
    margin-right: 40px;
    background-color: #6B4226;
    color: white;
    flex-wrap: wrap;
    font-size: 12px;
    box-shadow: 0 0 10px  #6B4226;
    border-radius: 20px;
    @media(min-width:600px){
    font-size: 14px;
 }
`
const StyledAll1 = styled.div`
    padding: 10px;
    margin: 10px;
    margin-left: 40px;
    background-color: #2980b9;
    color: white;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    box-shadow: 0 0 10px #2980b9;
    border-radius: 20px;
    @media(min-width:600px){
    font-size: 14px;
 }
 @media(min-width:1000px){
    font-size: 16px;
 }
`

const StyledName = styled.div`
 width: 100%;
 font-size: 12px;
 margin-left: 10px;
 color: white;
 @media(min-width:600px){
    font-size: 14px;
 }
 @media(min-width:1000px){
    font-size: 16px;
 }
`
const StyledName1 = styled.div`
 width: 100%;
 font-size: 12px;
 
 margin-left: 40px;
 color: white;

 @media(min-width:600px){
    font-size: 14px;
 }
 @media(min-width:1000px){
    font-size: 16px;
 }
`
const StyledCard = styled.div`
   width: 100%;
   margin: 0 auto;

    @media (min-width: 600px) {
        box-shadow: 0 0 5px black;
        padding: 10px;
        width: 80%;
        margin: 0 auto;
    }
   @media(min-width: 1000px) {
    max-width: 800px;
   }
   
`
const StyledBold = styled.b`
    font-weight:700;
`

const Message = (props) => {
    
    console.log(props)
        return(
            <>
            <StyledCard>
                {props.username[0]?
                (<div><StyledName> <b>{props.username[0]&&props.username[0]}</b>: {props.data[1].substr(0,10)+" "  +  props.data[1].substr(11,5) }</StyledName> <StyledAll><b>{props.username[0]&&props.description[0]}</b></StyledAll></div>):
                
                (
                       <>
                            <StyledName>Brak wiadomości</StyledName>
                            <StyledName>Proszę dodać nową</StyledName>
                        </>
                    )}
                    
                {props.username[1]&&(<div>
                    <StyledName1><b>{props.username[1]&&props.username[1]}</b>: {props.data[1].substr(0,10)+" "  +  props.data[1].substr(11,5) } </StyledName1>
                    
                    <StyledAll1>{props.username[1]&&props.description[1]}</StyledAll1>
                </div>)}
                {props.username[2]&&(<div>
                    <StyledName>{props.username[2]&&props.username[2]}: {props.data[2]}</StyledName>
                    
                    <StyledAll>{props.username[2]&&props.description[2]}</StyledAll>
                </div>)}
                {props.username[3]&&(<div>
                    <StyledName1>{props.username[3]&&props.username[3]}: {props.data[3]}</StyledName1>
                    <StyledAll1>{props.username[3]&&props.description[3]}</StyledAll1>
                </div>)}
                {props.username[4]&&(<div>
                    <StyledName>{props.username[4]&&props.username[4]}: {props.data[4]}</StyledName>
                    <StyledAll>{props.username[4]&&props.description[4]}</StyledAll>
                </div>)}

                {props.username[5]&&(<div>
                    <StyledName1>{props.username[5]&&props.username[5]}: {props.data[4]}</StyledName1>
                    <StyledAll1>{props.username[5]&&props.description[5]}</StyledAll1>
                </div>)}

                {props.username[6]&&(<div>
                    <StyledName>{props.username[6]&&props.username[6]}: {props.data[6]}</StyledName>
                    <StyledAll>{props.username[6]&&props.description[6]}</StyledAll>
                </div>)}

                {props.username[7]&&(<div>
                    <StyledName1>{props.username[7]&&props.username[7]}: {props.data[7]}</StyledName1>
                    <StyledAll1>{props.username[7]&&props.description[7]}</StyledAll1>
                </div>)}

                {props.username[8]&&(<div>
                    <StyledName>{props.username[8]&&props.username[8]}: {props.data[8]}</StyledName>
                    <StyledAll>{props.username[8]&&props.description[8]}</StyledAll>
                </div>)}

                {props.username[9]&&(<div>
                    <StyledName1>{props.username[9]&&props.username[9]}: props.data[9]}</StyledName1>
                    
                    <StyledAll1>{props.username[9]&&props.description[9]}</StyledAll1>
                </div>)}

                {props.username[10]&&(<div>
                    <StyledName>{props.username[10]&&props.username[10]}: {props.data[10]}</StyledName>
                    <StyledAll>{props.username[10]&&props.description[10]}</StyledAll>
                </div>)}
                
                {props.username[11]&&(<div>
                    <StyledName1>{props.username[11]&&props.username[11]}: {props.data[11]}</StyledName1>
                    <StyledAll1>{props.username[11]&&props.description[11]}</StyledAll1>
                </div>)}
                
                {props.username[12]&&(<div>
                    <StyledName>{props.username[12]&&props.username[12]}: {props.data[12]}</StyledName>
                    <StyledAll>{props.username[12]&&props.description[12]}</StyledAll>
                </div>)}
                
                {props.username[13]&&(<div>
                    <StyledName1>{props.username[13]&&props.username[13]}: {props.data[13]}</StyledName1>
                    <StyledAll1>{props.username[13]&&props.description[13]}</StyledAll1>
                </div>)}
                
                {props.username[14]&&(<div>
                    <StyledName>{props.username[14]&&props.username[14]}: {props.data[14]}</StyledName>
                    <StyledAll>{props.username[14]&&props.description[14]} </StyledAll>
                </div>)}
            </StyledCard>
            </>
        )
    }
   


export default Message;