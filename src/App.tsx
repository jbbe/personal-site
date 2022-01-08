import React, { useState } from 'react';
import { Tab, TabBar, TabContainer } from './components/tabs';
import { InfoContainer } from './components/infocontainer/InfoContainer';
import { Copyright } from './components/Copyright';

import './app.scss';
import { About } from './components/About';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import SourceLink from './components/sourcelink/SourceLink';

const TotalTabs = 3;

function App() {
    const [tab, setTab] = useState<number>(0);

    const tabContents = [
        { title: 'About', icon: '/user.svg' },
        { title: 'Resume', icon: '/document.svg' },
        { title: 'Contact', icon: '/email.svg' },
    ];

    const scrollPast = (currentTab: number, up: boolean) => {
        if(!up && currentTab < TotalTabs -1) {
            setTab(currentTab++)
        }
        if(up && currentTab > 0) {
            setTab(currentTab--)
        }
    }

    return  <div className="app-container">
            <div className='main-container'>
                <TabBar tab={tab} setTab={setTab} tabContents={tabContents} />
                <InfoContainer /> 

                <TabContainer>
                    <Tab value={tab} 
                        index={0}
                        overScrollHandler={(up: boolean) => scrollPast(0, up)}>
                        <About />
                    </Tab>
                    <Tab 
                        value={tab}
                        index={1} 
                        overScrollHandler={(up: boolean) => scrollPast(1, up)}>
                        <Resume />
                    </Tab>
                    <Tab value={tab} 
                        index={2} 
                        overScrollHandler={(up: boolean) => scrollPast(2, up)}>
                        <Contact />
                    </Tab>
                </TabContainer>
        
            </div>
            <Copyright />
            <SourceLink />
        </div>;
}

export default App;
