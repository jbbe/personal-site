import React from 'react'

interface Props {
    company: string;
    title: string;
    location: string;
    dates: string;
    bulletPoints: string[];
}

export const WorkEntry = (props: Props) => {
    const { company, dates, location, bulletPoints, title} = props;
    return (
        <div className='work-entry'>
            <h5>{company}</h5>
            <h5>{title}</h5>
            <h6>{location}</h6>
            <h6>{dates}</h6>
            <ul>
                {bulletPoints.map(b => <li>{b}</li>)}
            </ul>
        </div>
    )
}
