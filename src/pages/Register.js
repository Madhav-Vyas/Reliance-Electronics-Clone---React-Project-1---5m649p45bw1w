import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
    const [getData, setData] = useState({
        name: "test",
        email: "test6@gmail.com",
        password: "12345",
        appType: "ecommerce"
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
        }).catch((error) => {
            console.log(error);
            setError("internal server error please try after sometime");
        })
    }
    return (<>
        <div className='mb-96 mt-24'>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 underline mt-3 text-gray-600">Register to become part of our Family</h1>
            <div className="container mx-auto mt-16">
                <div className="flex justify-center">
                    <div className="w-full md:w-1/3">
                        {getError && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error:</strong>
                                <span className="block sm:inline">{getError}</span>
                            </div>
                        )}
                        <form onSubmit={onSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            <div className="mb-4">
                                <label htmlFor="appType" className="block text-gray-700 text-sm font-bold mb-2">
                                    App Type
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={getData.appType}
                                    onChange={onChangeHandler}
                                    name="appType"
                                    id="appType"
                                >
                                    <option value="music">Ecommerce</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className=" bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Register