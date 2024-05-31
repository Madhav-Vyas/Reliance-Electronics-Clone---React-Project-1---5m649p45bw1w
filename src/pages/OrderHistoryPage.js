import React from 'react';
import { useData } from '../Providers/AllcategoryData';
import CheckOutCard from '../components/CheckOutCard';
import CheckOutCardCart from '../components/CheckOutCardCart';
import OrderHistoryCard from '../components/OrderHistoryCard';
const OrderHistoryPage = () => {
    //orderHistory is variable which comes from context API in this all orders which are placed directly without adding to cart is stored in form of array

    //cartOrders is variable which also comes from context API , in this array of arrays is being stored as multiple items are added in cart and then order is being placed .

    //so here we used flat() property of array to extract all arraays out in single array and stored in allCart Orders variable and mappled that variable to show cart orders

    //CheckoutCard component is used to map data in form of card
    const { orderHistory, cartOrders } = useData();
    console.log(cartOrders.flat());
    console.log(orderHistory);

    const allcartOrders = cartOrders.flat();

    return (
        <div>
            <div className='w-full text-center md:text-xl mt-4 underline text-semibold flex flex-row justify-center'><h2 className=''>My Order History </h2><i className="fa-solid fa-boxes-stacked mt-2 ml-2"></i></div>
            {orderHistory.map((order, index) => (

                <OrderHistoryCard
                    displayImage={order.displayImage}
                    price={order.totalPrice}
                    rating={order.ratings}
                    name={order.name}

                />
            ))}
            {allcartOrders.map((order, index) => (

                <CheckOutCardCart
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

