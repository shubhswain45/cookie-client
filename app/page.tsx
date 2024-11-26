"use client"

import axios from 'axios';

export default function SetCookieButton() {
    const setCookie = async () => {
        try {
            const response = await axios.get('https://cookie-server-ptkf.onrender.com/set-cookie', {
                withCredentials: true, // Important for cookies
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error setting cookie:', error);
        }
    };

    return <button onClick={setCookie}>Set Cookie</button>;
}
