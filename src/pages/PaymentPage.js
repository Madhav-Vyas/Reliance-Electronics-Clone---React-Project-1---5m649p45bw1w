import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { totalPrice } = location.state;

    // State to store selected payment method
    const [selectedPayment, setSelectedPayment] = useState(null);

    // Function to handle dropdown change
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };
    const [order, setOrder] = useState(false);
    const paymentHandler = () => {
        setOrder(true);
    }
    const continueShopping = () => {
        navigate("/");
    }
    return (
        <div className="max-w-lg mx-auto mt-24 mb-96">
            <div className="mb-4">
                <div className='text-4xl'>Order Total : &#8377;{totalPrice}</div>
            </div>
            <div className="mb-4">
                <p className="font-semibold mb-2">Select Payment Method:</p>
                <select
                    value={selectedPayment}
                    onChange={handlePaymentChange}
                    className="block w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Select Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">Google Pay</option>
                    <option value="PayPal">Paytm</option>
                    <option value="PayPal">Cash on Delivery</option>
                    {/* Add more options for other payment methods if needed */}
                </select>
            </div>
            <button onClick={paymentHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-72">
                Make Payemt
            </button>
            {order && <>
                <div className='text-green-600'>Order Placed Sucessfully and will be deliverd to you in 3-4 business days✅</div>
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded" onClick={continueShopping}>Continue Shopping</button>
            </>
            }
        </div>
    );
};

export default PaymentPage;
