import React from 'react';
import './App.css';

function Cover ({ children }) {
    return (
        <div className="cover">
            {children}
        </div>
    )
}

export default Cover;