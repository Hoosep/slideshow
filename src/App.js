import React, { Component } from 'react';
import './App.css';
import { BallBeat } from 'react-pure-loaders';
import Slides from './backend';
import Slide from './Slide';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeIndex: 0,
      pictures: [],
      imagesReady: false
    };
  }

  componentDidMount(){
    let pictures = [];
    let totalSlides = Slides.length;
    Slides.forEach((slide) => {
      let img = new Image();
      img.src = slide.image
      img.alt = slide.name

      pictures.push(
        {
          image: slide.image,
          name: slide.name,
          description: slide.description
        }
      );
      
    })

    if(totalSlides === pictures.length) {
      this.setState({
        imagesReady: true,
        pictures: pictures
      });
    }

  }

  updateSlide = e => {
    let index = this.state.activeIndex;
    let slidesLength = Slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  startSlideShow = e => {
    this.slideShowInterval = setInterval(() => {
      this.updateSlide();
    }, 1500);
  }

  resetSlideShow = e => {
    clearInterval(this.slideShowInterval);
    this.setState({
      activeIndex: 0
    });
  }

  render(){
    const { pictures, imagesReady } = this.state;
    return (
      <div className="vw-100 vh-100 d-flex flex-column">
        <div className="flex-eight">
          {
            imagesReady
            ? (<div className="position-relative" 
                    onMouseEnter={this.startSlideShow}
                    onMouseLeave={this.resetSlideShow}>
                {pictures.map((slide, index) =>
                  <Slide
                    key={index}
                    index={index}
                    activeIndex={this.state.activeIndex}
                    imageUrl={slide.image}
                    name={slide.name}
                    description={slide.description}
                  />
                )}
              </div>)
            : <BallBeat color={'#123abc'} loading={true} />
          }
          
        </div>
      </div>
    );
  }

}

export default App;
