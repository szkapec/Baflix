import React, { Component } from 'react'
import Header from './Header';
import './header.js.css';
import TabComponent from './tabComponents/TabComponents';
import Footer from './tabComponents/Footer/Footer';


class Main extends Component {
    render() {
        return (
               <>
                    <Header/>
                    <TabComponent/>
                    <Footer/>
               </>
        )
    }
}
export default Main