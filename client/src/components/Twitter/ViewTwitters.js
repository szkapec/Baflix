// import React from 'react';
// import styled  from "styled-components";
// import twitter from '../../assets/twitter.png';
// import {Link} from 'react-router-dom';


// const ViewTwitters = props => {
//     const {username, description, link, title} = props.twitty;

  

//     //  | <a href="#" onClick={() => { props.deleteExercise(props.twitty._id) }}>Usuń</a>
//     return(
//     <>
//         <StyledCard>
//                 <StyledUser style={{}}><b>User:</b> {username}<a href={link}>  <StyledImg src={twitter}></StyledImg> </a></StyledUser>
//                 <StyledTitle><b>Tytuł:</b> {title} </StyledTitle>
//                 <StyledTextarea style={{borderBottomLeftRadius: '20px',borderBottomRightRadius: '20px'}}><b>Treść:</b> {description} 
                
//                 {props.username===props.user?(
//                     <StyledButton><Link style={{textDecoration: 'none', color:'black'}} to={"/editTwitter/"+props.twitty._id}>Edytuj</Link></StyledButton>)
//                     :null}
//                 </StyledTextarea>
//         </StyledCard>
//     </>
//     )
//     }

//     export default ViewTwitters;





    
// const StyledCard = styled.div`
// position: relative;
// width: 80vw;
// margin: 0px auto;
// padding: 40px 0;
// min-height: 200px;
// max-width: 1000px;

// @media(min-width: 400px){
//     width: 80%;
//     margin: 30px auto 0;
//     font-size: 18px;
// }
// @media(min-width: 600px){
//     width: 500px;
// }

// `

// const StyledImg = styled.img`
// width:50px;
// height:50px;
// position: relative;
// float: right;
// margin: 20px;

// `

// const StyledUser = styled.div`
// padding: 10px 10px;
// background-color: #2980b9;
// border-Top-Left-Radius: 20px;
// border-top-right-radius: 20px;
// font-size: 18px;
// @media(min-width: 500px) {
//  font-size: 20px;   
// }
// @media(min-width: 1000px) {
//  font-size: 21px;   
// }
// `
// const StyledTitle = styled.div`
// padding: 10px 10px;
// background-color: #2980b9;
// font-size: 16px;
// @media(min-width: 500px) {
//  font-size: 18px;   
// }
// @media(min-width: 1000px) {
//  font-size: 20px;   
// }
// `

// const StyledTextarea = styled.div`
// padding: 10px 10px;
// box-shadow: 0 0 10px grey;
// font-size: 14px;
// min-height: 100px;
// @media(min-width: 500px) {
//  font-size: 16px;   
//  min-height: 150px;
//  padding: 15px 10px;
// }
// @media(min-width: 1000px) {
//  font-size: 18px;   
//  min-height: 200px;
// }
// `
// const StyledButton = styled.button`
// position: absolute;
// right: 10px;
// bottom: 50px;
// background-color: white; 
// color: black; 
// border: 2px solid #2980b9;
// border-radius: 20px;
// `