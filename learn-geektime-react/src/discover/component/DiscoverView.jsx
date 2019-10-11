import React from "react"
import * as styles from "./DiscoverView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import shakeIcon from "./image/ic_main_shake.png"
import audioIcon from "./image/ic_main_audio.png"
import { WhiteSpace,InputItem,} from 'antd-mobile';
import {getBannerList } from "../../ajax"
import DiscoverAudio from  "./DiscoverAudio"
import DiscoverBanner from  "./DiscoverBanner"



export default class DiscoverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    getTitleBarItems(){
        const shakeItem = <img src={shakeIcon} alt="" style={{width:"28px",height:"21px"}}/>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}/>;
        
        return [shakeItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="发现" items={this.getTitleBarItems()}/>
                <WhiteSpace />
                <InputItem
                    clear
                    placeholder="搜索课程、课程内容、每日一课等"
                    ref={el => this.autoFocusInst = el}
                />
                <WhiteSpace />
                <DiscoverBanner/>
                <WhiteSpace/>
                <DiscoverAudio/>
            </div>
        )
    }
}