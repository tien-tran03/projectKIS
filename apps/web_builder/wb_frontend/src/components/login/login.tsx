import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful: " + data.message);
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="
    flex 
    items-center 
    justify-center 
    min-h-screen
     bg-gray-50 
     px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <h1 className="
        text-3xl font-bold
         text-gray-800 
         mb-8 
         text-center">
          Login
        </h1>

        {/* Username Field */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="
            block 
            text-sm 
            font-medium
             text-gray-600 
             mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="
            w-full 
            px-4 
            py-3 
            border
             border-gray-300 
             rounded-lg 
             focus:outline-none 
             focus:ring
              focus:ring-blue-200"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="
            block 
            text-sm 
            font-medium
             text-gray-600 
             mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
            w-full 
            px-4 
            py-3 
            border
             border-gray-300 
             rounded-lg 
             focus:outline-none 
             focus:ring
              focus:ring-blue-200"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
          w-full
           bg-blue-600
            text-white 
            font-bold 
            py-3 px-4 
            rounded-lg
             hover:bg-blue-700 
             focus:outline-none 
             focus:ring
              focus:ring-blue-300"
        >
          Login
        </button>

        <p className="
        text-center 
        text-sm
         text-gray-500 
         mt-6">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};
