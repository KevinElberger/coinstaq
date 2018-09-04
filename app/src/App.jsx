import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Nav from './containers/Nav/Nav';
import Dashboard from './containers/Dashboard/Dashboard';
import Portfolio from './containers/Portfolio/Portfolio';
import News from './containers/News/News';
import { addCoins } from './actions/index';
import { getCoinList } from './utils/cryptoApi';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    getCoinList()
      .then(list => {
        this.props.dispatch(addCoins(list));
      });
  }

  render() {
    return (
      <div>
        <Nav />
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

export default connect()(App);