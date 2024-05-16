import React from 'react';
import { useData } from '../Providers/AllcategoryData';
import CheckOutCard from '../components/CheckOutCard';
const OrderHistoryPage = () => {
    const { orderHistory, cartOrders } = useData();
    console.log(cartOrders[0]);


    return (
        <div>
            <div className='w-full text-center md:text-xl mt-4 underline text-semibold flex flex-row justify-center'><h2 className=''>My Order History </h2><i className="fa-solid fa-boxes-stacked mt-2 ml-2"></i></div>
            {orderHistory.map((order, index) => (
                // <div key={index}>
                //     <img src={order.displayImage} alt={order.name} />
                //     <p>Name: {order.name}</p>
                //     <p>Price: {order.price}</p>
                //     {/* Render other order details here */}
                // </div>
                <CheckOutCard
                    displayImage={order.displayImage}
                    price={order.price}
                    rating={order.ratings}
                    name={order.name}

                />
            ))}
            {cartOrders[0].map((order, index) => (

                <CheckOutCard
                    displayImage={order.product.displayImage}
                    quantity={order.quantity}
                    price={order.product.price}
                    rating={order.product.ratings}
                    name={order.product.name}

                />
            ))}
        </div>
    );
}

export default OrderHistoryPage;

