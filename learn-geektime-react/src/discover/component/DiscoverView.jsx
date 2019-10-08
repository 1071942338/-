import React from "react"
import * as styles from "./DiscoverView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import shakeIcon from "./image/ic_main_shake.png"
import audioIcon from "./image/ic_main_audio.png"

export default class DiscoverView extends React.Component {
    constructor(props){
        super(props);
    }

    getTitleBarItems(){
        const shakeItem = <img src={shakeIcon} alt="" style={{width:"28px",height:"21px"}}></img>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        
        return [shakeItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="发现" items={this.getTitleBarItems()}></TitleBar>
                
            </div>
        )
    }
}