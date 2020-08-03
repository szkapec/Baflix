import React, {Component} from 'react'
import OneSection from './OneSection/OneSection';
import SliderFilms from './Slider/SliderFilms';
import Images from './Slider/Images';
import IndexSlider from './SliderSmall/IndexSlider';
import axios from 'axios';
import HightSlider from './HightSlider/HightSlider';
import SliderChoice from './SliderChoice/SliderChoice';
import Footer from '../pages/tabComponents/Footer/Footer';
export default class Index extends Component {
    
    state = {
        description: 'Błąd danych',
        pictures: '',
        picturesTwo: '',
        picturesThree: '',
        largeImage: '',
        hightSlider: '',
    }

    //.post('/users/register', {     /////////git add . ///git commit -m 'assdda' ///// git push heroku master xD
    componentDidMount() {
        axios.get('/description').then(res => { 
            console.log(res)
                this.setState({
                    description: res.data[0],
                })
        }).catch(err => console.log(err))
    //to juz jest z bazy danych 
        axios.get('/filmsone').then(res => {
                this.setState({
                    pictures: res.data,
                })
        }).catch(err => console.log(err))
    //to juz jest z bazy danych 

        // axios.get('http://localhost:3001/description').then(res => {
        //     console.log(res)
        //         this.setState({
        //             description: res.data,
        //         })
        // }).catch(err => console.log(err))

    


        // axios.get('http://localhost:3001/pictures').then(res => {
        //     console.log(res)
        //         this.setState({
        //             pictures: res.data,
        //         })                
        // }).catch(err => console.log(err))
        

        axios.get('/picturesTwo').then(res => {
            this.setState({
                picturesTwo: res.data,
            })
        }).catch(err => console.log(err))
        axios.get('/picturesThree').then(res => {
            this.setState({
                picturesThree: res.data,
            })
        }).catch(err => console.log(err))
        axios.get('/hightSlider').then(res => {
            this.setState({
                hightSlider: res.data,
            })
        }).catch(err => console.log(err))

      }



    render() {

        const {description, pictures, picturesTwo, picturesThree, hightSlider } = this.state;
        return (
            <>
                
                <OneSection Views/>
                <SliderChoice description={description.one} picture={pictures}></SliderChoice>
                <IndexSlider description={description.one} picture={pictures} baflix/>
                <IndexSlider description={description.two} picture={picturesTwo}/>
                <IndexSlider description={description.four} picture={picturesThree}/>
                
                <SliderFilms picture={Images}/>
                <IndexSlider description={description.two} picture={picturesTwo}/>
                <IndexSlider description={description.four} picture={picturesThree}/>
                <HightSlider picture={hightSlider}/>
                <Footer/>

            </>
        )
    }
    }

  