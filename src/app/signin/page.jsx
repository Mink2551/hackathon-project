"use client"

import Navbar from '../components/navbar'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        if (email === "" || password === "") {
            setError("Please fill in all fields");
            return;
        }
        // Example login logic
        if (email === "test@example.com" && password === "password") {
            alert("Login successful");
        } else {
            setError("Invalid email or password");
        }
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
                    <h1 className='text-7xl text-blue-900 font-bold'>Welcome !</h1>
                    <h2 className='mt-2 font-bold text-bg-2 text-blue-900 text-2xl'>Enter your credentials to sign in</h2>

                    <form onSubmit={handleLogin} className='flex flex-col'>
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
                        {error && <p className='text-red-500 mt-2'>{error}</p>}
                        <button type="submit" className='mt-10 py-2 bg-blue-900 font-bold text-xl text-white w-fit mx-auto px-8'>Sign In</button>
                    </form>

                    <p className='text-xl font-bold mt-4 text-blue-900 underline'>Forgot Password ?</p>

                    <div className='flex mt-10 font-bold text-lg text-blue-900'>
                        <p>Don't have an account?</p>
                        <Link href='/signup' className='ml-3 underline'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}