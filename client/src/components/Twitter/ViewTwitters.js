// import React from 'react';
// import styled  from "styled-components";
// import twitter from '../../assets/twitter.png';
// import {Link} from 'react-router-dom';

// const StyledCard = styled.div`
//     width: 300px;
//     min-height: 200px;
//     border-radius: 20px;
//     margin-bottom: 40px;
// `
// const StyledImg = styled.img`
//     width:50px;
//     height:50px;
//     position: relative;
//     float: right;
//     margin: 20px;
// `

// const StyledUser = styled.div`
// padding: 10px 10px;
// background-color: #2980b9;
// `

// const StyledTextarea = styled.div`
//     padding: 10px 10px;
//     box-shadow: 0 0 10px grey;
 
//     min-height: 100px;
// `
// const StyledButton = styled.button`
// float: right;
//     right: 10px;
//     bottom: 10px;
//     background-color: white; 
//   color: black; 
//   border: 2px solid #2980b9;
//   border-radius: 20px;
// `

// const ViewTwitters = props => {
//     const {username, description, link, title} = props.twitty;

  

//     //  | <a href="#" onClick={() => { props.deleteExercise(props.twitty._id) }}>Usuń</a>
//     return(
//     <>
//         <StyledCard>
//             <StyledUser><b>User:</b> {username}<a href={`https://${link}`}>  <StyledImg src={twitter}></StyledImg> </a></StyledUser>
//             <StyledUser><b>Tytuł:</b> {title} </StyledUser>
//             <StyledTextarea><b>Treść:</b> {description} 
            
//             {props.username===props.user?(
//                 <StyledButton><Link style={{textDecoration: 'none', color:'black'}} to={"/editTwitter/"+props.twitty._id}>Edytuj</Link></StyledButton>)
//                 :null}
//             </StyledTextarea>
           

            

//         </StyledCard>
//     </>
//     )
//     }

//     export default ViewTwitters;