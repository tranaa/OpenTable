import React, { Component } from 'react'
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
              <h1>Open Table</h1>
          </header>
          <PostForm />
          <Posts />  
        </div>
      </Provider>
    );
  }
} 

export default App;
