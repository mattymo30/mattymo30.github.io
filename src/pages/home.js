import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


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

                <div className="head-section">
                    <div className="head-section-left">
                        <h1>Matthew Morrison</h1>
                        <div className='social-links'>
                            <div className="social-link">
                                <a href="https://www.linkedin.com/in/matthewsmorrison30/">
                                    Linkedin
                                </a>
                            </div>
                            <div className='social-link'>
                                <a href="https://github.com/mattymo30">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="resume-link">
                        <a href={`${process.env.PUBLIC_URL}/docs/Morrison_Matthew_Resume_CS_6.0.pdf`}>
                            <button className="resume-button">Check Out My Resume</button>
                        </a>
                        </div>
                    </div>
                </div>

                <div className="about-intro">
                    <h1>About Me</h1>

                    <div className="about-p">
                    <h3>Student at RIT</h3>
                    <p>
                        I am an Undergraduate Student at Rochester Institute of Technology.
                        I am majoring in Computer Science and minoring in Free and Open-Source Software and Free Culture and Exercise Science.
                        My expected graduation date is in May 2026.
                    </p>
                    </div>

                    <div className="about-p">
                    <h3>Programming Experience</h3>
                    <p>
                        I am an avid programmer who is interested in growing my knowledge and skills within programming.
                        I have experience in Python, Java, C, C++, Angular, and HTML/CSS.
                        I am currently learning React!
                    </p>
                    </div>

                    <div className="about-p">
                    <h3>Agile Development</h3>
                    <p>
                        I am experienced to working within teams. From my previous intership to
                        course work, I am well versed in agile and scrum development.
                        I work well with teams and love collaboration!
                    </p>
                    </div>

                    <div className="about-p">
                    <h3>Eagerness to Learn and Develop</h3>
                    <p>
                        Whether learning a new programming language, having a new experience in Software Engineering or
                        Research, or just working on a life skill, I love tackling new challenges and perfecting skills.
                    </p>
                    </div>
                    <button className = "lm-button">Learn More About Me!</button>
                </div>

                <div className="pc-container">
                    <NavLink exact to="/experience">
                        <button className="projects-b" onClick={scrollToTop}>Check Out Some Projects I've Worked On!</button>
                    </NavLink>
                    <NavLink exact to ="/contact">
                        <button className="contact-b" onClick={scrollToTop}>Interested In Reaching Out?</button>
                    </NavLink>
                </div>
                </section>

        </div>
    );
};

export default Home;
