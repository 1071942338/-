import React from "react"
import * as styles from "./TitleBar.module.css" 

export default class TitleBar extends React.Component {
    constructor(props){
        super(props);
    }

    getRightItems(){
        const items = this.props.items;
        if(items === null || items === undefined){
            return null;
        }

        if(Array.isArray(items) === false){
            return null;
        }

        const elements = [];
        items.map((element)=>{
            let item = <div  className={styles.rightItem}>
                {element}
            </div>;
            elements.push(item);
        });

        return elements;
    }

    render(){
        return(
            <div className={styles.main}>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.rightItems}>{this.getRightItems()}</div>
            </div>
        )
    }
}