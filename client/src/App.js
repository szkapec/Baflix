import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Addtask from './components/Task/AddTask'
import ViewTask from './components/Task/ViewTask'
import EditTask from './components/Task/EditTask';
import Twitter from './components/Twitter/Twitter';
import EditTwitter from './components/Twitter/EditTwitter'
import Comunicator from './components/Chat/Comunicator';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route path="/edit/:id" component={EditTask}/> */}
            {/* <Route path="/editTwitter/:id" component={EditTwitter}/>
            <Route exact path="/addtask" component={Addtask} />
            <Route exact path="/viewtask" component={ViewTask} />
            <Route exact path="/twitter" component={Twitter} />
            <Route exact path="/chat" component={Comunicator} /> */}
          </div>
        </div>
      </Router>
    )
  }
}

export default App