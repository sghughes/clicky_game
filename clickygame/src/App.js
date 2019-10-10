import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import ImageCard from './components/ImageCard';
import images from './images.json';
// import { thisTypeAnnotation } from '@babel/types';

let score=0;
let clickedImages=[];


class App extends Component {

  state= {
    images: images,
    clickedImages: [],
    score: 0,
    topScore: 0,
    status: 'Click an image to begin!'
  };

  //write function to randomly render images on page

  clickedImage = id => {
    //let clickedImages = this.state.clickedImages;
    console.log(id);

    if (clickedImages.includes(id)) {
      console.log('score: ' + this.state.score)

      if(this.state.score > this.state.topScore ){
        this.setState({ topScore: this.state.score })
        console.log(this.topScore)
        console.log('testing')
      };

      this.setState({ clickedImages: [], score: 0, status: 'Game over! Click an image to restart!'});

      score=0;
      clickedImages=[];

      return;
    } else {
      score++;

      console.log(score);
      clickedImages.push(id);
      this.setState({ clickedImages:this.clickedImages, score: score, status: 'Good guess!' })
      console.log(clickedImages);
      return;
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar status={this.state.status} score={this.state.score} topScore={this.state.topScore}>
        </Navbar>
        {this.state.images.map(image => (
        <ImageCard
        id={image.id}
        image={image.image}
        clickedImage={this.clickedImage}/>
        ))}

      </Wrapper>
    )
  }
}

export default App;
