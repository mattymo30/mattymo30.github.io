import React, {useEffect} from 'react';
import './collapsed-project.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CSSTransition } from 'react-transition-group';

const CollapsedProject = ({title, date, details, link_info, link}) => {
    
    useEffect(() => {
        const adjustMaxHeight = () => {
            const projectDetails = document.querySelector('.project-details');
            if (projectDetails) {
                const windowHeight = window.innerHeight;
                const projectDetailsTop = projectDetails.getBoundingClientRect().top;
                const maxAvailableHeight = windowHeight - projectDetailsTop - 20;
                projectDetails.style.maxHeight = maxAvailableHeight + 'px';
            }
        };

        adjustMaxHeight();

        window.addEventListener('resize', adjustMaxHeight);

        return () => {
            window.removeEventListener('resize', adjustMaxHeight); 
        };
    }, []);
    
    return (


        <div className="project-element">
            <Popup
                trigger={<div className="title" style={{ cursor: 'pointer' }}>{title}</div>}
                modal
                nested
                contentStyle={{
                    border: 'none',
                    borderRadius: '25px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                overlayStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            >   
                {close => (
                    <CSSTransition
                    in={true}
                    appear={true}
                    timeout={2500}
                    classNames="popup-transition"
                    >
                        <div className="project-details">
                            <p className='p-title'>{title}</p>
                            {date && <p>{date}</p>}
                            <p>{details}</p>
                            {link && (
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <button className='link-button'>{link_info}</button>
                                    </a>
                            )}
                            <button className='close-button' onClick={close}>Close Page</button>
                        </div>
                    </CSSTransition>
                )}
            </Popup>
        </div>
    );
};

export default CollapsedProject;