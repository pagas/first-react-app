// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Notes from './components/Notes';
import Error404 from './components/Error/404';
import Coins from './components/Coins';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/notes" component={Notes} exact />
      <Route path="/notes/:noteId" component={Notes} exact />
      <Route path="/coins" component={Coins} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
