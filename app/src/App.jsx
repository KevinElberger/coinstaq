import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Portfolio from './components/Portfolio/Portfolio';
import News from './components/News/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
    )
  }
}
