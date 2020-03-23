import React from 'react';
import styled from 'styled-components';

const StyledAll = styled.div`
    padding: 10px;
    margin: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    box-shadow: 0 0 10px grey;
`

const StyledName = styled.div`
    
    font-weight:700;
    width: 80px;
    

`

const Message = (props) => {
    

        return(
            <>
                {props.username[0]?(<StyledAll>
                <StyledName> {props.username[0]&&props.username[0]}:</StyledName>
               
                {props.username[0]&&props.description[0]}
                    </StyledAll>):(
                       <>
                            <div>Brak wiadomości</div>
                            <div>Proszę dodać nową</div>
                        </>
                    )}
                    
                {props.username[1]&&(<StyledAll>
                    <StyledName>{props.username[1]&&props.username[1]}:</StyledName>
                    
                    {props.username[1]&&props.description[1]}
                </StyledAll>)}
                {props.username[2]&&(<StyledAll>
                    <StyledName>{props.username[2]&&props.username[2]}:</StyledName>
                    
                    {props.username[2]&&props.description[2]}
                </StyledAll>)}
                {props.username[3]&&(<StyledAll>
                    <StyledName>{props.username[3]&&props.username[3]}:</StyledName>
                    {props.username[3]&&props.description[3]}
                </StyledAll>)}
                {props.username[4]&&(<StyledAll>
                    <StyledName>{props.username[4]&&props.username[4]}:</StyledName>
                    {props.username[4]&&props.description[4]}
                </StyledAll>)}

                {props.username[5]&&(<StyledAll>
                    <StyledName>{props.username[5]&&props.username[5]}:</StyledName>
                    {props.username[5]&&props.description[5]}
                </StyledAll>)}

                {props.username[6]&&(<StyledAll>
                    <StyledName>{props.username[6]&&props.username[6]}:</StyledName>
                    {props.username[6]&&props.description[6]}
                </StyledAll>)}

                {props.username[7]&&(<StyledAll>
                    <StyledName>{props.username[7]&&props.username[7]}:</StyledName>
                    {props.username[7]&&props.description[7]}
                </StyledAll>)}

                {props.username[8]&&(<StyledAll>
                    <StyledName>{props.username[8]&&props.username[8]}:</StyledName>
                    {props.username[8]&&props.description[8]}
                </StyledAll>)}

                {props.username[9]&&(<StyledAll>
                    <StyledName>{props.username[9]&&props.username[9]}:</StyledName>
                    
                  {props.username[9]&&props.description[9]}
                </StyledAll>)}

                {props.username[10]&&(<StyledAll>
                    <StyledName>{props.username[10]&&props.username[10]}:</StyledName>
                    {props.username[10]&&props.description[10]}
                </StyledAll>)}
                
                {props.username[11]&&(<StyledAll>
                    <StyledName>{props.username[11]&&props.username[11]}:</StyledName>
                    {props.username[11]&&props.description[11]}
                </StyledAll>)}
                
                {props.username[12]&&(<StyledAll>
                    <StyledName>{props.username[12]&&props.username[12]}:</StyledName>
                    {props.username[12]&&props.description[12]}
                </StyledAll>)}
                
                {props.username[13]&&(<StyledAll>
                    <StyledName>{props.username[13]&&props.username[13]}:</StyledName>
                    {props.username[13]&&props.description[14]}
                </StyledAll>)}
                
                {props.username[14]&&(<StyledAll>
                    <StyledName>{props.username[14]&&props.username[14]}:</StyledName>
                    {props.username[14]&&props.description[14]}
                </StyledAll>)}
    
            </>
        )
    }
   


export default Message;