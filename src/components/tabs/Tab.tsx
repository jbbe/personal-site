import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
    value: number;
    index: number;
    overScrollHandler: (up: boolean) => void;
    children: ReactNode;
}

export const Tab = (props: Props) => {
    const{ value, index, children } = props;
    const [css, setCss] = useState(value === index ? '' : 'hidden');
    // const containerRef = useRef<HTMLDivElement> (null);

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
    }, [value, index, css]);

    // function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    // //     if(!containerRef.current) {
    // //         return;
    // //     }
    // //     const div = containerRef.current;
    // //     // if(div.)
    // //     console.log(e, div);
    // //     // if(div.clientHeight <= )
    // //     // if(div.scrollY)
    // // }

    return (
        <div className={`tab ${css}`}>
            <div className='inner-tab-container' 
                // onScroll={handleScroll}
                // ref={containerRef}
                >
                {children}
            </div>
        </div>
    )
}
