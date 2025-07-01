import React, { useState } from 'react';
import VideoLogo from '../CompanyLogoVideo/VideoLogo';
import InputField from '../inputFieldAll/InputField';
import './LogIn.css';

export default function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:8081/krushi/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Store JWT token and role in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);

            // Redirect to dashboard
            window.location.href = data.redirectUrl;

        } catch (err) {
            console.error('Login error:', err.message);
            setError(err.message);
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>
                <VideoLogo />
            </div>
            <div className='logInMainDiv'>
                <div className='logInSecondDiv'>
                    <h2>Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <InputField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {error && <p className="error">{error}</p>}

                        <button type="submit" className="add-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
