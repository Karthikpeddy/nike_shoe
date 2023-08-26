import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here (not included in this example)
    console.log("Logging in...");
  };

  return (
    <div className="contact">
      <div className="contact-heading">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-lg font-bold text-center">Login </h1>
          <br />
          <form>
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                pattern="[a-z]{1,15}"
                title="Must Contain Only lowercase letters and upto only 15 characters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <br />
            <Link to={"/signup"}>
              <p className="mb-3 text-gray-800 ">Not Registered ? Signup</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
