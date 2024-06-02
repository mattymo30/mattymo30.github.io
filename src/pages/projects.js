import React, { useState, useEffect } from 'react';
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
        details: `This was part of my family business. 
        I helped to design and build up the business website using the WIX interface.
        This included conceptualizing, planning, and building the website.
        I also helped to maintain the site as edits or updates were necessary.`
    },
    {
        title: "Package Handler | United Parcel Service",
        date: "From May 2022 - July 2022",
        details: `This was my part-time position before my first semester at RIT.
        I helped to ensure that packages were not damaged, misplaced, or lost in a timely manner to their respective destination.
        On average, I help to successfully handle 500+ packages nightly.`
    },

];

const curr_projects = [
    {
        title: "Personal Portfolio Website",
        details: `This is the current website you're looking at! 
        I am learning React.js and how to build up a user-friendly website to help display my projects and experiences to the public.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/mattymo30.github.io"
    },
];

const professional_projects = [
    {
        title: "SBOM-in-a-Box/SBOM-Plugfest",
        details: `This was the main project I contributed to during my internship at the RIT Cybersecurity Institute.
        This project's goal is to help generate  Software Bill of Materials (SBOM) and Vulnerability Exploitability eXchange (VEX) documents.
        The project is also capable of grading SBOM using a series of metric tests, compare SBOM documents, and merge SBOMs into a single unified document.
         mainly focused on the SBOM metrics and VEX generation.`,
        link_info: "GitHub Repository",
        link: "https://github.com/SoftwareDesignLab/SBOM-in-a-Box"
    },
];

const academic_projects = [
    {
        title: "Implementation of Crytography Concepts in Linear Algebra",
        details: `This project was the second honors option I have implemented. This served as an introduction to C++ and to cryptography concepts that involved linear algebra or number theory concepts. I wanted to challenge myself by learning a new programming language with this project, and I ultimately decided to utilize C++ due to its applications in real-world software.\n

        I implemented three parts to this project in C++:\n
        RSA,
        Hill Cipher,
        Elliptic Curve Cryptography (ECC).
        I also presented my project and what I learned to my linear algebra class. This helped to demonstrate my understanding of the number theory and cryptography concepts my professor taught me and discussed with me during the semester.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/MATH-241-Honors-P"
    },
    {
        title: "Movie Database Project",
        details: `This was a semester-long project involving my Principles of Data Management course. My group had to develop a database using PostgreSQL of a basic movie database, similar to Netflix or Hulu, to showcase our understanding of databases and finding data analytics. We presented to our professor a Python project that allowed users to perform actions such as watch movies, create collections of movies, and search based on contributors and other factors.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/CSCI-320-36"
    },
    {
        title: "E-Store: Shake and Pour",
        details: `This was a semester-long project involving my Intro to Software Engineering course.
        My group and I had to create an e-store application utilizing Angular.js and Java Boot Strap on the back end.
        This project taught us how to work in an Agile environment, utilizing a scrum process to complete the project in the semester's time.`
    },
    {
        title: "Implementation of Computer Science Theory Mathematical Results",
        details: `This was the first honors project I completed as part of my requirements in the honors college.
        I developed a Python program that highlighted principle and results that was learned throughout the Intro to Computer Science Theory course.
        This included results from automata theory, formal languages, and computability. 
        By visualizing these complex mathematical results learned, it helped to deepen my understanding of the theoretical conepts behind Computer Science.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/cs-theory-project"
    }
];

const personal_projects = [
    {
        title: "Password Bank",
        details: `This was one of my first personal projects. 
        I constructed a program using Python's Tkinter package to be able to hold multiple users' login information within binary files.
        These were encrypted using Pyca cryptography's symmetric encryption recipe.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/password-bank"
    },
    {
        title: "Instagram Quote Bot",
        details: `Simple program that utilizes a site that generates a quote every day.
        This would take the quote generated and turn it into a simple image that can be posted on Instagram, given that you provide credentials to an account.`,
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/instagram-quote-bot"
    },
    {
        title: "Address Book",
        details: "Utilizing the Tkinter package. I constructed an address book that can hold different people's information, such as contact information and addresses.",
        link_info: "GitHub Repository",
        link: "https://github.com/mattymo30/address-book"
    },
]


const Projects = () => {

    const [showAllWorkExperience, setShowAllWorkExperience] = useState(false);
    const [showAllCurrProjects, setShowAllCurrProjects] = useState(false);
    const [showAllProfessionalProjects, setShowAllProfessionalProjects] = useState(false);
    const [showAllAcademicProjects, setShowAllAcademicProjects] = useState(false);
    const [showAllPersonalProjects, setShowAllPersonalProjects] = useState(false);

    useEffect(() => {
        document.title = "Experience - Matthew Morrison";

    }, []);

    const renderProjects = (projects, showAll) => {
        return projects.slice(0, showAll ? projects.length : 3).map((proj, index) => (
            <CollapsedProject key={index} title={proj.title} date={proj.date} details={proj.details} link_info={proj.link_info} link={proj.link} />
        ));
    }

    return (
        <div>
            <h1>Personal And Professional Experience</h1>

            <div className='explanation'>
                <p>This is a collection of all my work experience and project I've worked on, ranging from professional, academic, and personal projects. Click on each experience to learn more about it!</p>
            </div>

            <h2>Work Experience</h2>
            <div className='exp-container'>
                {renderProjects(work_experience, showAllWorkExperience)}
                {!showAllWorkExperience && work_experience.length > 3 && (
                    <button className='show-all-button' onClick={() => setShowAllWorkExperience(true)}>Show All Work Experience</button>
                )}
                {showAllWorkExperience && (
                    <button className='show-all-button' onClick={() => setShowAllWorkExperience(false)}>Show Less Work Experience</button>
                )}
            </div>

            <h2>Projects In Progress</h2>
            <div className='exp-container'>
                {renderProjects(curr_projects, showAllCurrProjects)}
                {!showAllCurrProjects && curr_projects.length > 3 && (
                    <button className='show-all-button' onClick={() => setShowAllCurrProjects(true)}>Show All Current Projects</button>
                )}
                {showAllCurrProjects && (
                    <button className='show-all-button' onClick={() => setShowAllCurrProjects(false)}>Show Less Current Projects</button>
                )}
            </div>
            
            <h2>Projects Completed - Professional</h2>
            <div className='exp-container'> 
                {renderProjects(professional_projects, showAllProfessionalProjects)}
                {!showAllProfessionalProjects && professional_projects.length > 3 && (
                    <button className='show-all-button' onClick={() => setShowAllProfessionalProjects(true)}>Show All Professional Projects</button>
                )}
                {showAllProfessionalProjects && (
                    <button className='show-all-button' onClick={() => setShowAllProfessionalProjects(false)}>Show Less Professional Projects</button>
                )}
            </div>

            <h2>Projects Completed - Academic</h2>
            <div className='exp-container'>
                {renderProjects(academic_projects, showAllAcademicProjects)}
                {!showAllAcademicProjects && academic_projects.length > 3 && (
                    <button className='show-all-button' onClick={() => setShowAllAcademicProjects(true)}>Show All Academic Projects</button>
                )}
                {showAllAcademicProjects && (
                    <button className='show-all-button' onClick={() => setShowAllAcademicProjects(false)}>Show Less Academic Projects</button>
                )}
            </div>

            <h2>Projects Completed - Personal</h2>
            <div className='exp-container'>
                {renderProjects(personal_projects, showAllPersonalProjects)}
                {!showAllPersonalProjects && personal_projects.length > 3 && (
                    <button className='show-all-button' onClick={() => setShowAllPersonalProjects(true)}>Show All Personal Projects</button>
                )}
                {showAllPersonalProjects && (
                    <button className='show-all-button' onClick={() => setShowAllAcademicProjects(false)}>Show Less Personal Projects</button>
                )}
            </div>

        </div>
    )
}

export default Projects;