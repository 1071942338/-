import React from "react"
import * as styles from "./DiscoverView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import shakeIcon from "./image/ic_main_shake.png"
import audioIcon from "./image/ic_main_audio.png"
import { WhiteSpace,InputItem,Carousel, } from 'antd-mobile';
import {getBannerList } from "../../ajax"

export default class DiscoverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgHeight: 176,
            bannerList:[],
        }
    }
    componentDidMount() {

        getBannerList().then((data)=>{
            console.log("bannerList1:",data);
            this.setState({
                bannerList:data
            })
        }).catch((error)=>{
            console.log("bannerList2:",error);

        });
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
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.bannerList.map(element => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                        key={element.id}
                        href=""
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={element.cover}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
            </div>
        )
    }
}