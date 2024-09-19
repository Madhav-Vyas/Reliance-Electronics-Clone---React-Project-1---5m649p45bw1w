import React from 'react'
import { useData } from '../../Providers/AllcategoryData'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from "react";
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner'
import { observer } from 'mobx-react-lite';
import travelStore from '../../Store/TravelStore';
import { toJS } from 'mobx';
const TravelPage = observer(() => {



    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // code for infinite scroll...............................................................


    useEffect(() => {
        travelStore.onTravelpageHandler(page)
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














    return (
        <>
            <h1 className="inline-block font-semibold text-center text-lg py-9 ">Travel 💼🌴</h1>
            <button onClick={travelStore.sortByRatingHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Rating(High to Low)</button>
            <button onClick={travelStore.sortByPriceLtoH} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(Low to High)</button>
            <button onClick={travelStore.sortByRatingHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(High to low)</button>
            <div className='flex flex-wrap'>
                {toJS(travelStore.travel).map((obj) => {
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
            {loading && <ThreeCircles
                visible={true}
                height="50"
                width="50"
                color="red"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />}
        </>
    )
})

export default TravelPage