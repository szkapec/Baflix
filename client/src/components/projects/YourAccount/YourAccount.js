import React, { Component } from 'react'
import styled from 'styled-components';


export default class YourAccount extends Component {
    render() {
        return (
            <StyledAll>
                Konto użytkownikaa
            </StyledAll>
        )
    }
}

const StyledAll = styled.div`
    margin-top: 50px;
    color:white;
    margin-left: 10px;
`