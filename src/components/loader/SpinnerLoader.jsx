// src/components/SpinnerLoader.js
import React from 'react';
import './SpinnerLoader.css';

const SpinnerLoader = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner" />
        </div>
    );
};

export default SpinnerLoader;
