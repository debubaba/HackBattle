import React, {Component} from 'react'
import SocialTray from './socialIcons.js'
import Styles from './Styles/sideBar.module.css'

class sideBar extends Component{
  render(){
    return(
      <div className={Styles.containerSB}>
          <div className={Styles.containSB} id={Styles.ieeecslogo}>
            <img src={require('./Resources/ieeecsmainlogo.png')} alt="IEEECS Logo"></img>
          </div>
          <div className={Styles.containSB} id={Styles.frak}>
            <img className={Styles.frakimg} src={require('./Resources/1by4.png')} alt="1by4"></img>
          </div>
          <div className={Styles.containSB} id={Styles.social}>
            <SocialTray />
          </div>
      </div>
    )
  }
}

export default sideBar
