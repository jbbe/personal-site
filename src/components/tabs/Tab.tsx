import React, { ReactNode, useEffect, useState } from 'react'

interface Props {
    value: number;
    index: number;
    children: ReactNode;
}

export const Tab = (props: Props) => {
    const{ value, index, children } = props;
    const [css, setCss] = useState(value === index ? '' : 'hidden');

    useEffect(() => {
        if(css === 'hidden') {
            if(value === index) {
                setCss('');
            }
        } else {
            if(value !== index) {
                setCss('slideout');
                setTimeout(() => {
                    setCss('hidden');
                }, 1000);
            }
        }
    }, [value, index, css])

    return (
        <div className={`tab ${css}`}>
            <div className='inner-tab-container'>
                {children}
            </div>
        </div>
    )
}
