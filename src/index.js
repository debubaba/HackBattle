import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import LandingBody from './Components/DesktopLandingBody.js'
import AboutUs from './Components/DesktopAbout.js'
import ContactUs from './Components/DesktopContactUs.js'
import SponsorPage from './Components/DesktopSponsors.js'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/Sponsors">Sponsors</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Sponsors" component={SponsorPage} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
