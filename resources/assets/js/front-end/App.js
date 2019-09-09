import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/about' component={About} />            
          </div>
        );
    }
}

export default App;