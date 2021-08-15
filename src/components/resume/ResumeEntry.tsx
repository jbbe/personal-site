import React from 'react'

interface Props {
    company: string;
    title?: string;
    location: string;
    dates: string;
    bulletPoints: string[];
}

export const ResumeEntry = (props: Props) => {
    const { company, dates, location, bulletPoints, title} = props;
    return (
        <div className='resume-entry'>
            <div className='dates'>{dates}</div>
            <h3>{company}</h3>
            <h5>{title}</h5>
            <h6>{location}</h6>
            <ul>
                {bulletPoints.map(b => <li key={b}>{b}</li>)}
            </ul>
        </div>
    )
}
