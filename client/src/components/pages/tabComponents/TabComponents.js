import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabDor from './TabDor'
import TabDevices from './TabDevices';
import TabPrice from './TabPrice';
import TabComponentOne from './TabContentOne';
import TabComponentTwo from './TabContentTwo';
import TabComponentThree from './TabContentThree';
import './tab.js.css';
class TabComponents extends Component {
    state = {
        tabIndex: 0,
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'active tab-selected' : null}`}>
                            <TabDor/>
                            <p><strong className="lgScreen">No commitments <br/> Cancel online at anytime</strong></p>
                            <span className="mdScreen">Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null}`}>
                            <TabDevices/>
                            <p  style={{marginTop:"-5.3rem"}}><strong className="lgScreen">Watch anywhere</strong></p>
                            <span className="mdScreen">Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null}`}>
                            <TabPrice/>
                            <p><strong className="lgScreen">Pick your price</strong></p>
                            <span className="mdScreen">Price</span>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <TabComponentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabComponentTwo/>
                    </TabPanel>
                    <TabPanel>
                        <TabComponentThree/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabComponents;