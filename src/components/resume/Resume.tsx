import React, { Fragment } from 'react'
import { TabTitle } from '../tabs/TabTitle'
import { WorkEntry } from './WorkEntry';

interface Props {
    
}

export const Resume = (props: Props) => {
    return (
        <Fragment>
            <TabTitle title="Resumé" />

            <h4>Education</h4>

            <h4>Work Experience</h4>
            <WorkEntry company={"Th3rdcoast Digital Solutions"} 
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
            <WorkEntry company={"University of Michigan, CAEN"} 
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