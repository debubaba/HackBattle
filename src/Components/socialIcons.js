import React, {Component} from 'react'
import Styles from './Styles/SocialTray.module.css'

class SocialTray extends Component {
  render(){
    return(
      <div className={Styles.social}>
        <div><a href=""><img src={require('./Resources/fblogo.png')} alt="FBLogo" /></a></div>
        <div><a href=""><img src={require('./Resources/fblogo.png')} alt="InstaLogo" /></a></div>
        <div><a href=""><img src={require('./Resources/fblogo.png')} alt="TwitterLogo" /></a></div>
      </div>
    )}
  }

export default SocialTray
