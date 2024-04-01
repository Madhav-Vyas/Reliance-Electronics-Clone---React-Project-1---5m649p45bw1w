import React from 'react'

const CustomerService = () => {
    return (
        <>
            <div className='w-full h-full'>
                <div className='w-full flex justify-center h-96 mt-6'>
                    <img className='w-3/5 rounded-lg' src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div className=' w-full my-4 font-semibold flex justify-center text-2xl'>WE WOULD LOVE TO HELP YOU</div>

                <div className=' w-full flex justify-center mb-4'> REACH US AT:</div>
                <div className='cards flex justify-between'>
                    <div className='card mx-20 w-1/5'>
                        <div className='w-72 flex justify-center bg-blue-800 text-white p-4'> <h1><i class="fa-solid fa-phone"></i> Call us</h1></div>
                        <div className='border-slate-300 border w-72 h-72 p-6'>
                            <ul className='list-disc'>
                                <li>For E-Commerce Related Queries

                                    1800 889 1055
                                    ( 9:30 AM to 7:30 PM, 365 days )</li>
                                <li>For Store Related Queries
                                    1800-889-1044
                                    ( 9:00 AM to 9:00 PM, 365 days )</li>

                            </ul>
                        </div>
                    </div>

                    <div className='card mx-20 mb-10 w-1/5'>
                        <div className='w-72 flex justify-center bg-blue-800 text-white p-4'> <h1><i class="fa-brands fa-whatsapp"></i> WhatsApp us</h1></div>
                        <div className='border-slate-300 border w-72 h-72 p-6'>
                            <ul className='list-disc'>
                                <li>We are now on WhatsApp
                                    Send Hi! to +91 797791234</li>

                            </ul>
                        </div>
                    </div>

                    <div className='card mx-20 w-1/5'>
                        <div className='w-72 flex justify-center bg-blue-800 text-white p-4'>   <h1><i class="fa-solid fa-envelope-open"></i> Email Us</h1></div>
                        <div className='border-slate-300 border w-72 h-72 p-6'>
                            <ul className='list-disc'>
                                <li>reliancedigital@ril.com</li>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default CustomerService