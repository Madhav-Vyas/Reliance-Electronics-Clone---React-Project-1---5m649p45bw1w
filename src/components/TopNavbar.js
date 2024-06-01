import axios from "axios";
import "../styles/App.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import Modal from "./Modal";

function TopNavbar() {
    const { getToken, getName, onTokenHandler, onNameHandler, searchTerm, searchTermHandler, totalCartItems, totalCartItemsHandler } = useData();
    const [getList, setList] = useState([]);
    const [logout, setLogout] = useState(false);
    const [logoutMob, setLogoutMob] = useState(false);
    const navigate = useNavigate();

    const closeModal = () => {
        setLogout(false);
    }

    ///------------------------------------Logic of closing box when cliked outside----------

    // const boxRef = useRef(null);

    // // Function to handle click outside
    // const handleClickOutside = (event) => {
    //     if (boxRef.current && !boxRef.current.contains(event.target)) {
    //         console.log(boxRef.current);
    //         console.log(event.target);
    //         console.log("handleoutside function if condition");
    //         setLogout(false);
    //     }
    // };

    // useEffect(() => {
    //     if (logout) {
    //         document.addEventListener('click', handleClickOutside, { capture: true });
    //     } else {
    //         document.removeEventListener('click', handleClickOutside, { capture: true });
    //     }

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, { capture: true });
    //     };
    // }, [logout]);

    // // Function to stop propagation
    // const stopPropagation = (event) => {
    //     event.stopPropagation();
    // };

    // const handleLogout = () => {
    //     // Add your logout logic here
    //     setLogout(false);
    // };


    //---------------------------------------------------------------------------------------------








    // useEffect(() => {
    //     menuHandler();
    // }, []);

    // const menuHandler = async () => {
    //     try {
    //         const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories", {
    //             headers: {
    //                 projectId: "5m649p45bw1w"
    //             }
    //         });
    //         console.log(response.data.data);
    //         setList(response.data.data);
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //     }
    // };

    useEffect(() => {
        document.addEventListener("scroll", closeModal)
    })
    const navigateToHome = () => {
        navigate("/");
    };

    //Sets the search term using searchTermHandler function which comes from context API
    //called onChange of input , and value property of inputbox should be searchTerm
    const handleSearchTerm = (e) => {
        searchTermHandler(e.target.value);
        console.log(e.target.value);
        navigate("/searchpage");
    };

    //setting the value of token and name to null , using  onTokenHandler, onNameHandler function which comes from cntext API
    const logoutHandler = () => {

        onTokenHandler(null);
        onNameHandler(null);
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        console.log("reached logout handler");
        navigate("/login");
    };

    return (<>
        {/* LINKS ON TOP---------------------------------------------------------------- */}
        <div className="w-100% overflow-x-auto ">
            <div className="bg-red-600 text-white border-b border-gray-300 flex justify-between p-1 text-xs font-bold">
                <div className="w-24 sm:w-auto flex items-center border-gray-300 pl-3">
                    <span>OUR BRAND PROMISE</span>
                </div>
                <div className=" w-24 sm:w-auto flex items-center border-l border-gray-300 p-1">
                    <NavLink to="/returnpolicy" className="flex items-center">
                        <i className="fas fa-arrow-right-arrow-left mr-1"></i> EASY RETURN
                    </NavLink>
                </div>
                <div className="w-24 sm:w-auto flex items-center border-l border-gray-300 px-2">
                    <span><i className="fas fa-truck-fast mr-1"></i> NEXT DAY DELIVERY</span>
                </div>
                <div className="w-24 sm:w-auto flex items-center border-l border-gray-300 px-2">
                    <NavLink to="/service" className="flex items-center">
                        <i className="fas fa-ribbon mr-1"></i> SERVICE GUARANTEE
                    </NavLink>
                </div>

                <div className="w-24 sm:w-auto flex items-center border-l border-gray-300 px-2">
                    <NavLink to="/customercare" className="flex items-center">
                        <i className="fas fa-headset mr-1"></i> CONTACT US
                    </NavLink>
                </div>
            </div>
        </div>
        {/* ----------------------------------------------------------------------End of links on top----------------------------------------------- */}


        <div className="flex justify-between h-16 items-end md:w-full ipad:w-full w-full bg-red-600 sm:min-w-full p-2">

            {/* LOGO....................................................................... */}
            <div className=" number-1 flex justify-end w-20 md:w-60 xl:w-60  lg:w-40 md:mr-10">
                <button onClick={navigateToHome}>
                    <img className="w-20  md:w-32 lg:w-40 h-auto" src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="logo" />
                </button>
            </div>

            {/* INPUTBOX....................................... */}
            <div className=" number-2 xl:ml-32  flex  md:justify-evenly justify-around flex-wrap md:flex-nowrap sm:flex-nowrap lg:h-8 lg:mb-2">
                <div className="rounded-full xl:flex xl:h-10 md:h-10 bg-white p-0 ml-2 flex-nowrap sm:flex-nowrap md:flex">
                    <input
                        type="text"
                        className="w-3/5 sm:w-4/5 md:w-96 bg-white h-6 sm:h-8 md:h-10 rounded-full sm:px-4 px-2 md:px-4 border-none focus:outline-none focus:border-none"
                        placeholder="Find your favorite product..."
                        onChange={handleSearchTerm}
                        value={searchTerm}
                    />
                    <i className="fa-solid fa-magnifying-glass mt-3 text-slate-400 pr-1 inline sm:pr-4 md:pr-2"></i>
                </div>
            </div>




            {/* ------------------------------------Style for big Devices----------------------------------------------- */}
            <div className="number-3  xl:flex xl:flex-wrap lg:flex-nowrap lg:w-full lg:ml-20 gap-1 md:ml-24 ">

                {!getToken ? (
                    <>
                        <div className="hidden md:inline md:ml-52">
                            <NavLink to="/login">
                                <button className="text-xs text-white font-bold py-2 px-4 rounded"><i className="fa-solid fa-user"></i> Login</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="text-xs text-white font-bold py-2 px-4 rounded"><i className="fa-regular fa-user"></i> Register</button>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex md:w-full lg:w-full xl:w-full">
                            <div className="hidden md:inline ml-20 pl-32">
                                <NavLink to="/mycart">
                                    <button className="text-xs btn font-bold btn text-white py-2 px-2 rounded"><i className="fa-solid fa-cart-shopping"></i><span className="ml-1"> My Cart<span className="ml-1">({totalCartItems})</span></span></button>
                                </NavLink>
                            </div>
                            <span className="text-white hidden md:inline">|</span>
                            <div className="mt-2 ml-2 font-semibold text-white text-xs uppercase tracking-wide hidden md:inline">
                                {getName ? <button onClick={() => setLogout(!logout)}><i className="fa-solid fa-user fa-lg"></i> <span className="ml-1">{getName}</span></button> : "Profile"}
                            </div>
                        </div>
                        {logout &&



                            // <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm items-center z-20" >
                            <div className="h-32 w-28 rounded-md bg-blue-800 absolute right-0 hidden md:inline md:top-20 md:right-8 z-50" >
                                <button className="text-white text-xs pl-24" onClick={() => setLogout(false)}><i class="fa-solid fa-x"></i></button>
                                <NavLink to="/orderhistory">
                                    <button onClick={() => setLogout(!logout)} className="text-xs btn font-bold btn text-white py-2 px-2 rounded">
                                        <i style={{ color: 'white' }} className="fa-solid fa-heart"></i>
                                        <span className="ml-1">Order History</span>
                                    </button>
                                </NavLink>
                                <div className="hidden md:block">
                                    <NavLink onClick={() => setLogout(!logout)} to="/wishlist">
                                        <button onClick={() => setLogout(!logout)} className="text-xs btn font-bold btn text-white py-2 px-2 ml-2 rounded">
                                            <i style={{ color: 'white' }} className="fa-solid fa-heart"></i>
                                            <span className="ml-1">My Wishlist</span>
                                        </button>
                                    </NavLink>
                                </div>


                                <button onClick={logoutHandler} className="btn font-bold btn text-white hidden md:inline ml-2 py-2 px-2 rounded text-xs">
                                    <i className="fa-solid fa-right-from-bracket mr-1"></i>
                                    Log Out
                                </button>


                            </div>
                            // </div>

                        }
                    </>
                )}
            </div>







            {/* ---------------------------------------------Style For Small Devices------------------------------------------ */}

            <div className="flex  gap-1 ">
                {!getToken ? (
                    <>
                        <div className="inline md:hidden">
                            <NavLink to="/login">
                                <button className="text-xs text-white font-bold py-2 px-4 rounded"><i className="fa-solid fa-user"></i> Login</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="text-xs text-white font-bold py-2 px-4 rounded"><i className="fa-regular fa-user"></i> Register</button>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <>


                        <div className="mt-2 ml-2 font-semibold text-white text-xs uppercase tracking-wide inline md:hidden">
                            {getName ? <button onClick={() => setLogout(!logout)}><i className="fa-solid fa-user fa-lg"></i> <span className="ml-1">{getName}</span></button> : "Profile"}
                        </div>
                        {logout &&
                            < div className="absolute h-5/5 inset-0 bg-black bg-opacity-30 backdrop-blur-sm items-center z-20" >
                                <div className="h-40 w-28 rounded-md bg-blue-800 absolute right-0 top-28 md:hidden z-50">
                                    <button className="text-white text-xs pl-24" onClick={() => setLogout(false)}><i className="fa-solid fa-circle-xmark"></i></button>
                                    <div className="block md:hidden">
                                        <NavLink onClick={() => setLogout(!logout)} to="/wishlist">
                                            <button className="text-xs btn font-bold btn text-white py-2 px-2 ml-2 rounded"><i style={{ color: 'white' }} className="fa-solid fa-heart"></i><span className="ml-1">My Wishlist</span> </button>
                                        </NavLink>

                                        <NavLink to="/orderhistory"><button onClick={() => setLogout(!logout)} className="text-xs btn font-bold btn text-white py-2 px-2 rounded"><i style={{ color: 'white' }} className="fa-solid fa-heart"></i><span className="ml-1">Order History</span> </button></NavLink>
                                    </div>
                                    <div className="inline md:hidden">
                                        <NavLink to="/mycart">
                                            <button onClick={() => setLogout(!logout)} className="text-xs btn font-bold ml-2 btn text-white py-2 px-2 rounded"><i className="fa-solid fa-cart-shopping"></i><span className="ml-1"> My Cart<span className="ml-1">({totalCartItems})</span></span></button>
                                        </NavLink>
                                    </div>
                                    <button onClick={logoutHandler} className="btn font-bold btn text-white inline md:hidden ml-2 py-2 px-2 rounded text-xs"><i className="fa-solid fa-right-from-bracket mr-1"></i>Log Out</button>
                                </div>
                            </div>
                        }
                    </>
                )}
            </div>
        </div>
    </>);
}

export default TopNavbar;
