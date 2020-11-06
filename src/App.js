import React, { Component } from 'react'
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
      </div>
    )
  }
}
