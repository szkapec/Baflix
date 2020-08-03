import React, { Component } from 'react'
import OneSection from '../OneSection/OneSection';
import IndexSlider from '../SliderSmall/IndexSlider';
import axios from 'axios';
import Footer from '../../pages/tabComponents/Footer/Footer';
import SliderChoice from '../SliderChoice/SliderChoice';
export default class News extends Component {

    state = {
        description: '',
        picturesThree: '',
        picturesTwo: '',
        pictures: '',
    }

    componentDidMount() {
        axios.get('http://localhost:5000/description').then(res => {
            this.setState({
                description: res.data,
            })
    }).catch(err => console.log(err))

    axios.get('http://localhost:5000/pictures').then(res => {
        this.setState({
            pictures: res.data,
        })                
}).catch(err => console.log(err))
    axios.get('http://localhost:5000/picturesThree').then(res => {
        this.setState({
            picturesThree: res.data,
        })
    }).catch(err => console.log(err))
    axios.get('http://localhost:5000/picturesTwo').then(res => {
        this.setState({
            picturesTwo: res.data,
        })
    }).catch(err => console.log(err))
  
    }
        
    render() {
        const {description,  picturesThree, picturesTwo, pictures } = this.state;
        return (
            <div>
                <OneSection />
                <SliderChoice description={description.one} picture={pictures}/>
                <IndexSlider baflix News description={description.four} picture={picturesThree}/>
                <IndexSlider description={description.two} picture={picturesTwo}/>
                <IndexSlider description={description.four} picture={picturesThree}/>
                <IndexSlider description={description.two} picture={picturesTwo}/>
                <Footer/>
            </div>
        )
    }
}
