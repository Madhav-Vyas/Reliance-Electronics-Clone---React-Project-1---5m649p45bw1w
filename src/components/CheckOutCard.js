import React, { useEffect } from 'react'
import { useData } from '../Providers/AllcategoryData'
const CheckOutCard = ({ displayImage, totalPrice, price, rating, name, qtyhandler, qty, }) => {

    const { buyQtySetter, buyNowTotalPriceAfterQty } = useData();
    useEffect(() => {
        buyQtySetter(price * qty);
    }, [qty])
    return (
        <>
            <button></button>
            <div className="border border-gray-200 rounded-lg p-4 mb-1 relative flex justify-start w-4/5 ">
                <div className="flex flex-wrap items-center mb-2">
                    <img src={displayImage} alt={name} className="w-32 h-32 object-cover mr-4" />
                    <div>
                        <p className="text-xs md:text-sm font-semibold">{name}</p>
                        <div className='flex gap-2'>
                            <p className="text-gray-500 text-xs">Quantity:</p>
                            <input className='w-10' type='number' onChange={qtyhandler} min={1} defaultValue={1} />
                        </div>
                    </div>
                </div>
                <p className="text-sm md:text-lg text-right absolute top-2 right-5 md:top-4 md:right-6 text-red-500 font-semibold">&#8377;{buyNowTotalPriceAfterQty}</p>
            </div>






        </>
    )
}

export default CheckOutCard
// I've used Tailwind CSS classes to adjust the font sizes, margins, and padding for mobile screens (text-lg md:text-xl, top-2 md:top-4, right-5 md:right-6, etc.).
// The font size of the product name and price has been adjusted using Tailwind's responsive text size utilities (text-lg md:text-xl and text-lg md:text-2xl, respectively).
// The top and right positions of the price text have been adjusted for mobile screens using Tailwind's responsive spacing utilities (top-2 md:top-4 and right-5 md:right-6).