import React,{Component} from 'react'
import NavBar from './DesktopNavBar.js'
import SocialTray from './socialIcons.js'
import Styles from './Styles/ContactUs.module.css'

import SideBar from './sideBar3.js'

class ContactUs extends Component {
  render(){
    return(
      <div className={Styles.page, Styles.contain}>
        <NavBar />
        <SideBar />
        <div className={Styles.mainContact}>
              <div>
                <h1>Contact Us</h1>
              </div>
              <div>
                <img src={require('./Resources/map.png')} alt="map" />
              </div>
              </div>
            <div className={Styles.info}>
                <div>
                <h3>Address</h3>
                    <p>
                      <div>VIT University</div>
                      <div>Vellore Campus,Vellore,</div>
                      <div>Tamil Nadu 632014 </div>
                    </p>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <div>935565156616</div>
                  </div>
                  <div>
                    <h3>Mail</h3>
                    <div>hgacag@khca.com</div>
                  </div>
            </div>

      </div>

    )
  }
}

export default ContactUs
