"use client"

import Navbar from '../components/navbar'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Page() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        if (email === "" || password === "" || confirmPassword === "") {
            setError("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        // Example registration logic
        alert("Registration successful");
    };

    return (
        <div className='min-h-screen bg-bg1 flex justify-center items-center'>
            <Navbar />
            {/* Card */}
            <div className='flex w-[80vw]'>
                {/* Left Side */}
                <div className='bg-blue-900 h-[90vh] w-[40%]'></div>
                {/* Right Side */}
                <div className='bg-bg3 h-[90vh] justify-center flex flex-col items-center w-[60%]'>
                    <h1 className='text-7xl text-bg1 font-bold'>Sign Up</h1>
                    <h2 className='mt-2 font-bold text-bg-1 text-bg1 text-2xl'>Create your account</h2>

                    <form onSubmit={handleRegister} className='flex flex-col'>
                        <input
                            type="text"
                            className='mt-10 w-[300px] h-[50px] border-gray-500 border text-center'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="text"
                            className='mt-10 w-[300px] h-[50px] border-gray-500 border text-center'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className='mt-10 w-[300px] h-[50px] border-gray-500 border text-center'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className='mt-10 w-[300px] h-[50px] border-gray-500 border text-center'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className='text-red-500 mt-2'>{error}</p>}
                        <button type="submit" className='mt-10 bg-bg1 py-2 font-bold text-xl text-white w-fit mx-auto px-8'>Sign Up</button>
                    </form>

                    <div className='flex mt-10 font-bold text-lg text-bg1'>
                        <p>Already have an account?</p>
                        <Link href='/signin' className='ml-3 underline'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}