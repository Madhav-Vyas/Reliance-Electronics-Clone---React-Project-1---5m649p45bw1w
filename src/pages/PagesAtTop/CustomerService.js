import React from 'react'

const CustomerService = () => {
    return (
        <>
            <>
            </>
            <div className='w-full h-full'>
                <div className='w-full flex justify-center h-96 mt-6'>
                    <img className='w-4/5 rounded-lg' src="https://plus.unsplash.com/premium_photo-1665203604603-e097954797e9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div className=' w-full my-4 font-semibold flex justify-center text-2xl'>WE WOULD LOVE TO HELP YOU</div>

                <div className=' w-full flex justify-center mb-4'> REACH US AT:</div>
                <div className='cards flex gap-12 justify-evenly'>
                    <div className='card  w-1/5'>
                        <div className='w-72 flex justify-center bg-[#204a86] text-white p-4'> <h1><i class="fa-solid fa-phone"></i> Call us</h1></div>
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

                    <div className='card  mb-10 w-1/5'>
                        <div className='w-72 flex justify-center bg-[#204a86] text-white p-4'> <h1><i class="fa-brands fa-whatsapp"></i> WhatsApp us</h1></div>
                        <div className='border-slate-300 border w-72 h-72 p-6'>
                            <ul className='list-disc'>
                                <li>We are now on WhatsApp
                                    Send Hi! to +91 797791234</li>

                            </ul>
                        </div>
                    </div>

                    <div className='card  w-1/5'>
                        <div className='w-72 flex justify-center bg-[#204a86] text-white p-4'>   <h1><i class="fa-solid fa-envelope-open"></i> Email Us</h1></div>
                        <div className='border-slate-300 border w-72 h-72 p-6'>
                            <ul className='list-disc'>
                                <li>reliancedigital@ril.com</li>


                            </ul>
                            <div>
                                <div className='hidden md:inline '>
                                    <div className='mt-8 font-bold'>DOWNLOAD RESQ APP ON MOBILE</div>
                                    <div className='flex'>
                                        <div>  <img className='w-32' src="https://www.reliancedigital.in/build/client/images/google_play_store.png" /></div>
                                        <div><img className='w-32 mb-4' src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:mx-20 md:ml-28 mb-20'>
                    <div className=' text-[#204a86] md:text-4xl '>Concerns not Addressed?</div>
                    <div className='text-slate-500'>It is our priority to positively respond and address any concerns you may have at the earliest. To ensure this, our team is continuously working to provide you the best of support though a few concern/issues that are complex in nature may require additional time to resolve.

                        In the unlikely event that your concerns are not addressed satisfactorily, you could communicate directly to higher authorities. To facilitate and better manage this we have aligned a structure to aid communication.</div>
                </div>
            </div>

        </>

    )
}

export default CustomerService