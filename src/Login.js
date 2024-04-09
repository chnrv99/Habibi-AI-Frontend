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

            // make a basic landing page, title as Habibi AI, and some description, black background(tailwind), then finally at the bottom, display the google login link
            // with google
            <>
                <div className=" bg-slate-800 text-white h-[100vh]">
                    <div className="container p-10 flex">
                        <div>
                            <h1 className='text-4xl font-semibold p-2 text-slate-400'>Habibi AI</h1>
                            <p className='text-xl font-semibold mt-5 '>A chatbot that helps you with your daily tasks</p>
                            <p className='text-xl font-semibold mt-3 '>Login with Google to get started</p>
                            <br />
                            <br />
                        </div>

                        <div>
                            {/* create a login google button tailwind */}
                            <div className="flex justify-center mt-28 ml-32">
                                <button onClick={handleGoogleOauth} className='bg-blue-500 text-white p-2 rounded-md'>Login with Google</button>
                            </div>

                        </div>

                    </div>





                </div>
            </>

        )

    }
}

export default Login;