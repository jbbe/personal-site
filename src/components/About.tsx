import React, { Fragment } from 'react'
import { TabTitle } from './tabs/TabTitle'

interface Props {
    
}

export const About = (props: Props) => {
    return (
        <Fragment>
            <TabTitle title="About Me" />
            <p>I am a full stack software engineer with experience designing, and implementing software solutions across
                the software stack.
            </p>
            <p>Age ... 24</p>
            <p>Residence ... Michigan</p>
            <p>Email ... joshbbe@mail.com</p>
        </Fragment>
    )
}
