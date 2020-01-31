import React, {Component} from 'react'
import Styles from './Styles/DesktopNavBar.module.css'
import LandingBody from './DesktopLandingBody.js'
import AboutUs from './DesktopAbout.js'
import ContactUs from './DesktopContactUs.js'
import SponsorPage from './DesktopSponsors.js'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render(){
    return(
      <div>
          <label>
          <input type="checkbox" />
          <span className={Styles.menu}> <span className={Styles.hamburger}></span> </span>
          <ul>
                  <Link to='/' >
                    <li><a href="#">Home</a></li>
                  </Link>
                  <Link to='/about' >
                    <li><a href="#">About Us</a></li>
                  </Link>
                  <Link to='/sponsor' >
                    <li><a href="#">Sponsors</a></li>
                  </Link>

                  <Link to='/contact' >
                    <li><a href="#">Contact Us</a></li>
                  </Link>
          </ul>
          </label>
      </div>
    )
  }
}

export default NavBar
