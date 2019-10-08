import React from "react"
import * as styles from "./DiscoverView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import shakeIcon from "./image/ic_main_shake.png"
import audioIcon from "./image/ic_main_audio.png"
import { WhiteSpace,InputItem,Carousel, } from 'antd-mobile';

export default class DiscoverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
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
                <WhiteSpace />
                <InputItem
                    clear
                    placeholder="搜索课程、课程内容、每日一课等"
                    ref={el => this.autoFocusInst = el}
                ></InputItem>
                <WhiteSpace />
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href=""
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://static001.geekbang.org/resource/image/22/14/22a307fc75c21870483ebb21ebe34e14.jpg`}
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