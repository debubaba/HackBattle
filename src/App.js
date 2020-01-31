import React, {Component} from 'react';
import './App.css';
import LandingBody from './Components/DesktopLandingBody.js'
import AboutUs from './Components/DesktopAbout.js'
import ContactUs from './Components/DesktopContactUs.js'
import SponsorPage from './Components/DesktopSponsors.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group'


class App extends Component {
  render(){
  return (
    <Router>
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route path="/" exact component={LandingBody} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/sponsor" component={SponsorPage} />
          </Switch>
        </CSSTransition>
        </TransitionGroup>
    )}/>

    </Router>
  )
}
}
export default App;
