import React, {Component} from 'react';
import './App.css';
import LandingBody from './Components/DesktopLandingBody.js'
import AboutUs from './Components/DesktopAbout.js'
import ContactUs from './Components/DesktopContactUs.js'
import SponsorPage from './Components/DesktopSponsors.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import ParticlesBg from "particles-bg";


class App extends Component {
  constructor() {
   super();
   this.state = {
     name: "React"
   };
 }

 render() {
   let config = {
     num: [10, 5],
     rps: 0.1,
     radius: [7, 40],
     life: [3.5, 3],
     v: [2, 3],
     tha: [-40, 40],
     alpha: [0.6, 0],
     scale: [.1, 0.4],
     position: "all",
     color: ["#0F3C7A", "#0B132B", "#1C2541", "#5BC0BE", "#6FFFE9"],
     cross: "bound",
     // emitter: "follow",
     random: 20
   };

   if (Math.random() > 0.85) {
     config = Object.assign(config, {
       onParticleUpdate: (ctx, particle) => {
         ctx.beginPath();
         ctx.rect(
           particle.p.x,
           particle.p.y,
           particle.radius * 2,
           particle.radius * 2
         );
         ctx.fillStyle = particle.color;
         ctx.fill();
         ctx.closePath();
       }
     });
   }

  return (
    <div>
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
    <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  )
}
}
export default App;
