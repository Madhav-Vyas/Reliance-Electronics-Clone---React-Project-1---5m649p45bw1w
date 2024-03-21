import React from 'react'

import { useData } from '../../Providers/AllcategoryData'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner'
const KitchenappliancePage = () => {
    const { getkitchen, kitchenDataHandler } = useData()
    const limit = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [selectedsubCataegory, setSelectedSubCataegory] = useState('kitchenappliances');
    const [loading, setLoading] = useState(true);


    // code for infinite scroll...............................................................

    const onKitchenappliancesHandeler = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });

            // Update data state with new fetched data
            setData((prev) => [...prev, ...response.data.data]);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        onKitchenappliancesHandeler();
    }, [page]); // Update data whenever page changes

    useEffect(() => {
        scroll();
        return () => {
            window.removeEventListener('scroll', onscroll); // Clean up scroll event listener
        }
    }, []);


    const scroll = () => {
        window.addEventListener('scroll', handleScroll);
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && page <= 10) {
            setPage((prev) => prev + 1);
        }
    }


    // code for infinite scroll End...............................................

    //Sorting LOGIC

    const sortByPriceLtoH = () => {
        const sorted = [...data].sort((a, b) => {
            return a.price - b.price;
        });
        setData(sorted);
    }

    const sortByPriceHtoL = () => {
        const sorted = [...data].sort((a, b) => {
            return b.price - a.price;
        });
        setData(sorted);
    }

    const sortByRatingHtoL = () => {
        const sorted = [...data].sort((a, b) => {
            return b.ratings - a.ratings;
        });
        setData(sorted);
    }
    return (
        <>
            <h1 className="inline-block font-semibold text-center text-5xl py-9 ">Kitchen 🔪</h1>
            <button onClick={sortByRatingHtoL} className="bg-blue-500 text-2xl hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Rating(High to Low)</button>

            <button onClick={sortByPriceLtoH} className="bg-blue-500 text-2xl hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(Low to High)</button>

            <button onClick={sortByPriceHtoL} className="bg-blue-500 text-2xl hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(High to low)</button>

            <div className='flex flex-wrap'>
                {data.map((obj) => {
                    return <ProductCard
                        description={obj.description}
                        sellerTag={obj.sellerTag}
                        subcategory={obj.subcategory}
                        features={obj.features}
                        videos={obj.videos}

                        brand={obj.brand}
                        name={obj.name}
                        category={obj.category}
                        displayImage={obj.displayImage}
                        price={obj.price}
                        rating={obj.ratings.toFixed(1)}
                        id={obj._id}
                    />
                })}
            </div>
            {loading && <Audio
                height="30"
                width="500"
                radius="9"
                color="red"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />}
        </>
    )
}

export default KitchenappliancePage;