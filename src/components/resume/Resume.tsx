import React, { Fragment } from 'react'
// import { TabTitle } from '../tabs/TabTitle'
import { ResumeEntry } from './ResumeEntry';


const TechIcons = [
        { name: 'Typescript', icon: "typescript.png"},
        { name: 'React', icon: "react.png"},
        { name: 'oCaml', icon: 'ocaml.jpg' },

        { name: 'node.js', icon: "nodejs.png"}, 
        { name: 'C#', icon: "csharp.jpg"}, 
        { name: 'Azure DevOps', icon: "azure.png"}, 

        { name: '', icon: ''},
        { name: 'three.js', icon: "threejs.jpg"}, 
    ];

export const Resume = () => {
    return (
        <Fragment>
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
                company={"University of Michigan"} 
                title="B.S. in Computer Science"
                location="Ann Arbor, MI" 
                dates="September 2015 - May 2020"
                bulletPoints={[]}
            />
            <div className='resume-title'>
                <img src={'suitcase.svg'} alt='' />
                <h3>Work Experience</h3>
            </div>
            <ResumeEntry company={"Th3rdcoast Digital Solutions"} 
                title="Developer"
                location="Grand Haven, MI"
                dates="June 2020 - Present"
                bulletPoints={
                    ["Developed an embeddable augmented reality model viewer for customer storefronts with Typescript and the WebXR API.",
                "Implemented the front end of a CMS for 3D models including an editor using React with Typescript and some sections of the backend using Node.js and ASP.NET Core.",
                "Reworked the front end of a React Electron app for managing neurometric data.",
                "Set up and managed CI/CD for multiple projects using the Azure ecosystem."
                ]}
            />
            <ResumeEntry company={"University of Michigan, CAEN"} 
                title="Help Desk Consultant & Student Manager"
                location="Ann Arbor, MI"
                dates="July 2018 - April 2020"
                bulletPoints={
                    ["Developed a desktop application for information gathering during issue reporting.",
                        "Provided help desk support by answering  questions, escalating issues, managing accounts, testing software, and writing documentation.",
                        "Trained and managed student employees beginning in May 2019.",
                        "Processed and analyzed system usage data with Python."
                ]}
            />
        </Fragment>
    )
}
