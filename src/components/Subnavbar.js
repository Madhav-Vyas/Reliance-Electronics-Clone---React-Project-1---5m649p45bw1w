import { useState } from 'react'
import "../styles/App.css";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';

const Subnavbar = () => {
    //simply have links of all category pages
    //Hamburger is installed from external resource
    const [isOpen, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isAudioHov, setIsAudioHov] = useState(false);
    const [isHealthHov, setIsHealthHov] = useState(false);
    const [isKitHov, setIskitHov] = useState(false);
    const [isLaptopHov, setIslapHov] = useState(false);
    const [isMobHov, setIsMobHov] = useState(false);
    const [isRefHov, setIsRefHov] = useState(false);
    const [isTabHov, setIsTabHov] = useState(false);
    const [isTelHov, setIsTelHov] = useState(false);
    const [isTravHov, setIsTravHov] = useState(false);
    const [isWMHov, setIsWMHov] = useState(false);

    const closeAllModal = () => {
        setIsHovered(false);
        setIsAudioHov(false)
        setIsHealthHov(false)
        setIskitHov(false)
        setIslapHov(false)
        setIsMobHov(false)
        setIsRefHov(false)
        setIsTabHov(false)
        setIsTelHov(false)
        setIsTravHov(false)
        setIsWMHov(false)
    }
    return (
        <>
            {/* ---------------------------------------Style for big screens---------------------------------- */}

            <div

                className='w-full bg-blue-900 h-8 md:flex justify-between px-2  py-1 text-sm overflow-hidden hidden  '>
                <NavLink to="/acpage">
                    <div
                        onMouseEnter={() => setIsHovered(true)}

                        className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Ac</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </NavLink>

                {isHovered && (
                    <div onMouseLeave={() => {
                        setIsHovered(false)
                        closeAllModal()
                    }} className='w-full h-56  rounded bg-[#003380] absolute top-32  text-white'>
                        <div>
                            <div className='px-2 pt-2 cursor-pointer hover:underline hover:font-bold'><NavLink to="/acpage">Air Conditioners</NavLink></div>
                            <div className='text-xs p-4 text-slate-300 '>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">Split Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer  py-1'><NavLink to="/underconstruction">Window Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">Energy Efficient Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">Smart Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">1 ton Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">1.5 ton Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/underconstruction">5 star Air Conditioners</NavLink></div>

                            </div>
                        </div>
                    </div>
                )}





                <NavLink to="/audiopage">
                    <div
                        onMouseEnter={() => setIsAudioHov(true)}
                        className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Audio</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>

                {isAudioHov && (
                    <div onMouseLeave={() => {
                        setIsAudioHov(false)
                        closeAllModal()
                    }} className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        <div className='flex gap-12'>
                            <div>
                                <div>Headphones & Headsets</div>
                                <div className='text-xs text-slate-300 '>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Bluetooth Neckbands</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>True Wireless</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Earphones</div>
                                    <div className=' text-slate-300 hover:underline hover:text-white'>Bluetooth Headphones</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Gaming Headset</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Wired Headphones</div>
                                </div>




                            </div>
                            <div>
                                <div> Speakers & Soundbars</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Bluetooth Speakers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Home Theatre Systems</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Smart Speakers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Specialty Speakers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Party Speakers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Multimedia Speakers</div>

                                </div>
                            </div>

                            <div>
                                <div>Musical Instruments</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>   Guitars and Ukuleles</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'> Microphones</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'> Musical Keyboards</div>
                                </div>




                            </div>
                        </div>



                    </div>
                )}






                <NavLink to="/healthpage" >
                    <div onMouseEnter={() => setIsHealthHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Health</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isHealthHov && (
                    <div onMouseLeave={() => {
                        setIsHealthHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>




                        <div className='flex gap-12'>
                            <div>
                                <div> Health and Care</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Shavers & Trimmers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Epilators</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Hair Dryers & Stylers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Weighing Scales</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Irons</div>

                                </div>
                            </div>

                            <div>
                                <div>   Hygiene & Personal Care</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Digital Thermometers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>Massagers</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'> Misc. Care Devices</div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'>  Garment Steamers
                                    </div>


                                </div>
                            </div>
                        </div>






                    </div>
                )}






                <NavLink to="/kitchenpage">
                    <div onMouseEnter={() => setIskitHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Kitchen Appliances</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isKitHov && (
                    <div onMouseLeave={() => {
                        setIskitHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        kitchen
                    </div>
                )}








                <NavLink to="/laptoppage">
                    <div onMouseEnter={() => {
                        setIslapHov(true)

                    }
                    } className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Laptop</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isLaptopHov && (
                    <div onMouseLeave={() => {
                        setIslapHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        laptop
                    </div>
                )}







                <NavLink to="/mobilepage">
                    <div onMouseEnter={() => setIsMobHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Mobiles</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isMobHov && (
                    <div onMouseLeave={() => {
                        closeAllModal()
                        setIsMobHov(false)
                    }} className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        mobile
                    </div>
                )}




                <NavLink to="/refregeratorpage">
                    <div onMouseEnter={() => setIsRefHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Refrigerators</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isRefHov && (
                    <div onMouseLeave={() => {
                        setIsRefHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        Refrigerators
                    </div>
                )}



                <NavLink to="/tabletpage" >
                    <div onMouseEnter={() => setIsTabHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Tablets</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isTabHov && (
                    <div onMouseLeave={() => {
                        setIsTabHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        tablrt
                    </div>
                )}




                <NavLink to="/televisonpage" >  <div onMouseEnter={() => setIsTelHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Televisons</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                {isTelHov && (
                    <div onMouseLeave={() => {
                        setIsTelHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        televison
                    </div>
                )}





                <NavLink to="/travelpage" >  <div onMouseEnter={() => setIsTravHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Travel</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                {isTravHov && (
                    <div onMouseLeave={() => {
                        setIsTravHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        travel
                    </div>
                )}





                <NavLink to="/washingmachinepage" >  <div onMouseEnter={() => setIsWMHov(true)} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Washing Machines</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                {isWMHov && (
                    <div onMouseLeave={() => {
                        setIsWMHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        washingmachine
                    </div>
                )}



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