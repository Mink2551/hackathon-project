"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    if (email === "test@example.com" && password === "password123") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-[800px]">
        <h1 className="text-5xl font-bold mb-4 text-center">Welcome !</h1>
        <p className="text-gray-600 text-center mb-4">Enter your credentials to sign in</p>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <div className="text-center mt-3">
          <Link href="/signUp" className="text-blue-500 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

