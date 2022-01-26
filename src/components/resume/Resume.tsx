import React, { Fragment } from 'react'
// import { TabTitle } from '../tabs/TabTitle'
import { ResumeEntry } from './ResumeEntry';
import resume from '../../resume.json';

const TechIcons = [
    { name: 'Typescript', icon: "typescript.png" },
    { name: 'React', icon: "react.png" },
    { name: 'Rust', icon: "rust.png" },

    { name: 'node.js', icon: "nodejs.png" },
    { name: 'C#', icon: "csharp.jpg" },
    { name: 'Azure DevOps', icon: "azure.png" },

    { name: '', icon: '' },
    // { name: 'oCaml', icon: 'ocaml.jpg' },
    { name: 'three.js', icon: "threejs.jpg" },
];

const UMich = resume.education[0];
const Work = resume.work;

export const Resume = () => {
    return <>
        {/* <TabTitle title="Resumé" /> */}
        <div className='resume-title'>
            {/* <img src={'skills.svg'} alt='' /> */}
            <h3>Skills</h3>
        </div>
        <div className='techIconContainer'>
            {TechIcons.map((t) =>
                <img className='techIcon' alt={t.name}
                    src={t.icon} key={t.name} title={t.name} />)
            }
        </div>
        <div className='resume-title'>
            <img src={'graduation-hat.svg'} alt='' />
            <h3>Education</h3>
        </div>
        <ResumeEntry
            company={resume.education[0].institution}
            title={UMich.studyType + " in " + UMich.area}
            location={UMich.location}
            dates={`${UMich.startDate} - ${UMich.endDate}`}
            bulletPoints={[]}
        />
        <div className='resume-title'>
            <img src={'suitcase.svg'} alt='' />
            <h3>Work Experience</h3>
        </div>
        {Work.map(w => <ResumeEntry key={w.company}
            company={w.company}
            location={w.location}
            title={w.position}
            dates={`${w.startDate} - ${w.endDate}`}
            bulletPoints={w.highlights}
        />)

        }
    </>;
}
