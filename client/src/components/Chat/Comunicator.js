// import React, { Component } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import ComunicatorMessage from './ComunicatorMessage';

    

   


// export default class Comunicator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             exercises: [],
//             username: "",
//             description: '',
//         };
//     }


//     componentDidMount() {

//         if(!localStorage.usertoken) {
//             return null;
//           } 
//           else {
//             const token = localStorage.usertoken
//             const decoded = jwt_decode(token)
//             this.setState({
//               username: decoded.username,
//             })
//           }


//         axios.get('/message/')
//             .then(response => {
//                 this.setState({
//                     exercises: response.data
//                 })
//             })
//             .catch(error => console.log(error))
//     }


// onChangeDescription=(e)=> {
//     this.setState({
//         description: e.target.value
//     })
// }


// onSubmit=(e)=>{
//     e.preventDefault();
//     const message = {
//         username: this.state.username,
//         description: this.state.description,
        
//     }

//     axios.post('/message/add', message)
//     .then(res => console.log(res.data))
//     window.location = '/'; //na strone glowna
// }

//     exercisesList = () => {
//         var description = []
//         var username = [];
//         this.state.exercises.map((poj,number) => {
//            description.push(poj.description)
//            username.push(poj.username)
//         })

//         return <ComunicatorMessage username={username.reverse()} description={description.reverse()}/>
//     }

//     //   return <Message exercise={poj} key={poj._id}/>
//     render() {
//         return (
//             <>
//             <div>
//                 <h3 style={{fontSize: '20px', margin: "12px"}}>Czat:</h3>
//                 <div style={{marginTop:'30px'}}>{this.exercisesList()}</div>
                        
        
//             </div>

//             <div>
//             <br></br>
//               <form onSubmit={this.onSubmit}>
//                 <div className="form-group"> 
//                   <label>Napisz wiadomość: </label>
//                   <textarea   type="text"
//                       required
//                       className="form-control"
//                       value={this.state.description}
//                       onChange={this.onChangeDescription}
//                       />
//                 </div>
//                 <div className="form-group">
//                   <input type="submit" value="Wyślij" className="btn btn-primary" />
//                 </div>
//               </form>
//             </div>
//             </>
//         )
//     }
// }