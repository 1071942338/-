import React from 'react';
import './App.css';
import { TabBar } from 'antd-mobile';
import TabbarItemIcon from "./component/TabbarItemIcon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1',
      hidden: false,
      fullScreen: false,
    };
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
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
              {this.renderContent('Life')}
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
              {this.renderContent('Koubei')}
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
              {this.renderContent('Friend')}
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
              {this.renderContent('My')}
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
              {this.renderContent('Life')}
            </TabBar.Item>
          </TabBar>
      </div>
    );
  }
  
}

export default App;
