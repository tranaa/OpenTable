import React, { Component } from 'react'
import './App.css';
import Restaurants from './components/Restaurants';
import SearchForm from './components/SearchForm';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
              <h1>OPEN TABLE</h1>
          </header>
          <SearchForm />
          <Restaurants />  
        </div>
      </Provider>
    );
  }
} 

export default App;
