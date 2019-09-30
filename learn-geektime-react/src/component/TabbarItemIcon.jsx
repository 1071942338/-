import React from "react"
import * as styles from "./TabbarItemIcon.module.css"
import ic_tabbar_discover from "./image/tabbar/ic_tabbar_discover.png";
import ic_tabbar_discoverhl from "./image/tabbar/ic_tabbar_discoverhl.png";
import ic_tabbar_mainframe from "./image/tabbar/ic_tabbar_mainframe.png";
import ic_tabbar_mainframehl from "./image/tabbar/ic_tabbar_mainframehl.png";
import ic_tabbar_tribe from "./image/tabbar/ic_tabbar_tribe.png";
import ic_tabbar_tribehl from "./image/tabbar/ic_tabbar_tribehl.png";
import ic_tabbar_study from "./image/tabbar/ic_tabbar_study.png";
import ic_tabbar_studyhl from "./image/tabbar/ic_tabbar_studyhl.png";
import ic_tabbar_me from "./image/tabbar/ic_tabbar_me.png";
import ic_tabbar_mehl from "./image/tabbar/ic_tabbar_mehl.png";

const IconMap = {
    "11":ic_tabbar_discover,
    "12":ic_tabbar_discoverhl,
    "21":ic_tabbar_mainframe,
    "22":ic_tabbar_mainframehl,
    "31":ic_tabbar_tribe,
    "32":ic_tabbar_tribehl,
    "41":ic_tabbar_study,
    "42":ic_tabbar_studyhl,
    "51":ic_tabbar_me,
    "52":ic_tabbar_mehl,
}

export default class TabbarItemIcon extends React.Component{
    
    getImage(value){
        if(!value) return null;
        return IconMap[value];
    }
    render(){
        return(<img className={styles.icon} src={this.getImage(this.props.srcKey)} alt=""></img>)
    }
}