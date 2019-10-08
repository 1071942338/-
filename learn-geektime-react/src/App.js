import React from 'react';
import './App.css';
import { TabBar } from 'antd-mobile';
import TabbarItemIcon from "./index/component/TabbarItemIcon";
import DiscoverView from "./discover/component/DiscoverView"
import LectureView from "./lectureHall/component/LectureView"
import TribeView from "./tribe/component/TribeView"
import StudyView from "./study/component/StudyView"
import MyView from "./my/component/MyView"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1',
      hidden: false,
      fullScreen: false,
    };
  }
  
  render(){
    return (

      <div className="App" >
       
        <TabBar
            unselectedTintColor="rgb(145,145,145)"
            tintColor="rgb(244,116,0)"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="发现"
              key="1"
              icon={<TabbarItemIcon srcKey="11"/>}
              selectedIcon={<TabbarItemIcon srcKey="12"/>}
              selected={this.state.selectedTab === '1'}
              onPress={() => {
                console.log("发现");
                this.setState({
                  selectedTab: '1',
                });
              }}
            >
              <DiscoverView></DiscoverView>
            </TabBar.Item>
            <TabBar.Item
              icon={<TabbarItemIcon srcKey="21"/>}
              selectedIcon={<TabbarItemIcon srcKey="22"/>}
              title="讲堂"
              key="2"
              selected={this.state.selectedTab === '2'}
              onPress={() => {
                this.setState({
                  selectedTab: '2',
                });
              }}
            >
              <LectureView></LectureView>
            </TabBar.Item>
            <TabBar.Item
              icon={<TabbarItemIcon srcKey="31"/>}
              selectedIcon={<TabbarItemIcon srcKey="32"/>}
              title="部落"
              key="3"
              selected={this.state.selectedTab === '3'}
              onPress={() => {
                this.setState({
                  selectedTab: '3',
                });
              }}
            >
              <TribeView></TribeView>
            </TabBar.Item>
            <TabBar.Item
              icon={<TabbarItemIcon srcKey="41"/>}
              selectedIcon={<TabbarItemIcon srcKey="42"/>}
              title="学习"
              key="4"
              selected={this.state.selectedTab === '4'}
              onPress={() => {
                this.setState({
                  selectedTab: '4',
                });
              }}
            >
              <StudyView></StudyView>
            </TabBar.Item>
            <TabBar.Item
              title="我的"
              key="5"
              icon={<TabbarItemIcon srcKey="51"/>}
              selectedIcon={<TabbarItemIcon srcKey="52"/>}
              selected={this.state.selectedTab === '5'}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: '5',
                });
              }}
            >
              <MyView></MyView>
            </TabBar.Item>
          </TabBar>
      </div>
    );
  }
  
}

export default App;
