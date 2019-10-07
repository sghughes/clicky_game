import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import ImageCard from './components/ImageCard';
import images from './images.json';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  state= {
    images
  };

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        {this.state.images.map(image => (
        <ImageCard
        id={image.id}
        image={image.image}/>
        ))}

      </Wrapper>
    )
  }
}

export default App;
