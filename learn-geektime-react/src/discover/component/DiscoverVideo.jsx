import React from "react"
import * as styles from "./DiscoverVideo.module.css"
import DiscoverSectionHeader from "./DiscoverSectionHeader"
import column_media_play from "./image/column_media_play.png"


export default class DiscoverVideo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        }
    }

    render(){
        return(
            <div className={styles.main}>
               <DiscoverSectionHeader title={"视频合集"}/>
                <div className={styles.itemContainer}>
                    <VideItem title={"斜杠青年"} subtitle={"共4个视频"} icon="https://static001.geekbang.org/resource/image/ff/ac/ffd38fcd2e321525abc42ce861f152ac.png"/>
                    <VideItem title={"十年"} subtitle={"共4个视频"} icon={"https://static001.geekbang.org/resource/image/ff/ac/ffd38fcd2e321525abc42ce861f152ac.png"}/>
                    <VideItem title={"两界之间"} subtitle={"共4个视频"} icon={"https://static001.geekbang.org/resource/image/ff/ac/ffd38fcd2e321525abc42ce861f152ac.png"}/>
                    <VideItem title={"极客档案"} subtitle={"共4个视频"} icon={"https://static001.geekbang.org/resource/image/ff/ac/ffd38fcd2e321525abc42ce861f152ac.png"}/>
                </div>

            </div>
        )
    }
}

class VideItem extends React.Component{

    render() {
        return(
            <div className={styles.itemMain}>
                <div className={styles.itemWrapper}>
                    <div className={styles.itemLeft}>
                        <img src={this.props.icon} alt="" className={styles.itemIcon}/>
                    </div>
                    <div className={styles.itemRight}>
                        <div className={styles.itemTitle}>
                            {this.props.title}
                        </div>
                        <div className={styles.itemSubtitle}>
                            {this.props.subtitle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}