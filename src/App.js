import React from 'react';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
// import { storage } from './firebase.js';
import AsherGallery from './components/asherGallery';
import KorynGallery from './components/korynGallery';
import EllieGallery from './components/ellieGallery';
import NotFound from './components/notFound';
// import { firebase } from 'firebase/app';
// test now
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <main className='App'>
          {/* {console.log('APP.JS URL: ', url)} */}
          <Switch>
            <Route path='/asher' component={AsherGallery} />
            <Route path='/ellie' component={EllieGallery} />
            <Route path='/koryn' component={KorynGallery} />
            <Route path='/home' component={Home} />
            <Route path='/not-found' component={NotFound} />
            {/* <Redirect from='/' exact to='/home' />
              <Redirect to='/not-found' /> */}
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;

// (currentState) => [...currentState, fireUrl]
