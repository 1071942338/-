import React from "react"
import * as styles from "./DiscoverAudio.module.css"
import column_media_play from "./image/column_media_play.png"

export default class DiscoverAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.leftTop}>
                            <span className={styles.leftTopTitle}> 卖桃者说 </span>
                            <span> > </span>
                        </div>
                        <div className={styles.leftBottom}>
                            <img className={styles.leftBottomIcon} src={column_media_play} alt=""/>
                            <div className={styles.leftBottomText}>第106期 | 马斯克给创业者的第二个机会第二个机会</div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img className={styles.audioPhoto}
                             src={"https://static001.geekbang.org/account/avatar/00/13/6a/22/f081ac31.jpg"} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}