import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import AsherGallery from './components/asherGallery';
import EllieGallery from './components/ellieGallery';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='App'>
          <Switch>
            <Route path='/asher' component={AsherGallery} />
            <Route path='/ellie' component={EllieGallery} />
            <Route path='/home' component={Home} />
            <Route path='/not-found' component={NotFound} />
            {/* <Redirect from='/' exact to='/home' />
              <Redirect to='/not-found' /> */}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
