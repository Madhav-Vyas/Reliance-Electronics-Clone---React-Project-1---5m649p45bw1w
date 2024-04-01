import React, { useState } from 'react'
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
    const { onTokenHandler, onNameHandler } = useData();
    const [getData, setData] = useState({
        email: "",
        password: "",
        appType: ""

    })
    const [getError, setError] = useState(null);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setError(null);

        if (!getData.email) {
            setError('Email is mandatory');
            return;
        } else if (!getData.password) {
            setError('Password cannot be empty');
            return;
        }

        axios.post("https://academics.newtonschool.co/api/v1/user/login", getData, {
            headers: {
                projectID: "5m649p45bw1w"
            }
        }).then((result) => {
            onTokenHandler(result.data.token);
            onNameHandler(result.data.data.name);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            setError("Internal server error. Please try again later.");
        });
    }

    return (
        <>


            <div className='flex gap-5'>

                <div className='w-3/5'>
                    <img className=' mt-32 h-auto' src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"></img>
                </div>
                <div className='mb-8 mt-4'>

                    <div className="container w-96">
                        <div>
                            <div className="w-full">
                                {getError && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Error:</strong>
                                        <span className="block sm:inline">{getError}</span>
                                    </div>
                                )}
                                <form onSubmit={onSubmitHandler} className="bg-white shadow-md p-12 rounded-lg">


                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={getData.email}
                                            onChange={onChangeHandler}
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={getData.password}
                                            onChange={onChangeHandler}
                                            name="password"
                                            id="password"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button
                                            type="submit"
                                            className=" bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Proceed
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
// I've wrapped the form container in a div with the class container mx-auto to center it horizontally and add padding.

// The form container is then wrapped in a flex container with justify-center to center it vertically.

// Inside this container, I've used Tailwind's responsive classes (w-full md:w-1/3) to adjust the width of the form container. On mobile screens (w-full), the form will take up the full width of the screen, and on larger screens (md:w-1/3), it will take up one-third of the width.