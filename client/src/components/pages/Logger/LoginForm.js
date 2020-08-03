import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FBlogo from '../../../assets/images/fb-logo.png';


const initState = {
    checked: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',

}

const reqexp = RegExp()


export default class LoginForm extends Component {

    state = initState;

    handleEmailChange = e => {
        this.setState({
            email: e.target.value,
        })
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value,
        })
    }
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: '',
        }
        if(!this.state.email) {
            inputError = true;
            errors.emailError = "Please enter a valid email"
        } 
        else if (!this.state.email.match(reqexp)){
            inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}> Your email adrress must be valid</span>
            )
        }
        if(this.state.password.length<4) {
            inputError= true;
            errors.passwordError= "Your password must contain between 4 and 60 charaters"
        }
        this.setState({
            ...errors
        })
        return inputError;
    }
    onSubmit = e => {
        e.preventDefault()
        const err = this.validate();
        if(!err) {
            this.setState(initState);
        }
    }
    handlerChecked = e => {
        this.setState({
            checked: e.target.checked,
        })
    }
    render() {
        
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign in</h1>
                        <div className="input-container">
                            <input onChange={this.handleEmailChange} value={this.state.email} className={this.state.emailError ? "input-error input-empty" : "input-empty"} type="email" required/>
                            <label htmlFor="">Email or phone number</label>
                            <span style={{color:'#db7201'}}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                            <input onChange={this.handlePasswordChange} value={this.state.password} className={this.state.passwordError ? "input-error input-empty" : "input-empty"} type="password" required/>
                            <label htmlFor="">password</label>
                            <span style={{color:'#db7201'}}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={e => this.onSubmit(e)}>Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                        <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handlerChecked} />
                           <span  className="remember"> Remember me</span>
                            <span className="checkmark"></span>
                        </label>
                        <Link to="/" className="need-help">Need help?</Link>
                        <div className="bottom-form">
                            <img src={FBlogo} alt="fb logo"/>
                            <Link to="/" className="login-fb-text">Login with Facebook</Link>
                            <br/>
                            <br/>
                            <span>New to Baflix? </span>
                            <Link style={{color:'white'}} to="/" className="sign-up-text"> Sign up now</Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}



const FormContainer = styled.div`
    color: white;
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 450px;
        height: 650px;
        padding: 64px;

        @media(max-width:450px){
            padding: 0.6rem;
            width: 250px;
        }
        @media(max-width: 680px){
            padding: 0.6rem;
            height: 35rem;
        }
        
       
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 20px;
    }
    .input-empty {
        color: white;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 15px 18px 0;
        max-width: 99%;
    }
    form div label {
        position: absolute;
        top: 0.9px;
        left: 17px;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 16px;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }
    form div {
        position: relative;
    }
    input:focus ~ label {
        top: 0.6px;
        font-size: 12px;
    }
    input:focus {
        outline: none;
    }
    .need-help {
        text-decoration: none;
        color: #82828282;
        margin-left: 5rem;
        font-size: 15px;
    }
    .remember {
        margin-left: 5px;
    }
     .checkbox-container {
        margin-left: 10px;
        padding-left: 15px;
        padding-top: 10px;
        position: relative;
        font-size: 15px;
        color: #999;
        cursor: pointer;
    }

    .bottom-form img {
        width: 28px;
        margin: 12px 12px -2px 0;
    }
    .login-fb-text {
        color: white;
        font-size: 15px;
    }
    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 30px;
    }
    .sing-up-text {
        font-size: 18px;
        color: white;
        &:hover {
            text-decoration: underline;
        }
    }
    .input-error {
        border-bottom: 1px solid #db7102;
    }
`

const Button = styled.button`
    color: #fff;
    background: rgba(220,9,20);
    border:none;
    outline:none;
    padding: 15px 17px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.50);
    transition: opacity .2s ease-in;
    cursor:pointer;
    text-decoration: none;
    margin: 0 16px;
    line-height: 2px;
`
