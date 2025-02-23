import { CiMap } from "react-icons/ci";
import { FaTrainTram } from "react-icons/fa6";
import { GiTransportationRings } from "react-icons/gi";
import React from 'react'
import Link from 'next/link'

function navbar() {
    return (
        <div className="fixed top-0 w-[100vw]">
            <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-500">R<span className="text-white">ush</span> Radar</h1>
                <div className="space-x-6 flex">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/map" className="hover:underline"><CiMap className="text-2xl" /></Link>
                    <Link href="/transport" className="hover:underline"><FaTrainTram className="text-2xl" /></Link>
                    <Link href="/crowded" className="hover:underline"><GiTransportationRings className="text-2xl" /></Link>
                    <Link href="/signin" className="hover:underline border-solid border-2 px-3 py-0.5 rounded-xl">Login</Link>
                </div>
            </nav>

        </div>
    )
}

export default navbar
