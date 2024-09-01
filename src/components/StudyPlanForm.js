import React, { useState } from 'react';

const StudyPlanForm = ({ onSubmit }) => {
    const [studyTopic, setStudyTopic] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!studyTopic.trim()) {
            setError('Please enter a topic to study.');
            return;
        }
        setError('');
        onSubmit(studyTopic);
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <input
                type="text"
                placeholder="What do you want to learn?"
                value={studyTopic}
                onChange={(e) => setStudyTopic(e.target.value)}
                style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>Generate Study Plan</button>
            {error && <div style={errorStyles}>{error}</div>}
        </form>
    );
};

const formStyles = {
    margin: '20px 0',
};

const inputStyles = {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    marginBottom: '10px',
};

const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#179BAE',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
};

export default StudyPlanForm;
