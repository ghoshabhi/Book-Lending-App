import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import BookShelf from '../containers/BookShelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <BookShelf />
        </div>
      </div>
    );  
  }
}

export default App;
