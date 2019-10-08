import React from "react"
import * as styles from "./MyView.module.css" 
import messageIcon from "./image/ic_main_message.png"
import audioIcon from "./image/ic_main_audio.png"
import TitleBar from "../../common/component/TitleBar"

export default class MyView extends React.Component {
    constructor(props){
        super(props);
    }
    getTitleBarItems(){
        const messageItem = <img src={messageIcon} alt="" style={{width:"28px",height:"21px"}}></img>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        
        return [messageItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="我的" items={this.getTitleBarItems()}></TitleBar>

                
            </div>
        )
    }
}