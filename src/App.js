import './App.css';
import Subject from './components/Subject';
import Content from './components/Content';
import React, { Component } from 'react';
import TOC from './components/TOC';

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="WEB" sub="world wide web" />
        <TOC />
        <Content title="HTML" sub="HTML is HyperText Markup Language" />
      </div>
    )
  }
}

export default App;
