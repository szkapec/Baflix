import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')  //wylogowanie
    this.props.history.push(`/login`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Rejestracja
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/chat" className="nav-link">
                Chat
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/addtask" className="nav-link">
                Dodaj notatkę
              </Link>
          </li>

          <li  className="nav-item">
            <Link to="/viewtask" className="nav-link">
                Notatki
              </Link>
          </li>

          <li  className="nav-item">
            <Link to="/twitter" className="nav-link">
                Twitter
              </Link>
          </li>

        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Uzytkownik
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" onClick={this.logOut.bind(this)} className="nav-link">
            Wyloguj
          </Link>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)