import React, {useState} from 'react';
import './collapsed-project.css';

const CollapsedProject = ({title, date, details, link}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='project-element'>
            <div onClick={toggleExpand} style={{cursor: 'pointer'}}>
                {title} | {isExpanded ? 'Click to Collapse ▲' : 'Click to Expand ▼'}
            </div>
            {isExpanded && (
                <div className={`project-details ${isExpanded ? 'expanded' : ''}`}>
                    {date && (
                        <p>{date}</p>
                    )}
                    <p>{details}</p>
                    {link && (
                        <p>
                            <a href={link}>
                                Link to Project
                            </a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CollapsedProject;