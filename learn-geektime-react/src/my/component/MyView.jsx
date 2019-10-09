import React from "react"
import * as styles from "./MyView.module.css" 
import TitleBar from "../../common/component/TitleBar"
import messageIcon from "./image/ic_main_message.png"
import audioIcon from "./image/ic_main_audio.png"
import ic_mine_account from "./image/ic_mine_account.png"
import ic_mine_buy from "./image/ic_mine_buy.png"
import ic_mine_order from "./image/ic_mine_order.png"
import ic_mine_group from "./image/ic_mine_group.png"
import ic_mine_daily from "./image/ic_mine_daily.png"
import ic_mine_gift from "./image/ic_mine_gift.png"
import ic_mine_shareget from "./image/ic_mine_shareget.png"
import ic_mine_friends from "./image/ic_mine_friends.png"
import ic_mine_help from "./image/ic_mine_help.png"
import ic_mine_set from "./image/ic_mine_set.png"
import { List,WhiteSpace } from 'antd-mobile';
const Item = List.Item;

export default class MyView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        }
    }
    getTitleBarItems(){
        const messageItem = <img src={messageIcon} alt="" style={{width:"28px",height:"21px"}}></img>;
        const audioItem = <img src={audioIcon} alt="" style={{width:"25px",height:"25px"}}></img>;
        
        return [messageItem,audioItem];
    }
    render(){
        return(
            <div className={styles.main}>
                <TitleBar title="我的" items={this.getTitleBarItems()}></TitleBar>

                <List>
                    <Item
                        thumb={ic_mine_account}
                        extra={"0.00"}
                        arrow="horizontal"
                        onClick={() => {}}
                        >
                        账户
                    </Item>
                    <Item
                        thumb={ic_mine_buy}
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        已购
                    </Item>
                    <Item
                        thumb={ic_mine_order}
                        arrow="horizontal"
                        onClick={() => {}}
                        >
                        商城订单
                    </Item>
                    <Item
                        thumb={ic_mine_group}
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        我的拼团
                    </Item>
                </List>
                <WhiteSpace/>
                <List >
                    <Item
                        thumb={ic_mine_daily}
                        arrow="horizontal"
                        onClick={() => {}}
                        >
                        我的每日一课
                    </Item>
                </List>
                <WhiteSpace/>
                <List >
                    <Item
                        thumb={ic_mine_gift}
                        arrow="horizontal"
                        onClick={() => {}}
                        >
                        礼券
                    </Item>
                    <Item
                        thumb={ic_mine_shareget}
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        分享有赏
                    </Item>
                    <Item
                        thumb={ic_mine_friends}
                        extra={"得30元"}
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        邀请好友
                    </Item>
                </List>
                <WhiteSpace/>
                <List >
                    <Item
                        thumb={ic_mine_help}
                        arrow="horizontal"
                        onClick={() => {}}
                        >
                        帮助与反馈
                    </Item>
                    <Item
                        thumb={ic_mine_set}
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        设置
                    </Item>
                </List>
                

            </div>
        )
    }
}