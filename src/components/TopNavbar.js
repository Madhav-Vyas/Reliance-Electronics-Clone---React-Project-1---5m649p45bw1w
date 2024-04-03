import axios from "axios";
import "../styles/App.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom"

function TopNavbar() {
    const { getToken, getName, onTokenHandler, onNameHandler, searchTerm, searchTermHandler, totalCartItems,
        totalCartItemsHandler } = useData();
    const [getList, setList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        menuHandler();
    }, []);

    const [ac, audio, health, kitchenappliances, laptop, mobile, refrigerator, tablet, travel, tv, washingMachine] = getList;

    // const handleSelectChange = (event) => {
    //     const selectedCategory = event.target.value;
    //     switch (selectedCategory) {
    //         case 'ac':
    //             navigate('/acpage');
    //             break;

    //         case 'audio':
    //             navigate('/audiopage');
    //             break;

    //         case 'health':
    //             navigate('/healthpage');
    //             break;

    //         case 'kitchenappliances':
    //             navigate('/kitchenpage');
    //             break;

    //         case 'laptop':
    //             navigate('/laptoppage');
    //             break;

    //         case 'mobile':
    //             navigate('/mobilepage');
    //             break;

    //         case 'refrigerator':
    //             navigate('/refregeratorpage');
    //             break;

    //         case 'travel':
    //             navigate('/travelpage');
    //             break;

    //         case 'tv':
    //             navigate('/televisonpage');
    //             break;

    //         case 'tablet':
    //             navigate('/tabletpage');
    //             break;

    //         case "washingMachine":
    //             navigate("/washingmachinepage")
    //         default:
    //             break;
    //     }
    // };

    const menuHandler = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories", {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            console.log(response.data.data);
            setList(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };


    const dropDownHandler = () => {
        setShowDropdown(!showDropdown);
    };

    const logoutHandler = () => {
        onTokenHandler(null);
        onNameHandler(null);
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate("/login");
    };
    const navigateToHome = () => {
        navigate("/")
    }
    const handleSearchTerm = (e) => {
        searchTermHandler(e.target.value)
        console.log(e.target.value);
        navigate("/searchpage")

    }
    //code for cart items

    return (
        <>
            <div className="w-full bg-red-600 text-white border-b border-gray-300 flex justify-between p-1 text-sm font-bold">
                <span className="border-gray-300 pl-3">OUR BRAND PROMISE</span>
                <NavLink to="/returnpolicy" className=" border-gray-300 pl-3"><i class="fa-solid fa-arrow-right-arrow-left"></i> EASY RETURN</NavLink>
                <span className="border-l border-gray-300 pl-3 pr-3"><i class="fa-solid fa-truck-fast"></i> NEXT DAY DELIVERY</span>
                <NavLink to="/service" className="border-l border-gray-300 pl-3 pr-3"><i class="fa-solid fa-ribbon"></i> SERVICE GUARANTEE</NavLink>
                <span className="border-l border-gray-300 pl-3 pr-3"><i class="fa-solid fa-network-wired"></i> UNMATCHED NETWORK</span>
                <span className="border-l border-gray-300 pl-3 pr-3"><i class="fa-solid fa-location-dot"></i> FIND A STORE</span>
                <NavLink to="/customercare" className="border-l border-gray-300 pl-3 pr-3"><i class="fa-solid fa-headset"></i> CONTACT US</NavLink>
            </div>


            {/* Logo */}
            <div className="flex justify-between items-end bg-red-600 p-2">
                <div className="flex justify-end">
                    <button onClick={navigateToHome}><img className="w-40 h-auto" src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="logo" /></button>
                </div>

                {/* Menu */}
                <div className="flex justify-evenly flex-wrap md:flex-no-wrap ">
                    {/* <button className="text-2xl font-bold text-slate-100" onClick={dropDownHandler}> Menu
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* Dropdown */}
                    {/* {showDropdown && (
                        <select onChange={handleSelectChange} className="rounded-2xl pl-4 ">
                            {getList.map((item, index) => (
                                <option className="bg-blue-950 text-gray-50" key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    )}  */}


                    {/* Search */}
                    <input
                        type="text"
                        className="w-3/5 md:w-96 h-10 rounded-full px-4 md:ml-9 border-none focus:outline-none focus:border-none "
                        placeholder="Find your favorite product..."
                        onChange={handleSearchTerm}
                        value={searchTerm}

                    />
                    {/* <NavLink to="/searchpage"> <button className="text-center pt-2 pl-2" onClick={handleSearchTerm} > <i class="fa-solid fa-magnifying-glass fa-xl"></i></button></NavLink> */}
                    {/* //add a onclick and set term to context */}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-1">
                    {!getToken ? (
                        <>
                            <NavLink to="/login">
                                <button className=" text-xs text-white font-bold py-2 px-4 rounded"><i class="fa-solid fa-user"></i> Login</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="text-xs text-white font-bold py-2 px-4 rounded"><i class="fa-regular fa-user"></i> Register</button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/wishlist">
                                <button className="text-xs btn font-bold btn text-white  py-2 px-2 rounded"><i style={{ color: 'white' }} class="fa-solid fa-heart"></i><span className="ml-1">My Wishlist</span> </button>
                            </NavLink>
                            <span className="text-white">|</span>
                            <NavLink to="/mycart">
                                <button className="text-xs btn font-bold btn text-white  py-2 px-2 rounded"><i class="fa-solid fa-cart-shopping"></i><span className="ml-1"> My Cart({totalCartItems})</span></button>
                            </NavLink>

                            <span className="text-white">|</span>
                            <button onClick={logoutHandler} className="btn font-bold btn text-white  py-2 px-2 rounded text-xs">Log Out</button>
                            <div className="mt-2 ml-2 font-semibold text-white text-xs uppercase tracking-wide">
                                {getName ? <><i class="fa-solid fa-user fa-lg"></i> <span className="ml-1">{getName}</span></> : "Profile"}

                            </div>
                        </>
                    )}
                </div>
            </div>
        </>


    );

}
export default TopNavbar;
