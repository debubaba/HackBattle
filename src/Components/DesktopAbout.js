import React, {Component} from 'react'
import NavBar from './DesktopNavBar.js'
import SocialTray from './socialIcons.js'
import Styles from './Styles/DesktopAbout.module.css'
import SideBar from './sideBar1.js'

class AboutUs extends Component {
  render(){
    return(
      <div className={Styles.page, Styles.contain}>
        <NavBar />
        <SideBar />
        <div className={Styles.mainAbout}>
              <div>
                      <h1>About Us</h1>
                      <p>
                        We at IEEE-CS, strive to bring to you the better. And for ARCS, we left no stone unturned. We bring to you one of the most popular segment of ARCS: HackBattle'19. The 36-hour legacy Hackathon will be hosted in VIT, Vellore. It will present before you, a diverse array of domains for you and your team to choose from. Submit your innovative idea and you could be one of the Top 40 teams which earn their ticket to compete in the final Hack, where you shape your ideas into reality.
                      </p>

                  </div>
                  <div className={Styles.mainAboutImg}>
                        <a href="">
                        <img src={require('./Resources/VITregisterButton.PNG')} alt="RegisterButton"/>
                        </a>
                        <a href="">
                        <img src={require('./Resources/IEEECSregisterButton.png')} alt="RegisterButton" className={Styles.VIT}/>
                        </a>
                </div>
        </div>
      </div>
    )
  }

}


  export default AboutUs
