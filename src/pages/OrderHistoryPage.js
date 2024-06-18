import React from 'react';
import { useData } from '../Providers/AllcategoryData';
import CheckOutCard from '../components/CheckOutCard';
import CheckOutCardCart from '../components/CheckOutCardCart';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistoryPage = () => {
    const { orderHistory, cartOrders } = useData();

    // Combine orderHistory and cartOrders into a single array
    const allCartOrders = cartOrders.flat();
    const combinedOrders = [...orderHistory, ...allCartOrders];

    return (
        <div>
            <div className='w-full text-center md:text-xl mt-4 underline text-semibold flex flex-row justify-center'>
                <h2>My Order History</h2>
                <i className="fa-solid fa-boxes-stacked mt-2 ml-2"></i>
            </div>

            {combinedOrders.length === 0 ? (
                <div className='w-full text-center mt-4 text-semibold mb-20'>
                    <p>Order history is not available since no orders have been placed previously.</p>
                </div>
            ) : (
                <div>
                    {orderHistory.map((order, index) => (
                        <OrderHistoryCard
                            key={index}
                            displayImage={order.displayImage}
                            price={order.totalPrice}
                            rating={order.ratings}
                            name={order.name}
                        />
                    ))}
                    {allCartOrders.map((order, index) => (
                        <CheckOutCardCart
                            key={index}
                            displayImage={order.product.displayImage}
                            quantity={order.quantity}
                            price={order.product.price}
                            rating={order.product.ratings}
                            name={order.product.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrderHistoryPage;
