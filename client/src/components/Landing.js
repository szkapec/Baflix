import React, { Component } from 'react'
import Comunicator from './Comunicator/Comunicator'

const Zalogowany = () => {

  return (
    <>
    <h4 className="text-center">Witam na mojej stronie</h4>
    <hr></hr>
    <div>Zostałeś prawidłowo zalogowany</div>
    <hr></hr>
    <div>Strona została napisana w React + Express + Node + MongoDB</div>
    <hr></hr>
    <div>Zapraszam do testowania aplikacji!</div>
    

   

    </>
   
  )
}


const Niezalogowany = () => (
  <>
  <h1 className="text-center">Witamy!</h1>
  <h3>Niezalogowany!</h3>
  </>
 
)

class Landing extends Component {



  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            
          </div>
          {localStorage.usertoken? <Zalogowany/> : <Niezalogowany/>}
        </div>
      </div>
    )
  }
}

export default Landing