import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import defaultRequest from "../api/defaultRequest";
import testLogin from "../api/testLogin";

// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

const Login = ({ user, setUser }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const [test, setTest] = useState(false);
  const navigate = useNavigate();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleLogin = async (e) => {
    e.preventDefault();

    testLogin(`${baseUrl}/loginReact?pass=${password}`).then((data) => {
      setTest(data);
      console.log("===========================");
      console.log(data);
      if (data) {
        setUser(true);
        navigate("/");
      }
    });
  };

  return (
    <div className=" bg-slate-200 h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col w-1/3 h-1/3">
        <form onSubmit={handleLogin}>
          <div class="mb-6">
            {/* <label
              for="password"
              class="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className=" flex justify-center w-full">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
          <div className=" flex justify-center w-full pt-3 text-red-600">
            {error}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
