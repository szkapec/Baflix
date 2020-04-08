import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Exercise = props => {

    let conn = () => {
        let min = props.exercise.updatedAt.substr(11,5)
        let time = props.exercise.updatedAt.substr(0,10)
        let conn = time.concat(` ${min}`)
        return conn
     }
    return(
       
        <>
            {props.exercise.username &&(
                    <>
                        <StyledCard>
                             <StyledUser>  <b>{props.exercise.username}</b> <StyledCzas>{conn()}</StyledCzas>  </StyledUser>
                             <StyledText> <b>Treść: </b>  {props.exercise.description} 
                                
                                
                             </StyledText>

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
position: relative;
padding: 10px 0 10px 0;
background-color: #bdc3c7;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
height: 50px;
text-align: center;

`
const StyledText = styled.div`
position:relative;
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

const StyledCzas = styled.div`
font-size: 12px;
position: absolute;
right: 10px;
top: 0px;
color: black; 
@media(min-width:600px){
    top:5px;
    font-size: 14px;
}
@media(min-width:1000px){
font-size: 14px;
}
`