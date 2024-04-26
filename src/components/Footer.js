import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (<>
        <div className='w-full h-80 bg-blue-700 text-white flex justify-around '>

            <div id="product-cat" className='text-sm mt-4 mx-2'><span className='text-xl underline'>Product Categories</span>

                <ul className='mt-2'>
                    <NavLink className="hover:text-red-600" to="/acpage"><li>Ac</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/audiopage"><li>Audio </li></NavLink>
                    <NavLink className="hover:text-red-600" to="/healthpage"> <li>Health</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/kitchenpage"><li>Kitchen Appliances</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/laptoppage"><li>Laptop</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/mobilepage"> <li>Mobile</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/refregeratorpage"> <li>Refrigerator</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/tabletpage"> <li>Tablet</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/televisonpage"><li>Televison</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/travelpage"> <li>Travel</li></NavLink>
                    <NavLink className="hover:text-red-600" to="/washingmachinepage"><li>Washing Machine</li></NavLink>
                </ul>

            </div>
            <div id="contact Us" className="mt-4 ml-8"><span className='text-xl underline '>Contact Us</span>
                <ul className='mt-2'>
                    <li className='text-sm'>Email Address: RelainceDigital@gmail.com</li>
                    <li className='text-sm'>Contact No: 9213459012</li>
                </ul>

                <ul className='mt-10'>
                    <span className='text-xl underline hover:text-red-600'>Follow us on:</span>
                    <li className='mt-3 text-sm  hover:text-red-600'>Facebook <i class="fa-brands fa-facebook fa-xl"></i></li>
                    <li className='mt-3 text-sm  hover:text-red-600'>Instagram <i class="fa-brands fa-instagram fa-xl"></i></li>
                    <li className='mt-3 text-sm  hover:text-red-600'>Twitter <i class="fa-brands fa-x-twitter fa-xl"></i></li>
                </ul>

            </div>


        </div>

        <div className='w-full h-24 bg-blue-500  text-center '>
            <div className=' text-white underline text-lg '>Disclaimer</div>
            <div className='text-white' >Prices and availability of products are subject to change without notice. Despite our best efforts to ensure accuracy, occasional errors may occur in pricing or product availability. In such cases, we reserve the right to correct any errors and cancel or refuse orders as necessary.</div>
        </div>

    </>
    )
}

export default Footer