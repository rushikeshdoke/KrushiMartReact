import React, { useState } from 'react';
import InputField from '../inputFieldAll/InputField';
import VideoLogo from '../CompanyLogoVideo/VideoLogo';
import { registerUser } from '../../api/useService';

export default function SingUpFrom() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        contact: '',
        role: '',
        krushiUserAddress: {
            city: '',
            district: '',
            addressLine1: '',
            addressLine2: ''
        }
    });

    const [errors, setErrors] = useState({});

    const validationConfig = {
        username: [
            { required: true, message: 'Please enter your name' },
            { minLength: 5, message: 'Name should be at least 5 characters long' },
        ],
        email: [
            { required: true, message: 'Please enter an email' },
            { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Please enter a valid email' },
        ],
        password: [
            { required: true, message: 'Please enter a password' },
            { minLength: 6, message: 'Password should be at least 6 characters long' },
        ],
        contact: [
            { required: true, message: 'Please enter your contact number' },
            { pattern: /^[0-9]{10}$/, message: 'Contact should be 10 digits' },
        ],
        role: [
            { required: true, message: 'Please select a user type' },
        ],
        'krushiUserAddress.city': [
            { required: true, message: 'Please enter city or village' },
        ],
        'krushiUserAddress.district': [
            { required: true, message: 'Please enter district' },
        ],
        'krushiUserAddress.addressLine1': [
            { required: true, message: 'Please enter address line 1' },
        ],
        'krushiUserAddress.addressLine2': [
            { required: true, message: 'Please enter address line 2' },
        ],
    };

    const validate = (data) => {
        const errorsData = {};
        Object.entries(validationConfig).forEach(([key, rules]) => {
            let value;
            if (key.includes('.')) {
                const [parent, child] = key.split('.');
                value = data[parent]?.[child];
            } else {
                value = data[key];
            }

            rules.some((rule) => {
                if (rule.required && !value) {
                    errorsData[key] = rule.message;
                    return true;
                }
                if (rule.minLength && value.length < rule.minLength) {
                    errorsData[key] = rule.message;
                    return true;
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    errorsData[key] = rule.message;
                    return true;
                }
                return false;
            });
        });

        setErrors(errorsData);
        return errorsData;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("krushiUserAddress.")) {
            const field = name.split(".")[1];
            setFormData((prevData) => ({
                ...prevData,
                krushiUserAddress: {
                    ...prevData.krushiUserAddress,
                    [field]: value
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateResult = validate(formData);
        if (Object.keys(validateResult).length > 0) return;

        console.log("Submitting data:", formData);

        try {
            await registerUser(formData);
            alert("User registered successfully!");

            // Optional: Reset form
            setFormData({
                username: '',
                email: '',
                password: '',
                contact: '',
                role: '',
                krushiUserAddress: {
                    city: '',
                    district: '',
                    addressLine1: '',
                    addressLine2: ''
                }
            });
            setErrors({});
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Something went wrong during registration.");
        }
    };

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ width: "50%" }}>
                <VideoLogo />
            </div>
            <div style={{ width: "50%" }}>
                <form onSubmit={handleSubmit}>
                    <h5 style={{
                        padding: '0px 0px 3px',
                        fontSize: '25px',
                        textAlign: 'center',
                        color: 'green',
                    }}>Registration Form</h5>

                    <InputField
                        label="User Name:"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                    />

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "50%" }}>
                            <div className="input-container">
                                <label>User Type</label>
                                <select
                                    onChange={handleChange}
                                    name="role"
                                    id="role"
                                    value={formData.role}
                                >
                                    <option value="">Select User Type</option>
                                    <option value="BUYER">BUYER</option>
                                    <option value="SELLER">SELLER</option>
                                    <option value="TRANSPORT">TRANSPORT</option>
                                </select>
                                {errors.role && (
                                    <span className="error-text" style={{ color: 'red', fontSize: '12px' }}>
                                        {errors.role}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <InputField
                                label="Contact"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                error={errors.contact}
                            />
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: '50%' }}>
                            <InputField
                                label="Email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                        </div>
                        <div style={{ width: '50%' }}>
                            <InputField
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: '10px' }}>
                        <div style={{ width: "50%" }}>
                            <InputField
                                label="City/Village"
                                id="city"
                                name="krushiUserAddress.city"
                                value={formData.krushiUserAddress.city}
                                onChange={handleChange}
                                error={errors['krushiUserAddress.city']}
                            />
                        </div>
                        <div style={{ width: '50%' }}>
                            <InputField
                                label="District"
                                id="district"
                                name="krushiUserAddress.district"
                                value={formData.krushiUserAddress.district}
                                onChange={handleChange}
                                error={errors['krushiUserAddress.district']}
                            />
                        </div>
                    </div>

                    <InputField
                        label="Address Line 1"
                        id="addressLine1"
                        name="krushiUserAddress.addressLine1"
                        value={formData.krushiUserAddress.addressLine1}
                        onChange={handleChange}
                        error={errors['krushiUserAddress.addressLine1']}
                    />

                    <InputField
                        label="Address Line 2"
                        id="addressLine2"
                        name="krushiUserAddress.addressLine2"
                        value={formData.krushiUserAddress.addressLine2}
                        onChange={handleChange}
                        error={errors['krushiUserAddress.addressLine2']}
                    />

                    <button type="submit" className="add-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}