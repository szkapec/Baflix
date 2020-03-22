import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
      comPassword: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  flag = true;

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    this.flag=true;

    if(this.state.password.length <= 4 || this.state.email.length<=4){
      this.flag = false;
     this.setState({
      comPassword: "Nieprawidłowe hasło lub login!",
     })
   }
   else if(this.state.password.match(/^[0-9a-zA-Z]+$/)===null){
     this.flag = false;
     this.setState({
      comPassword: "Nieprawidłowe hasło lub login!",
     })
   }
   else {
     this.setState({comPassword: ''})
   }

   if(this.flag){




    /*
const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        username: decoded.username,
        last_name: decoded.last_name,
        email: decoded.email
      })
      
    */
    //261
 

      const user = {
        email: this.state.email,
        password: this.state.password
      }
      login(user).then(res => {
        if (res) {
          if(localStorage.usertoken.length>200){
            this.props.history.push(`/profile`)
          }
          else {
            localStorage.removeItem('usertoken')
            this.setState({
              comPassword: "Nieprawidłowe hasło lub login!!!!",
              email: '',
              password: '',
              
            })
          }
          
        }
          

        
        if(!res){
          return console.log('blad')
        }
      })
      .catch(err => {
        console.log("Niepoprawne haslo i login")
        // this.props.history.push(`/login`)
      })
    }
  
   }
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Prosze się zalogować</h1>
              <div className="form-group">
              <div style={{color:'red'}}>{this.state.comPassword?this.state.comPassword:null}</div>
                <label htmlFor="email">Adres email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Adres email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Hasło"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Zaloguj
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login