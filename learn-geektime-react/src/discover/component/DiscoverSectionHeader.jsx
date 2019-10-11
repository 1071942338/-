import React from "react"
import * as styles from "./DiscoverSectionHeader.module.css"

export default class DiscoverSectionHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.leftColor}/>
                    <div className={styles.leftTitle}>{this.props.title}</div>
                </div>
                <div className={styles.right}>
                    查看全部
                </div>
            </div>
        )
    }
}