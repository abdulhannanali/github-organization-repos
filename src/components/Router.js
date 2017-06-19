import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import importComponent from '../asyncComponents/importComponent';

import Header from './Header';
import NavLink from './NavLink';

const App = importComponent(() => import('./App'));
const RepoInfo = importComponent(() => (import('./RepoInfo')));
const About = importComponent(() => (import('./About')));

/**
 * Considering two solutions to the problem of better Async Reloading,
 * where we are just not showing 
 * a React Component rendering for the time user loads 
 * the screen.
 * 
 * This is going to be plain awful user experience, and not a 
 * very good if we intend to do  Animations
 * 
 * Approach 1: An async component taking in a Loader as well as Error Component.
 * Approach 2: 
 *  An async component that takes back to the route we want to go to,
 *  incase the component does not load for us
 */

const { BASE_NAME = '/' } = process.env;

const MainRouter = () => {
  return (
    <Router basename={BASE_NAME}>
      <div className="App">
        <Header />
        <NavLink />

        <div className="container">
          <Switch>
            <Route path="/" exact component={App}></Route>
            <Route path="/repo/:organization/:repo" component={RepoInfo}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={() => (
              <div className="NoMatch">
                <h1 style={{ color: 'red' }}>404! Page not found</h1>
                <h3>You seem to be sneaking into wrong place.</h3>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainRouter;