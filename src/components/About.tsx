import React from 'react'
import { TabTitle } from './tabs/TabTitle';
import { Email } from '../Constants';

export const About = () => {
    return <>
            <TabTitle title="About Me" />
            <p>I am a full stack software engineer with a passion for solving interesting problems
                by designing and implementing software solutions across software stacks. I love to explore
                the intersections of art and software. I'm always looking for ways to make software more elegant
                and more interesting.
            </p>
            <div style={{display: 'flex'}}><p style={{marginRight: '5px'}}>Email ...  </p>{Email}</div>
        </>;
}
