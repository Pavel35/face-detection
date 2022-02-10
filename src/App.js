import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '8343f6e6b6c64be8b384866a902dd6cb'
});

class App extends Component {
  constructor(){
    super();
      this.state = {
        input: '',
        imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => { 
    console.log('event')
    this.setState({imageUrl: this.state.input})
    app.models.predict(
        'https://images-ext-2.discordapp.net/external/Sp4y-QcS6IbXyjVSItWzQbnL-GkyVbTbP61sovsuU88/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D350/https/images.pexels.com/photos/20787/pexels-photo.jpg')
      .then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    );
  }

  render() {
    return(
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </ div>
    );
  }
}

export default App;

    // <Particles className='particles'
      //       id="tsparticles"
      //       options={{
      //         background: {
      //           color: {
      //             value: "#0d47a1",
      //           },
      //         },
      //         fpsLimit: 120,
      //         interactivity: {
      //           events: {
      //             onClick: {
      //               enable: false,
      //               mode: "push",
      //             },
      //             onHover: {
      //               enable: false,
      //               mode: "repulse",
      //             },
      //             resize: true,
      //           },
      //           modes: {
      //             bubble: {
      //               distance: 400,
      //               duration: 2,
      //               opacity: 0.8,
      //               size: 40,
      //             },
      //             push: {
      //               quantity: 4,
      //             },
      //             repulse: {
      //               distance: 200,
      //               duration: 0.4,
      //             },
      //           },
      //         },
      //         particles: {
      //           color: {
      //             value: "#ffffff",
      //           },
      //           links: {
      //             color: "#ffffff",
      //             distance: 150,
      //             enable: true,
      //             opacity: 0.5,
      //             width: 1,
      //           },
      //           collisions: {
      //             enable: true,
      //           },
      //           move: {
      //             direction: "none",
      //             enable: true,
      //             outMode: "bounce",
      //             random: false,
      //             speed: 1.5,
      //             straight: false,
      //           },
      //           number: {
      //             density: {
      //               enable: true,
      //               area: 200,
      //             },
      //             value: 30,
      //           },
      //           opacity: {
      //             value: 0.5,
      //           },
      //           shape: {
      //             type: "circle",
      //           },
      //           size: {
      //             random: true,
      //             value: 5,
      //           },
      //         },
      //         detectRetina: true,
      //       }}
      //       />