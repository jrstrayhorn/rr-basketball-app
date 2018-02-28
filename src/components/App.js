import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Players from './Players';
import Teams from './Teams';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
        </div>
      </Router>
    );
  }
}

export default App;
