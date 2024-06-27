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
                        onMouseEnter={() => {
                            closeAllModal()
                            setIsHovered(true)
                        }}

                        className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Ac</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </NavLink>

                {isHovered && (
                    <div onMouseLeave={() => {
                        setIsHovered(false)
                        closeAllModal()
                    }} className='w-full h-56   rounded bg-[#003380] absolute top-32  text-white'>
                        <div>
                            <div className='px-2 pt-2 cursor-pointer hover:underline hover:font-bold'><NavLink to="/acpage">Air Conditioners</NavLink></div>
                            <div className='text-xs p-4 text-slate-300 '>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">Split Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer  py-1'><NavLink to="/acpage">Window Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">Energy Efficient Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">Smart Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">1 ton Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">1.5 ton Air Conditioners</NavLink></div>
                                <div className='hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/acpage">5 star Air Conditioners</NavLink></div>

                            </div>
                        </div>
                    </div>
                )}





                <NavLink to="/audiopage">
                    <div
                        onMouseEnter={() => {
                            closeAllModal()
                            setIsAudioHov(true)
                        }}
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
                            <div className='p-4'>
                                <div>Headphones & Headsets</div>
                                <div className='text-xs text-slate-300 '>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Bluetooth Neckbands</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">True Wireless</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Earphones</NavLink></div>
                                    <div className=' text-slate-300 hover:underline hover:text-white'><NavLink to="/audiopage">Bluetooth Headphones</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Gaming Headset</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Wired Headphones</NavLink></div>
                                </div>




                            </div>
                            <div className='p-4'>
                                <div> Speakers & Soundbars</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Bluetooth Speakers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Home Theatre Systems</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Smart Speakers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Specialty Speakers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Party Speakers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Multimedia Speakers</NavLink></div>

                                </div>
                            </div>

                            <div className='p-4'>
                                <div>Musical Instruments</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Guitars and Ukuleles</NavLink>   </div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Microphones</NavLink> </div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/audiopage">Musical Keyboards</NavLink> </div>
                                </div>




                            </div>
                        </div>



                    </div>
                )}






                <NavLink to="/healthpage" >
                    <div onMouseEnter={() => {
                        closeAllModal()
                        setIsHealthHov(true)
                    }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
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
                            <div className='p-4'>
                                <div> Health and Care</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Shavers & Trimmers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Epilators</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Hair Dryers & Stylers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Weighing Scales</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Irons</NavLink></div>

                                </div>
                            </div>

                            <div className='p-4'>
                                <div>   Hygiene & Personal Care</div>
                                <div className='text-xs text-slate-300'>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Digital Thermometers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/healthpage">Massagers</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'> <NavLink to="/healthpage">Misc. Care Devices</NavLink></div>
                                    <div className=' hover:text-white hover:underline cursor-pointer py-1'> <NavLink to="/healthpage">Garment Steamers</NavLink>
                                    </div>


                                </div>
                            </div>
                        </div>






                    </div>
                )}






                <NavLink to="/kitchenpage">
                    <div onMouseEnter={() => {
                        closeAllModal()
                        setIskitHov(true)
                    }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Kitchen Appliances</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isKitHov && (
                    <div onMouseLeave={() => {
                        setIskitHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-80 bg-[#003380] absolute top-32 text-white z-30'>










                        <div className='flex gap-12'>
                            <div className='p-4'>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Mixers</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Water Purifiers</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Electric Kettle</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Microwaves Oven</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Convection</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Solo & Grill</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">OTG</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Air Fryer</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Food Processor</NavLink></div>
                            </div>
                            <div className='p-4'>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Cooktops</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Rice Cooker</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Hobs</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Hoods/Chimneys</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Solo & Grill</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">OTG</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Cookware</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Food Processor</NavLink></div>
                            </div>
                            <div className='p-4'>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Juicer</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Wet Grinder</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Hand Mixer</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Coffee/Tea Makers</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Pop up Toasters</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Sandwich Makers</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Cookware</NavLink></div>
                                <div className='font-bold hover:underline pt-2'><NavLink to="/kitchenpage">Choppers</NavLink></div>
                            </div>
                        </div>

                    </div>
                )}








                <NavLink to="/laptoppage">
                    <div onMouseEnter={() => {
                        closeAllModal()
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







                        <div className='p-4'>
                            <div className='font-bold'> Laptops</div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Basic use laptops</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Student Laptops</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Thin and light Laptops</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Multi-Tasking Laptops</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Gaming Laptops</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/laptoppage">Content creator Laptopss</NavLink></div>

                        </div>
                    </div>
                )}







                <NavLink to="/mobilepage">
                    <div onMouseEnter={() => {
                        closeAllModal();
                        setIsMobHov(true)
                    }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Mobiles</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isMobHov && (
                    <div onMouseLeave={() => {
                        closeAllModal()
                        setIsMobHov(false)
                    }} className='w-full h-80 bg-[#003380] absolute top-32 text-white z-30'>
                        <div>
                            <div className='p-4 flex gap-12'>
                                <div>
                                    <div> Smartphones</div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">iPhone 15 Starting Rs.63900*</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">Samsung M15 @ ₹11999*</NavLink></div>
                                </div>
                                <div>
                                    <div className=''>Smartphone Brands</div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage"> Apple</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage"> Samsung</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage"> Xaiomi</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">Oneplus</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">Realme</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">Vivo</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/mobilepage">Oppo</NavLink></div>
                                </div>
                            </div>
                            <div></div>
                        </div>


                    </div>
                )}




                <NavLink to="/refregeratorpage">
                    <div onMouseEnter={() => {
                        closeAllModal();
                        setIsRefHov(true)
                    }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Refrigerators</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>
                {isRefHov && (
                    <div onMouseLeave={() => {
                        setIsRefHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-56 bg-[#003380] absolute top-32 text-white'>
                        <div className='p-4'>
                            <div>Refrigerators</div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/refregeratorpage">Single Door</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/refregeratorpage">Double Door</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/refregeratorpage">Side by Side Refrigerators</NavLink></div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/refregeratorpage">Convertible</NavLink></div>
                        </div>




                    </div>
                )}



                <NavLink to="/tabletpage" >
                    <div onMouseEnter={() => {
                        closeAllModal();
                        setIsTabHov(true)
                    }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                        <div>Tablets</div>
                        <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                    </div></NavLink>

                {isTabHov && (
                    <div
                        onMouseLeave={() => {
                            setIsTelHov(false);
                            closeAllModal();
                        }}
                        className='w-full h-32 bg-[#003380] absolute top-32 text-white z-30'
                    >
                        <div className='flex gap-20 p-4'>
                            <div>
                                <div>Tablets & eReaders</div>
                                <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'>
                                    <NavLink to="/tabletpage">Every Day use Tablets below 15000s</NavLink>
                                </div>
                                <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'>
                                    <NavLink to="/tabletpage">Premium Tablets, Above 15001</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}







                <NavLink to="/televisonpage" >  <div onMouseEnter={() => {
                    closeAllModal();
                    setIsTelHov(true)
                }} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
                    <div>Televisons</div>
                    <div className='pt-1 text-xs'><i class="fa-solid fa-angle-down"></i></div>
                </div></NavLink>
                {isTelHov && (
                    <div onMouseLeave={() => {
                        setIsTelHov(false)
                        closeAllModal()
                    }
                    } className='w-full h-80 bg-[#003380] absolute top-32 text-white z-30'>

                        <div className='flex gap-20 p-4'>
                            <div >
                                <div> Televisions</div>
                                <div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage"> Smart TVs</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">32 Inch TVs</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage"> 43 Inch TVs</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage"> 55 Inch TVs</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">Android TVs</NavLink></div>

                                </div>
                            </div>
                            <div>
                                <div>  Gaming</div>
                                <div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">   Gaming Consoles</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage"> Gaming Accessories</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">  Gaming Titles</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">  Gaming Controllers</NavLink></div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage"> Projectors</NavLink></div>


                                    <div className='mt-4'>Streaming Devices</div>
                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">   Reconnect Disney |Marvel Audio Collection</NavLink></div>

                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">  TV & Audio Accessories</NavLink></div>

                                    <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/televisonpage">  Virtual Reality Headsets</NavLink></div>


                                </div>
                            </div>
                        </div>









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
                    } className='w-full h-40 bg-[#003380] absolute top-32 text-white'>
                        <div className='p-4'>
                            <div>Washing Machines</div>
                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/washingmachinepage">  Fully Automatic Front Load</NavLink></div>

                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/washingmachinepage">   Fully Automatic Top Load</NavLink></div>

                            <div className='text-sm text-slate-300 hover:text-white hover:underline cursor-pointer py-1'><NavLink to="/washingmachinepage">   Semi-Automatic Top Load</NavLink></div>

                        </div>


                    </div>
                )}

                <NavLink to="/travelpage" >  <div onMouseEnter={() => closeAllModal()} className='text-white  hover:bg-red-600 px-3 flex gap-1 '>
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