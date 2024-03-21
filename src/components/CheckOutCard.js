import React from 'react'

const CheckOutCard = ({ displayImage, price, rating, name, quantity }) => {
    return (
        <>

            <div className="border border-gray-200 rounded-lg p-4 mb-4 relative flex justify-start">
                <div className="flex flex-wrap items-center mb-2">
                    <img src={displayImage} alt={name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                        <p className="text-lg md:text-xl font-semibold">{name}</p>
                        <p className="text-gray-500">Quantity: {quantity}</p>
                    </div>
                </div>
                <p className="text-lg md:text-2xl text-right absolute top-2 right-5 md:top-4 md:right-6 text-red-500 font-semibold">&#8377;{price}</p>
            </div>






        </>
    )
}

export default CheckOutCard
// I've used Tailwind CSS classes to adjust the font sizes, margins, and padding for mobile screens (text-lg md:text-xl, top-2 md:top-4, right-5 md:right-6, etc.).
// The font size of the product name and price has been adjusted using Tailwind's responsive text size utilities (text-lg md:text-xl and text-lg md:text-2xl, respectively).
// The top and right positions of the price text have been adjusted for mobile screens using Tailwind's responsive spacing utilities (top-2 md:top-4 and right-5 md:right-6).