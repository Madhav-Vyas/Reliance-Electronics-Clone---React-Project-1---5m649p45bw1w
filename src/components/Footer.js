import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (<>
        <div className='w-full h-auto  bg-[#003380] text-white flex justify-around flex-wrap '>

            <div id="product-cat" className='text-sm mt-4 mx-2'><span className='md:text-xl underline'>Product Categories</span>

                <ul className='mt-2'>
                    <NavLink className="hover:text-red-600  text-xs md:text-sm  mt-2" to="/acpage"><li>Ac</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm " to="/audiopage"><li>Audio </li></NavLink>
                    <NavLink className="hover:text-red-600 mt-2" to="/healthpage"> <li>Health</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/kitchenpage"><li>Kitchen Appliances</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/laptoppage"><li>Laptop</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/mobilepage"> <li>Mobile</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/refregeratorpage"> <li>Refrigerator</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/tabletpage"> <li>Tablet</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/televisonpage"><li>Televison</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/travelpage"> <li>Travel</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm mt-2" to="/washingmachinepage"><li>Washing Machine</li></NavLink>
                </ul>

            </div>


            <div>
                <div id="product-cat" className='text-sm mt-4 mx-2'><span className='md:text-xl underline'>SITE INFO</span>

                    <ul className='mt-2'>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>About Reliance Digital</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>resQ Services </li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Locate nearest resQ service center</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Locate nearest My Jio Store</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Site Map</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Gift Cards</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Corporate Enquires</li></NavLink>
                        <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Contact Us</li></NavLink>

                    </ul>

                </div>
                <div>
                    <div className='hidden md:inline '>
                        <div className='mt-8 font-bold'>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</div>
                        <div className='flex'>
                            <div>  <img className='w-32' src="https://www.reliancedigital.in/build/client/images/google_play_store.png" /></div>
                            <div><img className='w-32 mb-4' src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-cat" className='text-sm mt-4 mx-2'><span className='md:text-xl underline md:ml-0 '>RESOURCE CENTRE</span>

                <ul className='mt-2'>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Product Reviews</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Buying Guides</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>How Tos</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Featured Stories</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"><li>Events & Happenings</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Nearest Store</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Corporate Enquires</li></NavLink>
                    <NavLink className="hover:text-red-600 text-xs md:text-sm" to="/underconstruction"> <li>Contact Us</li></NavLink>

                </ul>

            </div>





            <div id="contact Us" className="mt-4 ml-2 md:ml-8"><span className='md:text-xl underline '>Contact Us</span>
                <ul className='mt-2'>
                    <li className='text-xs md:text-sm'> RelainceDigital@gmail.com</li>
                    <li className='text-xs md:text-sm'> 9213459012</li>
                </ul>

                <ul className='mt-10'>
                    <span className='md:text-xl underline hover:text-red-600'>Follow us on:</span>
                    <li className='mt-3 text-xs md:text-sm  hover:text-red-600'>Facebook <i class="fa-brands fa-facebook fa-xl"></i></li>
                    <li className='mt-3 text-xs md:text-sm  hover:text-red-600'>Instagram <i class="fa-brands fa-instagram fa-xl"></i></li>
                    <li className='mt-3 text-xs md:text-sm  hover:text-red-600 mb-2'>Twitter <i class="fa-brands fa-x-twitter fa-xl"></i></li>
                </ul>

            </div>


        </div>

        <div className='w-full h-24 bg-[#0a244a]  text-center '>
            <div className=' text-white underline text-lg '>Disclaimer</div>
            <div className='text-white text-sm md:px-32 mt-2' >Prices and availability of products are subject to change without notice. Despite our best efforts to ensure accuracy, occasional errors may occur in pricing or product availability. In such cases, we reserve the right to correct any errors and cancel or refuse orders as necessary.</div>
        </div>

    </>
    )
}

export default Footer