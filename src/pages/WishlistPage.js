import React, { useEffect, useState } from 'react'
import axios from "axios";

import { useData } from '../Providers/AllcategoryData';
import ProductCard from '../components/ProductCard';
import CheckOutCard from '../components/CheckOutCard';
import WishListCard from '../components/WishListCard';
const WishlistPage = () => {

    const { getToken } = useData()
    const [data, setData] = useState([]);


    //initial function is called every time we load wishlistpage
    useEffect(() => {
        initial()
    }, []);

    //on wishlist page get request on same api is made to extract and show the products that are added in wishlist
    //wishlist card component is used to display the whishlist products
    const initial = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
                headers: {
                    Authorization: `Bearer ${getToken}`, // Pass the token
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data.items);
            setData(response.data.data.items);


        } catch (err) {
            console.log(err);
        }

    }
    return (
        <>
            <div className='mt-2 flex justify-center'>
                <div className='text-xl font-semibold '>My Wishlist</div>
            </div>
            {/* <div> <button onClick={deleteAll}>Clear All</button></div> */}
            <div className='flex flex-wrap gap-3'> {/* Add flex-col for vertical layout */}
                {data.map((obj, index) => (
                    <div className='flex' key={obj._id}>
                        <WishListCard
                            displayImage={obj.products.displayImage}
                            key={obj.products._id}
                            name={obj.products.name}
                            price={obj.products.price}
                            id={obj.products._id}
                            onDelete={() => initial()}
                        // rating={obj.products.ratings}
                        />
                    </div>
                ))}
            </div>
        </>

    )
}

export default WishlistPage;