import React from "react"
import * as styles from "./DiscoverBanner.module.css"
import { Carousel, } from 'antd-mobile';
import {getBannerList } from "../../ajax"


export default class DiscoverBanner extends React.Component {
    constructor(props) {
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
    render() {
        return (
            <div className={styles.main}>
                    <Carousel
                        autoplay={true}
                        dots={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.bannerList.map(element => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                className={styles.itemContainer}
                                key={element.id}
                                href=""
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={element.cover}
                                    alt=""
                                    style={{ width: '100%',height:"100%" }}
                                    // onLoad={() => {
                                    //     // fire window resize event to change height
                                    //     window.dispatchEvent(new Event('resize'));
                                    //     this.setState({ imgHeight: 'auto' });
                                    // }}
                                />
                            </a>
                        ))}
                    </Carousel>
            </div>
        )
    }
}