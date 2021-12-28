import React, { Fragment } from 'react'
import { TabTitle } from './tabs/TabTitle';
import { Email } from '../Constants';

export const About = () => {
    return <>
            <TabTitle title="About Me" />
            <p>I am a full stack software engineer with a passion for solving interesting problems
                by designing and implementing software solutions across  software stacks.
            </p>
            <p>Age ... 24</p>
            <p>Residence ... Michigan</p>
            <div style={{display: 'flex'}}><p style={{marginRight: '5px'}}>Email ...  </p>{Email}</div>
        </>;
}
