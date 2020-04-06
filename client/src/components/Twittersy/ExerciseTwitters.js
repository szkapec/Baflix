import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledCard = styled.div`
    
    margin-top: 30px;
    margin: 30px auto 0;
    width: 250px;
    min-height: 150px;
  
   
    @media(min-width: 400px){
        width: 80%;
        margin: 30px auto 0;
        font-size: 18px;
    }
    @media(min-width: 600px){
        width: 500px;
    }


`
const StyledUser = styled.div`
    padding: 10px 0 10px 0;
    background-color: #bdc3c7;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 50px;
    text-align: center;

`
const StyledText = styled.div`
    min-height: 150px;
    padding: 10px 0 10px 10px;
    box-shadow: 0 0 10px grey;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

`
const StyledLink = styled.div`
    text-align:center;
    padding: 5px;

`

const Exercise = props => {

console.log(props)
    return(
       
        <>
            
                    <>
                        <StyledCard>
                             <StyledUser>  <b>{props.twitters.username}</b>   </StyledUser>
                             <StyledUser>  <b>{props.twitters.title}</b>   </StyledUser>

                             <StyledText> <b>Treść: </b>  {props.twitters.description}</StyledText>
                             
                             {/* <div>Czas: {props.exercise.duration}</div> */}
                            {/* <div> Data {props.exercise.date.substring(0,10)}</div> */}
                            {/* <StyledLink> <Link style={{textDecoration:'none',color:'black'}} to={"/edit/"+props.exercise._id}>Edytuj</Link> | <a  style={{textDecoration:'none',color:'black', }} href="/viewtwitters" onClick={() => { props.deleteTwitters(props.twitters._id) }}>Usuń</a></StyledLink> */}
                        </StyledCard>
                    </>
           

        </>
        
      )
    }

    export default Exercise;
