import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Nav from './containers/Nav/Nav';
import Dashboard from './containers/Dashboard/Dashboard';
import Portfolio from './containers/Portfolio/Portfolio';
import News from './containers/News/News';
import CoinForm from './containers/CoinForm/CoinForm';
import Chat from './containers/Chat/Chat';
import { addCoins } from './actions/index';
import { withRouter } from 'react-router-dom';
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
            <Route path="/chat" component={PageWrapper(Chat)} />
            <Route path="/dashboard" exact component={PageWrapper(Dashboard)} />
            <Route path="/portfolio" component={PageWrapper(Portfolio)} />
            <Route path="/news" component={PageWrapper(News)} />
            <Route path="/add" component={PageWrapper(CoinForm)} />
          </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(App));