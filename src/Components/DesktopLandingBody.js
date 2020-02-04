import React, {Component} from 'react'
import NavBar from './DesktopNavBar.js'
import SocialTray from './socialIcons.js'
import Styles from './Styles/DesktopLandingPage.module.css'
import SideBar from './sideBar.js'

class LandingBody extends Component {
  render(){
    return(
      <div className={Styles.page, Styles.contain} >
            <NavBar />
            <SideBar pic="two" />
            <div className={Styles.Mainimage}>
                <div className={Styles.MainimageIn}>
                  <div>
                    <img src={require('./Resources/hblogo1.png')} alt="HackBattleLogo" className={Styles.hblogo}/>
                  </div>
                  <div>
                    <h1>20th - 21st March</h1>
                  </div>
                  <div>
                    <a href="">
                      <img src={require('./Resources/registerButton.png')} alt="RegisterButton" className={Styles.registerButton} />
                    </a>

                  </div>
                </div>
                </div>
                <div className={Styles.rocket}>
                  <img src={require('./Resources/hblogo2.png')} alt="HackBattleRocket" className={Styles.rocketImage} />

                </div>



        </div>

    )
  }
}

export default LandingBody
