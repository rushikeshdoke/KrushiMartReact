import React from 'react';
import './InputField.css'
export default function InputField({ label, id, name, value, onChange, type = "text", error }) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && (
                <span className="error-text" style={{ color: 'red', fontSize: '12px' }}>
                    {error}
                </span>
            )}
        </div>
    );
}
