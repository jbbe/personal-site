import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export const TabContainer = (props: Props) => {
    return (
        <div className='tab-container'>
            {props.children}
        </div>
    )
}
