import React, {Component} from 'react'
import NavBar from './DesktopNavBar.js'
import SocialTray from './socialIcons.js'
import SimpleSlider from './Slider.js'
import Styles from './Styles/Sponsors.module.css'
import SideBar from './sideBar.js'

class SponsorPage extends Component {
  render(){
    return(
      <div className={Styles.page, Styles.contain}>
        <NavBar />
        <SideBar />
        <div className={Styles.mainSponsor}>
          <div className={Styles.mainSponsorIn}>
            <div className={Styles.title}>
              <h1>Sponsors</h1>
            </div>
            <div className={Styles.slider}>
              <SimpleSlider />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default SponsorPage
