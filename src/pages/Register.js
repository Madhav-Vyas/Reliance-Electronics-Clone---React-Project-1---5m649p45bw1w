import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
    const [getData, setData] = useState({
        name: "",
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
        if (!getData.name) {
            setError('userName is mandatory');
            return;
        }
        else if (!getData.email) {
            setError('email is mandatory');
            return;
        }
        else if (!getData.password) {
            setError('password cannot be empty');
            return;
        }
        axios.post('https://academics.newtonschool.co/api/v1/user/signup', getData, {
            headers: {
                projectID: '5m649p45bw1w'
            }
        }).then((result) => {
            console.log(result);
            navigate('/login');
            alert("You Have Been SucessFully Registerd Please login");
        }).catch((error) => {
            console.log(error);
            setError("internal server error please try after sometime");
        })
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
                                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={getData.name}
                                            onChange={onChangeHandler}
                                            name="name"
                                            id="name"
                                            autoComplete="off"
                                        />
                                    </div>
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
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>)
}

export default Register