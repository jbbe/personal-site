import React, { Fragment } from 'react'
import { TabTitle } from './tabs/TabTitle'

interface Props {
    
}

export const About = (props: Props) => {
    return (
        <Fragment>
            <TabTitle title="About Me" />
            <p>I am a full stack software engineer with a passion for solving intersting problems
                by designing and implementing software solutions across
                software stacks.
            </p>
            <p>Age ... 24</p>
            <p>Residence ... Michigan</p>
            <p>Email ... joshbbe@mail.com</p>
        </Fragment>
    )
}
