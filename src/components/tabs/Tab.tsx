import React, { ReactNode } from 'react'

interface Props {
    value: number;
    index: number;
    children: ReactNode;
}

export const Tab = (props: Props) => {
    const{ value, index, children } = props;
    return (
        <div className={`tab ${value === index ? '' : 'hidden'}`}>
            <div className='inner-tab-container'>

            {children}
            </div>
        </div>
    )
}
