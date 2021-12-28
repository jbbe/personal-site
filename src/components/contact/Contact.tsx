import React, { Fragment } from 'react'
import { Email } from '../../Constants'
import { TabTitle } from '../tabs/TabTitle'

interface Props {
    
}

export const Contact = (props: Props) => {
    return (
        <Fragment>
            <TabTitle title="Contact Me" />

            <div className='contactEntry'>
                <img className='icon' src='github.png' alt='Github' />
                <a href='https://github.com/jbbe' >
                    <p>github.com/jbbe</p>
                </a>
            </div>
            <div className='contactEntry'>
                <img className='icon' src='at.png' alt='Email' />
                {Email}
            </div>
            
        </Fragment>
    )
}
