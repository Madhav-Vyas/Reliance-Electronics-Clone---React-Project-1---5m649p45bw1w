import { useState } from 'react'
import "../styles/App.css";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';

const Subnavbar = () => {
    //simply have links of all category pages
    //Hamburger is installed from external resource
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* ---------------------------------------Style for big screens---------------------------------- */}

            <div className='w-full bg-blue-900 h-8 md:flex justify-between px-2  py-1 text-sm overflow-hidden hidden  '>
                <NavLink to="/acpage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Ac</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </NavLink>





                <NavLink to="/audiopage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Audio</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/healthpage" >
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Health</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/kitchenpage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Kitchen Appliances</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/laptoppage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Laptop</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/mobilepage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Mobiles</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/refregeratorpage">
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Refrigerators</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/tabletpage" >
                    <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Tablets</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                <NavLink to="/televisonpage" >  <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Televisons</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                <NavLink to="/travelpage" >  <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Travel</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                <NavLink to="/washingmachinepage" >  <div className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Washing Machines</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
            </div>




            {/* --------------------------------Style for small devices------------------------------------------ */}

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