import axios from "axios";
import "../styles/App.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom"

function TopNavbar() {
    const { getToken, getName, onTokenHandler, onNameHandler, searchTerm, searchTermHandler } = useData();
    const [getList, setList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        menuHandler();
    }, []);

    const [ac, audio, health, kitchenappliances, laptop, mobile, refrigerator, tablet, travel, tv, washingMachine] = getList;

    const handleSelectChange = (event) => {
        const selectedCategory = event.target.value;
        switch (selectedCategory) {
            case 'ac':
                navigate('/acpage');
                break;

            case 'audio':
                navigate('/audiopage');
                break;

            case 'health':
                navigate('/healthpage');
                break;

            case 'kitchenappliances':
                navigate('/kitchenpage');
                break;

            case 'laptop':
                navigate('/laptoppage');
                break;

            case 'mobile':
                navigate('/mobilepage');
                break;

            case 'refrigerator':
                navigate('/refregeratorpage');
                break;

            case 'travel':
                navigate('/travelpage');
                break;

            case 'tv':
                navigate('/televisonpage');
                break;

            case 'tablet':
                navigate('/tabletpage');
                break;

            case "washingMachine":
                navigate("/washingmachinepage")
            default:
                break;
        }
    };

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
    return (
        <>
            {/* Logo */}
            <div className="flex justify-between items-end bg-red-600 p-6">
                <div>
                    <button onClick={navigateToHome}><img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="logo" /></button>
                </div>

                {/* Menu */}
                <div className="flex justify-evenly flex-wrap md:flex-no-wrap ">
                    <button className="text-2xl font-bold text-slate-100" onClick={dropDownHandler}> Menu
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* Dropdown */}
                    {showDropdown && (
                        <select onChange={handleSelectChange} className="rounded-2xl pl-4 ">
                            {getList.map((item, index) => (
                                <option className="bg-blue-950 text-gray-50" key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    )}


                    {/* Search */}
                    <input
                        type="text"
                        className="w-full md:w-64 h-10 rounded-full px-4 md:ml-9 border-none focus:outline-none focus:border-none "
                        placeholder="Find your favorite product..."
                        onChange={handleSearchTerm}
                        value={searchTerm}

                    />
                    {/* <NavLink to="/searchpage"> <button className="text-center pt-2 pl-2" onClick={handleSearchTerm} > <i class="fa-solid fa-magnifying-glass fa-xl"></i></button></NavLink> */}
                    {/* //add a onclick and set term to context */}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                    {!getToken ? (
                        <>
                            <NavLink to="/login">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/mycart">
                                <button className="btn font-bold btn bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">My Cart</button>
                            </NavLink>
                            <button onClick={logoutHandler} className="btn font-bold btn bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">Log Out</button>
                            <div className="ml-2 font-semibold text-white text-lg uppercase tracking-wide">
                                {getName ? getName : "Profile"}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>


    );

}
export default TopNavbar;
