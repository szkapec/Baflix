import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabDor from './TabDor'
import TabDevices from './TabDevices';
import TabPrice from './TabPrice';
import TabComponentOne from './TabContentOne';
import TabComponentTwo from './TabContentTwo';
import TabComponentThree from './TabContentThree';
import './tab.js.css';
import styled from 'styled-components';
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
                            <p><strong className="lgScreen">Żadnych zobowiązań <br/> Anuluj w dowolnym momencie</strong></p>
                            <span className="mdScreen">Anuluj</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active tab-selected' : null}`}>
                            <TabDevices/>
                            <p  style={{marginTop:"-5.3rem"}}><strong className="lgScreen">Oglądaj wszędzie, na każdym urządzeniu</strong></p>
                            <span className="mdScreen">Urządzenia</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active tab-selected' : null}`}>
                            <TabPrice/>
                            <StyledPriceP><strong className="lgScreen">Wybierz pakiet</strong></StyledPriceP>
                            <span className="mdScreen price">Cena</span>
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


const StyledPriceP = styled.p`
    margin: 0;
`