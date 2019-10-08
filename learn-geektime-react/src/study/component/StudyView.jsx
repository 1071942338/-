import React from "react"
import * as styles from "./StudyView.module.css" 
import audioIcon from "./image/ic_main_audio.png"
import TitleBar from "../../common/component/TitleBar"
export default class StudyView extends React.Component {
    constructor(props){
        super(props);
    }
    getTitleBarItems(){
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        return [audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="我的学习" items={this.getTitleBarItems()}></TitleBar>
            </div>
        )
    }
}