import React, { Fragment } from 'react'
// import { TabTitle } from '../tabs/TabTitle'
import { ResumeEntry } from './ResumeEntry';


const TechIcons = [
        { name: 'Typescript', icon: "typescript.png"},
        { name: 'React', icon: "react.png"},
        { name: 'Rust', icon: "rust.png"},


        { name: 'node.js', icon: "nodejs.png"}, 
        { name: 'C#', icon: "csharp.jpg"}, 
        { name: 'Azure DevOps', icon: "azure.png"}, 

        { name: '', icon: ''},
        // { name: 'oCaml', icon: 'ocaml.jpg' },
        { name: 'three.js', icon: "threejs.jpg"}, 
    ];

export const Resume = () => {
    return  <>
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
                    [`Developed a collection of tools for 3D experience editing and content management. Responsibilities
                    involved developing web tools with Typescript, React, three.js and browser APIs, developing an
                    API with C and ASP.NET Core, and building smaller node.js driven services for content processing..`,
                    "Managed azure CI/CD deployment for multiple projects.",
                    `Created multiple one off 3D experiences for the web some including AR elements using three.js,
                    Blender and custom tools.`          
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
        </>;
}
