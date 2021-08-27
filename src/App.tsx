import React, { useState } from 'react';
import { Tab, TabBar, TabContainer } from './components/tabs';
import { InfoContainer } from './components/infocontainer/InfoContainer';
import { Copyright } from './components/Copyright';

import './app.scss';
import { About } from './components/About';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';

function App() {
    const [tab, setTab] = useState<number>(0);

    const tabContents = [
        { title: 'About', icon: '/user.svg' },
        { title: 'Resume', icon: '/document.svg' },
        { title: 'Contact', icon: '/email.svg' },
    ];

    return (
        <div className="app-container">
            <div className='main-container'>
                <TabBar tab={tab} setTab={setTab} tabContents={tabContents} />
                <InfoContainer /> 

                <TabContainer>
                    <Tab value={tab} index={0}>
                        <About />
                    </Tab>
                    <Tab value={tab} index={1}>
                        <Resume />
                    </Tab>
                    <Tab value={tab} index={2}>
                        <Contact />
                    </Tab>
                </TabContainer>
        
            </div>
            <Copyright />
        </div>
    );
}

export default App;
