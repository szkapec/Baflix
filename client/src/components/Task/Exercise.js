import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledCard = styled.div`
    
    margin-top: 30px;
    width: 250px;
    min-height: 150px;
  
   

`
const StyledUser = styled.div`
    padding: 10px 0 10px 0;
    background-color: yellowgreen;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 50px;
    text-align: center;

`
const StyledText = styled.div`
    min-height: 150px;
    padding: 10px 0 10px 10px;
    box-shadow: 0 0 10px grey;
`
const StyledLink = styled.div`
    text-align:center;
    padding: 5px;

`

const Exercise = props => {


    return(
       
        <>
            {props.exercise.username &&(
                    <>
                        <StyledCard>
                             <StyledUser>  <b>{props.exercise.username}</b>   </StyledUser>
                             <StyledText> <b>Treść: </b>  {props.exercise.description}</StyledText>
                             {/* <div>Czas: {props.exercise.duration}</div> */}
                            {/* <div> Data {props.exercise.date.substring(0,10)}</div> */}
                            <StyledLink> <Link style={{textDecoration:'none',color:'black'}} to={"/edit/"+props.exercise._id}>Edytuj</Link> | <a  style={{textDecoration:'none',color:'black', }} href="/viewtask" onClick={() => { props.deleteExercise(props.exercise._id) }}>Usuń</a></StyledLink>
                        </StyledCard>
                    </>
            )}

        </>
        
      )
    }

    export default Exercise;
