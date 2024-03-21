import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutCard from '../components/CheckOutCard';
const BuynowCheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { displayImage, name, price, ratings, sellerTag } = location.state;

    const goToPaymentPage = () => {
        navigate("/buynowpayment", {
            state: {
                price
            }
        })
        console.log({
            price

        });
    }
    return (
        <div className='mt-5 mb-96'>
            <CheckOutCard
                displayImage={displayImage}
                price={price}
                rating={ratings}
                name={name}
                quantity={1}
            />

            <h1 className='text-2xl m-5 text-center'>Total Price:<span className='text-4xl text-bold  text-red-500 '>{price}</span></h1>
            <div className='flex justify-center'>
                <button onClick={goToPaymentPage} className="p-5 bg-red-600 w-96 hover:bg-blue-700 text-4xl text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-96 ">
                    Make Payment
                </button>
            </div>

        </div>
    )
}

export default BuynowCheckoutPage