import React from 'react'

type TabContent = { title: string, icon: string}

interface Props {
    tab: number;
    setTab: (t: number) => void;
    tabContents: TabContent[];
}

export const TabBar = (props: Props) => {
    const { tab, setTab, tabContents } = props;
    return (
        <div className='tab-bar'>
            {tabContents.map((t: TabContent, idx: number) => {
                return <div className={`tab-button ${tab === idx ? 'show' : 'hidden'}`} 
                    onClick={() => setTab(idx)}
                    key={t.title}>
                    <img className='tab-icon' src={t.icon} alt='' />
                    {t.title}
                </div>
            })}
        </div>
    )
}
