import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper/PageWrapper';
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
            <Route exact path="/" render={() => (
              <Redirect to="/dashboard" />
            )}/>
            <Route path="/dashboard" exact component={PageWrapper(Dashboard)} />
            <Route path="/portfolio" component={PageWrapper(Portfolio)} />
            <Route path="/news" component={PageWrapper(News)} />
          </Switch>
      </div>
    )
  }
}
