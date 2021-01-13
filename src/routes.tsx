import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from './components/BasicLayout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import TradePage from './pages/TradePage';
import RedeemPage from './pages/RedeemPage';
import CollectionPage from './pages/CollectionPage';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <BasicLayout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/explore">
              <ExplorePage />
            </Route>
            <Route exact path="/market/:marketAddress">
              <TradePage />
            </Route>
            <Route exact path="/redeem/:mintAddress">
              <RedeemPage />
            </Route>
            <Route exact path="/collection">
              <CollectionPage />
            </Route>
          </Switch>
        </BasicLayout>
      </HashRouter>
    </>
  );
}
