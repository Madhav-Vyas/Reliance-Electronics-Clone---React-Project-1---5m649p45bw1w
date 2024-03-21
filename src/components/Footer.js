import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (<>
        <div className='w-full h-96 bg-blue-700 text-white flex justify-around '>

            <div id="product-cat" className='text-lg'><span className='text-3xl underline'>Product Categories</span>

                <ul>
                    <NavLink to="/acpage"><li>Ac</li></NavLink>
                    <NavLink to="/audiopage"><li>Audio </li></NavLink>
                    <NavLink to="/healthpage"> <li>Health</li></NavLink>
                    <NavLink to="/kitchenpage"><li>Kitchen Appliances</li></NavLink>
                    <NavLink to="/laptoppage"><li>Laptop</li></NavLink>
                    <NavLink to="/mobilepage"> <li>Mobile</li></NavLink>
                    <NavLink to="/refregeratorpage"> <li>Refrigerator</li></NavLink>
                    <NavLink to="/tabletpage"> <li>Tablet</li></NavLink>
                    <NavLink to="/televisonpage"><li>Televison</li></NavLink>
                    <NavLink to="/travelpage"> <li>Travel</li></NavLink>
                    <NavLink to="/washingmachinepage"><li>Washing Machine</li></NavLink>
                </ul>

            </div>
            <div id="contact Us" className=""><span className='text-3xl underline'>Contact Us</span>
                <ul>
                    <li>Email Address: RelainceDigital@gmail.com</li>
                    <li>Contact No: 9213459012</li>
                </ul>

                <ul className='mt-32'>
                    <span className='text-3xl underline'>Follow us on:</span>
                    <li className='mt-3'>Facebook <i class="fa-brands fa-facebook fa-xl"></i></li>
                    <li className='mt-3'>Instagram <i class="fa-brands fa-instagram fa-xl"></i></li>
                    <li className='mt-3'>Twitter <i class="fa-brands fa-x-twitter fa-xl"></i></li>
                </ul>

            </div>


        </div>

        <div className='w-full h-28 bg-blue-500  text-center '>
            <div className=' text-white underline text-xl'>Disclaimer</div>
            <div className='text-white' >Prices and availability of products are subject to change without notice. Despite our best efforts to ensure accuracy, occasional errors may occur in pricing or product availability. In such cases, we reserve the right to correct any errors and cancel or refuse orders as necessary.</div>
        </div>

    </>
    )
}

export default Footer