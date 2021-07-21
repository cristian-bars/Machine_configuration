/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Setouts from './components/Setouts';
import Designs from './components/Designs';
import './App.css';

function App() {
  return (
    <main>
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Designs} />
          <Route path="/designs" component={Designs} />
          <Route path="/setouts" component={Setouts} />
        </Switch>
      </div>

    </main>
  );
}

export default App;
