import React, {useEffect} from 'react';
import CollapsedProject from '../component/CollapsedProject';
import './projects.css';

const work_experience = [
    {
        title: "Software Security Engineer | RIT Cybersecurity Institute",
        date: "From April 2023 - August 2023",
        details: `This was my first internship! 
        I helped to contribute to a government-sponsored research project that focused on Software Bill of Materials (SBOM) and Vulnerability Expoitability eXchange (VEX) documents. 
        I developed tools relating to these documents, those being SBOM-in-a-Box and SBOM-Plugfest. 
        I also played a role as a contributor to a comprehensive research report regarding the creation of SBOM documents using both Open Source and Proprietary software/tools. 
        We showcased the inconsistencies within the many tools we researched and possible reasonings behind it.`
    },
    {
        title: "Website Designer | Our Stonehenge LLC",
        date: "From June 2020 - November 2023",
        details: `This was part of my family business. I helped to design and build up the business website using the WIX interface.`
    },
    {
        title: "Package Handler | United Parcel Service",
        date: "From May 2022 - July 2022",
        details: "Add details about this project!"
    },

];

const curr_projects = [
    {
        title: "Personal Portfolio Website",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/mattymo30.github.io"
    },
];

const professional_projects = [
    {
        title: "SBOM-in-a-Box/SBOM-Plugfest",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/SoftwareDesignLab/SBOM-in-a-Box"
    },
];

const academic_projects = [
    {
        title: "Implementation of Crytography Concepts in Linear Algebra",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/MATH-241-Honors-P"
    },
    {
        title: "E-Store: Shake and Pour",
        details: "Add details about this project!"
    },
    {
        title: "Implementation of Computer Science Theory Mathematical Results",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/cs-theory-project"
    }
];

const personal_projects = [
    {
        title: "Password Bank",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/password-bank"
    },
    {
        title: "Keylogger",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/Keylogger"
    },
    {
        title: "Instagram Quote Bot",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/instagram-quote-bot"
    },
    {
        title: "Address Book",
        details: "Add details about this project!",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/address-book"
    },
]


const Projects = () => {
    useEffect(() => {
        document.title = "Experience - Matthew Morrison";

    }, []);
    return (
        <div>
            <h1>Personal And Professional Experience</h1>

            <h2>Work Experience</h2>
                <div>
                    {work_experience.map((work, index) => (
                        <CollapsedProject key={index} title={work.title} date={work.date} details={work.details} link_info={work.link_info} link={work.link}/>
                    
                    ))}
                </div>

            <h2>Projects In Progress</h2>
                <div>
                    {curr_projects.map((proj, index) => (
                        <CollapsedProject key={index} title={proj.title} date={proj.date} details={proj.details} link_info={proj.link_info} link={proj.link}/>
                    
                    ))}
                </div>
            
            <h2>Projects Completed - Professional</h2>
                <div>
                    {professional_projects.map((proj, index) => (
                        <CollapsedProject key={index} title={proj.title} date={proj.date} details={proj.details} link_info={proj.link_info} link={proj.link}/>
                    
                    ))}
                </div>
            <h2>Projects Completed - Academic</h2>
                <div>
                    {academic_projects.map((proj, index) => (
                        <CollapsedProject key={index} title={proj.title} date={proj.date} details={proj.details} link_info={proj.link_info} link={proj.link}/>
                    
                    ))}
                </div>
            <h2>Projects Completed - Personal</h2>
                <div>
                    {personal_projects.map((proj, index) => (
                        <CollapsedProject key={index} title={proj.title} date={proj.date} details={proj.details} link_info={proj.link_info} link={proj.link}/>
                    
                    ))}
                </div>
        </div>
    )
}

export default Projects;