import React from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './components/projects/Index';
import Film from './components/projects/Film/Film';
import Main from './components/pages/Main';
import Login from './components/pages/Logger/Login';
import {ChoosePlan} from './components/pages/Logger/ChoosePlan';
import ResponsivePlayer from './components/projects/Film/ResponsivePlayer';
import AppContext from './context';
import Cart from './components/projects/Cart/Cart';
import News from './components/projects/News/News';
import YourAccount from './components/projects/YourAccount/YourAccount';
import Error from './components/projects/Error/Error';
import Information from './components/pages/Information/Information';
class App extends React.Component {

  state = { // git add . // git commit -am 'version ...' //git push heroku master
    value: 'Wybór',
    cart: [
    ],
    like: [
    ],
    heart: [
    ]
  }

  addItem = e => {
    this.setState({
      value: e.target.value,
  })
}

  addCart = (items) => {
    let fill = this.state.cart.filter(item => item===items)
    console.log(fill)
    if(fill.length===0) {
      this.setState({
        cart: [...this.state.cart, items]
      })
    }
 
}

  addLike = (items) => {
    let fill = this.state.like.filter(item => item===items)
    if(fill.length===0) {
    this.setState({
      like: [...this.state.like, items]
    })
  }}
  addHeart = (items) => {
    let fill = this.state.heart.filter(item => item===items)
    if(fill.length===0) {
    this.setState({
      heart: [...this.state.heart, items]
    })
  }}


  removeCart = (items) => {
      let filt = this.state.cart.filter(item => item!==items)
    this.setState({
      cart: filt
    })
  }
  removeLike = (items) => {
      let filt = this.state.cart.filter(item => item!==items)
    this.setState({
      like: filt
    })
  }
  removeHeart = (items) => {
      let filt = this.state.cart.filter(item => item!==items)
    this.setState({
      heart: filt
    })
  }


  render() {

    const contextElement = {
      ...this.state,
      addItems: this.addItem,
      addCart: this.addCart,
      addLike: this.addLike,
      addHeart: this.addHeart,
      removeCart: this.removeCart,
      removeLike: this.removeLike,
      removeHeart: this.removeHeart,
    }


    return (
      <div className="App">
        <BrowserRouter>
            <AppContext.Provider value={contextElement}>
              <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/login/" component={Login}></Route>

                    <Route exact path="/browse" component={Index}></Route>
                    <Route exact path="/film/:id" component={Film}></Route>
                    <Route exact path="/watch" component={ResponsivePlayer}></Route>
                    <Route exact path="/choose-plan/" component={ChoosePlan}></Route>
                    <Route exact path="/cart/" component={Cart}></Route>
                    <Route exact path="/news/" component={News}></Route>
                    <Route exact path="/YourAccount/" component={YourAccount}></Route>
                    <Route exact path="/information/" component={Information}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </AppContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
