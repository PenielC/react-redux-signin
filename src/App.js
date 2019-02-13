import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import Home from './components/layout/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home/>
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
