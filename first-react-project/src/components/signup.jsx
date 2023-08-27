import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import NavbarS from "./navbar_s";

const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, setselectedDate] = useState(null);

  const handleLogin = () => {
    // Add your authentication logic here (not included in this example)
    console.log("Creating account in...");
  };
  return (
    <div>
      <NavbarS />
      <div className="contact">
        <div className="contact-heading">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-bold text-center">Signup </h1>
            <br />
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2 ">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setselectedDate(date)}
                    placeholderText="Date of Birth"
                    dateFormat="dd/MM/yyyy"
                    maxDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    isClearable
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  transition-colors duration-300 ease-in-out dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleLogin}
                >
                  Sign Up
                </button>
              </div>
              <br />
              <div className="flex justify-center">
                <Link to={"/login"}>
                  <p className="mb-3 text-gray-800 ">
                    ALready Registered ? Login
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
