import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var baslik = React.createElement('h1', {className: "baslik"}, 'Başlık');
    var content = React.createElement('div', {className: "baslik_"}, [baslik]);
    return (
      content
    );
  }
}

export default App;
