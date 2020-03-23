// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css"
// import axios from 'axios';

// export default class EditTask extends Component {

//     constructor(props){

//         super(props)
//         this.state = {
//             username: "",
//             description: '',
//             duration: 0,
//             date: new Date(),
//             users: []
//         }
//     }

//     componentDidMount() {

//         axios.get('/exercises/'+this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     username: response.data.username,
//                     description: response.data.description,
//                     duration: response.data.duration,
//                     data: new Date(response.data.date)
//                 })
//             })
//             .catch(error => console.log(error))

//     }

//     onChangeUsername=(e)=> {
//         this.setState({
//             username: e.target.value
//         })
//     }

//     onChangeDescription=(e)=> {
//         this.setState({
//             description: e.target.value
//         })
//     }
//     onChangeDuration=(e)=> {
//         this.setState({
//             duration: e.target.value
//         })
//     }
//     onChangeDate=(date) =>{
//         this.setState({
//             date,
//         })
//     }

//     onSubmit=(e)=>{
//         e.preventDefault();
//         const exercise = {
//             username: this.state.username,
//             description: this.state.description,
//             duration: this.state.duration,
//             date: this.state.date
//         }

//         axios.post('/exercises/update/' + this.props.match.params.id, exercise)
//         .then(res => console.log(res));
//         window.location = '/viewtask'; //na strone glowna
//     }


//     render() {
//         return (
//             <div>
//               <h3>edit Exercise Log</h3>
//               <form onSubmit={this.onSubmit}>
                
//                 <div className="form-group"> 
//                   <label>Description: </label>
//                   <input  type="text"
//                       required
//                       className="form-control"
//                       value={this.state.description}
//                       onChange={this.onChangeDescription}
//                       />
//                 </div>
//                 <div className="form-group">
//                   <label>Duration (in minutes): </label>
//                   <input 
//                       type="text" 
//                       className="form-control"
//                       value={this.state.duration}
//                       onChange={this.onChangeDuration}
//                       />
//                 </div>
//                 <div className="form-group">
//                 <label>Data: </label>
//                 <div>
//                   <DatePicker
//                     selected={this.state.date}
//                     onChange={this.onChangeDate}
//                   />
//                 </div>
//               </div>
      
        
//                 <div className="form-group">
//                   <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
//                 </div>
//               </form>
//             </div>
//             )
//           }
//         }