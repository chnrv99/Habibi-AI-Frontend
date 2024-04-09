// Login.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('jwt');

        if (token) {
            localStorage.setItem('token', token);
            console.log("Token receieved: ", token)
        }
    }, []);

    const handleGoogleOauth = () => {
        window.location.href = 'http://localhost:3000/google';
    }

    if (localStorage.getItem('token')) {
        window.location.href = '/chat';
    }
    else {
        return (
            // create a basic login page, where there is a link for google
            // oauth
            

            <Link onClick={handleGoogleOauth} className='text-3xl font-semibold underline'>Google Login</Link>
        )

    }
}

export default Login;