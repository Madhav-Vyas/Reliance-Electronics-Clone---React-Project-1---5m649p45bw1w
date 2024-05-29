import React from 'react'

const CheckOutCardCart = ({ key, displayImage, price, rating, name, quantity }) => {
    return (
        <>
            <button></button>
            <div className="border border-gray-200 rounded-lg p-4 mb-1 relative flex justify-start w-4/5 ">
                <div className="flex flex-wrap items-center mb-2">
                    <img src={displayImage} alt={name} className="w-32 h-32 object-cover mr-4" />
                    <div>
                        <p className="text-xs md:text-sm font-semibold">{name}</p>
                        <p className="text-gray-500 text-xs">Quantity:{quantity}</p>

                    </div>
                </div>
                <p className="text-sm md:text-lg text-right absolute top-2 right-5 md:top-4 md:right-6 text-red-500 font-semibold">&#8377;{price}</p>
            </div>






        </>
    )
}

export default CheckOutCardCart