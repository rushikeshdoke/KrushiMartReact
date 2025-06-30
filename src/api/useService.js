import axios from 'axios';

const API_BASE_URL = "http://localhost:8081";

export const registerUser = async (userData) => {
    console.log(userData);

    try {
        const response = await axios.post(`${API_BASE_URL}/krushi/register`, userData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("User created:", response.data);
    } catch (error) {
        console.error("Error creating user:", error.response?.data || error.message);
    }
};
