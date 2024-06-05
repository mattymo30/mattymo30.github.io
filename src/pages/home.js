import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";


const Home = () => {
    useEffect(() => {
        document.title = "Home - Matthew Morrison";

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
                <section id="colorlib-hero" class="js-fullheight" data-section="home">
                <noscript>You need to enable JavaScript to run this app.</noscript>

                <hr/>

                <div className="head-section">
                    <div className="head-section-left">
                        <h1>Matthew Morrison</h1>
                        <h2>CS Student at RIT '26</h2>
                        <div className='social-links'>
                            <div className="social-link">
                                <a href="https://www.linkedin.com/in/matthewsmorrison30/">
                                    <FaLinkedin style={{fontSize: '100px'}}/>
                                </a>
                            </div>
                            <div className='social-link'>
                                <a href="https://github.com/mattymo30">
                                    <FaGithubSquare style={{fontSize: '100px'}}/>
                                </a>
                            </div>
                            <div className='social-link'>
                                <a href="mailto:msm8275@rit.edu">
                                    <IoIosMailOpen style={{fontSize: '100px'}}/>
                                </a>
                            </div>
                        </div>
                        <div className="resume-link">
                        <a href={`${process.env.PUBLIC_URL}/docs/Morrison_Matthew_Resume_CS_6.0.pdf`}>
                            <button className="resume-button">View My Resume</button>
                        </a>
                        </div>
                    </div>
                </div>
                <hr/>
                <h2 className="about-header">About Me</h2>
                <div className="about-intro">

                    <div className="about-p">
                        <PiStudentBold style={{fontSize: '50px'}}/>
                        <h3>Student at RIT</h3>
                        <p>
                            I am an Undergraduate Student at Rochester Institute of Technology.
                            I am majoring in Computer Science and minoring in Free and Open-Source Software and Free Culture and Exercise Science.
                            My expected graduation date is in May 2026.
                        </p>
                    </div>

                    <div className="about-p">
                    <FaLaptopCode style={{fontSize: '50px'}}/>
                    <h3>Programming Experience</h3>
                    <p>
                        I am an avid programmer who is interested in growing my knowledge and skills within programming.
                        I have experience in Python, Java, C, C++, Angular, and HTML/CSS.
                        I am currently learning React!
                    </p>
                    </div>

                    <div className="about-p">
                    <RiTeamFill style={{fontSize: '50px'}}/>
                    <h3>Agile Development</h3>
                    <p>
                        I am experienced to working within teams. From my previous intership to
                        course work, I am well versed in agile and scrum development.
                        I work well with teams and love collaboration!
                    </p>
                    </div>

                    <div className="about-p">
                    <FaBrain style={{fontSize: '50px'}}/>
                    <h3>Eagerness to Learn and Develop</h3>
                    <p>
                        Whether learning a new programming language, having a new experience in Software Engineering or
                        Research, or just working on a life skill, I love tackling new challenges and perfecting skills.
                    </p>
                    </div>
                </div>

                <div className="pc-container">
                    <NavLink exact to="/experience">
                        <button className="projects-b" onClick={scrollToTop}>View My Projects & Experience</button>
                    </NavLink>
                    <NavLink exact to ="/contact">
                        <button className="contact-b" onClick={scrollToTop}>Contact Me</button>
                    </NavLink>
                </div>
                </section>

        </div>
    );
};

export default Home;
