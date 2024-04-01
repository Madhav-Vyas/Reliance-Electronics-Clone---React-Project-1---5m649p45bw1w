import React from 'react'
import axios from "axios";
import "../styles/App.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom"

const Subnavbar = () => {
    return (
        <div className='w-full bg-blue-900 h-8 flex justify-between px-2 py-1 text-sm overflow-hidden'>
            <NavLink to="/acpage" className='text-white  hover:bg-red-600 px-3 '>Ac <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/audiopage" className='text-white hover:bg-red-600 px-3'>Audio <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/healthpage" className='text-white  hover:bg-red-600 px-3'>Health <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/kitchenpage" className='text-white hover:bg-red-600 px-3'>Kitchen Appliance <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/laptoppage" className='text-white  hover:bg-red-600 px-3'>Laptops <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/mobilepage" className='text-white hover:bg-red-600 px-3'>Mobiles <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/refregeratorpage" className='text-white hover:bg-red-600 px-3'>Refrigerators <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/tabletpage" className='text-white hover:bg-red-600 px-3'>Tablets <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/televisonpage" className='text-white hover:bg-red-600 px-3'>Televison <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/travelpage" className='text-white hover:bg-red-600 px-3'>Travel <i class="fa-solid fa-angle-down"></i></NavLink>
            <NavLink to="/washingmachinepage" className='text-white hover:bg-red-600 px-3'>Washing Machine <i class="fa-solid fa-angle-down"></i></NavLink>
        </div>
    )
}

export default Subnavbar