/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./page/about.jsx";
import HomePage from "./page/home.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
