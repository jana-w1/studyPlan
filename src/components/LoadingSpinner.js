import React from 'react';

const LoadingSpinner = () => (
    <div style={spinnerStyles}>
        <div style={spinner}></div>
        <p>Loading...</p>
    </div>
);

const spinnerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

const spinner = {
    border: '16px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #179BAE',
    width: '60px',
    height: '60px',
    animation: 'spin 2s linear infinite',
};

export default LoadingSpinner;
