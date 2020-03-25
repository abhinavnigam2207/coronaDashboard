/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header';
import Overview from './components/overview';
import CountryView from './components/countryView';
import IndiaView from './components/indiaView';

const mainContainer = css`
  width: 65%;
  margin: 0 auto;
  @media screen and (max-width: 460px) { width: 95%; } 
  @media (min-width: 461px) and (max-width: 768px) { width: 85%; }
`;
const nav = css`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 460px) { width: 100%; } 
  @media (min-width: 461px) and (max-width: 768px) { width: 85%; }
`;
const navItem = css`
  padding: 10px;
  border: 1px solid grey;
  a{ text-decoration: none; }
`

export default () => {
  return (
    <div>
      <Header />
      <Router>
        <div css={nav}>
          <div css={[navItem]}><Link to="/coronaDashboard">India Tracker</Link></div>
          <div css={[navItem]}><Link to="/coronaDashboard/worldwide">World Tracker</Link></div>
        </div>
        <div css={mainContainer}>
          <Switch>
            <Route path="/coronaDashboard/worldwide"><Overview /><CountryView /></Route>
            <Route path="/coronaDashboard"><IndiaView /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};