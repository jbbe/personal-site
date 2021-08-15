import React from 'react'

interface Props {
    title: string;
    icon: string;
}

export const TabTitle = (props: Props) => {
    return (
        <h3 className='tab-title'>
            {props.title}
        </h3>
    )
}
