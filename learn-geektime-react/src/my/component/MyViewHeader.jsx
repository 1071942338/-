import React from "react"
import * as styles from "./MyViewHeader.module.css" 
import messageIcon from "./image/ic_main_message.png"
import audioIcon from "./image/ic_main_audio.png"
import { Carousel,  } from 'antd-mobile';

export default class MyViewHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            data: ['1', '2', '3'],
            imgHeight: 50,
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
        const messageItem = <img src={messageIcon} alt="" style={{width:"28px",height:"21px"}}></img>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        
        return [messageItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <img 
                            className={styles.headerLeftLeft} 
                            src="https://static001.geekbang.org/account/avatar/00/13/6a/22/f081ac31.jpg"
                            alt="">
                        </img>
                        <div className={styles.headerLeftRight}>
                            <div className={styles.headerUserName}>
                                极客时间
                            </div>
                            <div className={styles.headerPhoneNumber}>
                                185****7425
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.headerRightText}>
                            个人主页 >
                        </div>
                    </div>
                </div>
                <div className={styles.swiperContainer}>

                    <Carousel
                        autoplay={true}
                        dots={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a className={styles.carouselItem}
                            key={val}
                            href=""
                            >
                            <img
                                className={styles.carouselItemImg}
                                src={`https://static001.geekbang.org/resource/image/22/14/22a307fc75c21870483ebb21ebe34e14.jpg`}
                                alt=""
                            />
                            </a>
                        ))}
                    </Carousel>
                </div>
            </div>
        )
    }
}