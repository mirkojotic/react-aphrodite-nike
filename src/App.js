import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';
import ContentFour from './components/ContentFour';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <ContentOne />
        <ContentTwo />
        <ContentThree />
        <ContentFour />
        <Footer />
      </div>
    );
  }
}

export default App;
