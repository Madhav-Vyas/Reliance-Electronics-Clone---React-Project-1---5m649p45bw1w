import { useState } from 'react'
import "../styles/App.css";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';

const Subnavbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <div className='w-full bg-blue-900 h-8 md:flex justify-between px-2 py-1 text-sm overflow-hidden hidden  '>
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
            <span className="md:hidden">
                <div className="w-1 h-1 mr-2">
                    <Hamburger toggled={isOpen} toggle={setOpen} /></div>
                {isOpen && (
                    <div className='w-64  text-white absolute mt-10 opacity-95 flex-col md:hidden z-50 '>
                        <div className='w-full bg-blue-900 px-2 py-1 text-sm overflow-hidden flex-col  rounded-md'>
                            {/* <div className='text-lg underline ml-8'> ALL CATEGORIES</div> */}
                            <div className='border-b-2 py-4'><NavLink onClick={() => setOpen(!isOpen)} to="/acpage" className='text-white hover:bg-red-600 px-3 py-6'>Ac</NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/audiopage" className='text-white hover:bg-red-600 px-3 py-6'>Audio </NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/healthpage" className='text-white hover:bg-red-600 px-3 py-6'>Health </NavLink></div>
                            <div className='border-b-2 py-4'><NavLink onClick={() => setOpen(!isOpen)} to="/kitchenpage" className='text-white hover:bg-red-600 px-3 py-6'>Kitchen Appliance</NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/laptoppage" className='text-white hover:bg-red-600 px-3 py-6'>Laptops </NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/mobilepage" className='text-white hover:bg-red-600 px-3 py-6'>Mobiles </NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/refregeratorpage" className='text-white hover:bg-red-600 px-3 py-6'>Refrigerators</NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/tabletpage" className='text-white hover:bg-red-600 px-3 py-6'>Tablets</NavLink></div>
                            <div className='border-b-2 py-4'><NavLink onClick={() => setOpen(!isOpen)} to="/televisonpage" className='text-white hover:bg-red-600 px-3 py-6'>Televison </NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/travelpage" className='text-white hover:bg-red-600 px-3 py-6'>Travel </NavLink></div>
                            <div className='border-b-2 py-4'> <NavLink onClick={() => setOpen(!isOpen)} to="/washingmachinepage" className='text-white hover:bg-red-600 px-3 py-6'>Washing Machine </NavLink></div>
                        </div>
                    </div>
                )}
            </span >

        </>
    )
}

export default Subnavbar