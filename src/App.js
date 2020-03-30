import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import AsherGallery from './components/asherGallery';
import EllieGallery from './components/ellieGallery';
import NotFound from './components/notFound';
import SimpleReactLightbox from 'simple-react-lightbox';

class App extends Component {
  render() {
    console.log(process.env.REACT_API_KEY);

    return (
      <SimpleReactLightbox>
        <React.Fragment>
          <Router>
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
          </Router>
        </React.Fragment>
      </SimpleReactLightbox>
    );
  }
}

export default App;
