import React from 'react'
import ProductCard from '../../components/ProductCard'
import { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner'
import { observer } from "mobx-react-lite";
import healthStore from "../../Store/HealthStore";
import { toJS } from "mobx";
const HealthPage = observer(() => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);



    // code for infinite scroll...............................................................
    useEffect(() => {
        healthStore.onHealthPageHandler(page)
    }, []);

    useEffect(() => {
        healthStore.onHealthPageHandler(page)
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
            <h1 className="inline-block font-semibold text-center text-lg py-9 ">Health and Care 👩‍⚕️</h1>
            <button onClick={healthStore.sortByRatingHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Rating(High to Low)</button>
            <button onClick={healthStore.sortByPriceLtoH} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(Low to High)</button>
            <button onClick={healthStore.sortByPriceHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded ">Price(High to low)</button>
            <div className='flex flex-wrap'>
                {toJS(healthStore.healthPageData).map((obj) => {
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
})

export default HealthPage