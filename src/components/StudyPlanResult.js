import React from 'react';

const StudyPlanResult = ({ studyPlan }) => {
    return (
        <div style={resultContainerStyles}>
            <h2>Personalized Study Plan</h2>
            <div>
                <h3>Topics to Cover:</h3>
                <ul>
                    {studyPlan.topics.map((topic, index) => (
                        <li key={index} style={listItemStyles}>{topic}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Suggested Resources:</h3>
                <ul>
                    {studyPlan.resources.map((resource, index) => (
                        <li key={index} style={listItemStyles}>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                {resource.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Timeline:</h3>
                <p>{studyPlan.timeline}</p>
            </div>
        </div>
    );
};

const resultContainerStyles = {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const listItemStyles = {
    marginBottom: '10px',
};

export default StudyPlanResult;
