import React, { Component } from 'react'
import styled from 'styled-components';
import Navi from './Navi';
export default class ChangeLight extends Component {
    constructor() {
        super()
        this.state = {
          valueColor: false,
        }
      }


    changeInput = (e) => {
        this.setState({
          valueColor: !this.state.valueColor
        })
      }
   
    render() {
        return (
            <div>
                    
                    <StyledCard colors={this.state.valueColor}>
                        <Navi colors={this.state.valueColor}/>
                        <Input colors={this.state.valueColor} type="button" onClick={this.changeInput} value={this.state.valueColor?'Jasny':'Ciemny'}></Input>
                       {this.props.children}
                    </StyledCard>
            </div>
        )
    }
}



const Input = styled.input`
  position: fixed;
  bottom: 10px;
  right: 5px;
  padding: 5px 15px;
  font-size: 12px;
  margin: 20px 20px;
  font-weight: 700;
  background-color: ${({colors}) => colors?'#7f8c8d':'black'};
  color: ${({colors}) => colors?'black':'white'};
  border:none;
  border-radius: 50px;
  float: right;
  margin-right: 30px;

@media(min-width:500px) {
  padding: 10px 25px;
  font-size: 14px;
}
`
export const StyledCard = styled.div`
    background-color: ${({colors}) => colors?'black':'#ecf0f1'} ;
    color: ${({colors}) => colors?'white':'black'};
    min-height: 100vh;
`
;