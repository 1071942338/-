import React from "react"
import * as styles from "./LectureView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import searchIcon from "./image/ic_main_search.png"
import audioIcon from "./image/ic_main_audio.png"

export default class LectureView extends React.Component {
    constructor(props){
        super(props);
    }
    getTitleBarItems(){
        const searchItem = <img src={searchIcon} alt="" style={{width:"28px",height:"21px"}}></img>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        
        return [searchItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="讲堂" items={this.getTitleBarItems()}></TitleBar>

            </div>
        )
    }
}