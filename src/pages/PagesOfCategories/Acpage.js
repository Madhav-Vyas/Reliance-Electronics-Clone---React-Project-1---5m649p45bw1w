import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Audio } from 'react-loader-spinner';
import { observer } from 'mobx-react-lite';
import acStore from "../../Store/AcStore";

const Acpage = observer(() => {
    const [page, setPage] = useState(1);  // Page state
    const [loading, setLoading] = useState(false);  // Loading state


    useEffect(() => {
        acStore.onAcpageHandler(page);  // Pass page to the handler
    }, []);
    // Fetch AC data for infinite scrolling
    useEffect(() => {
        acStore.onAcpageHandler(page);  // Pass page to the handler
    }, [page]);

    useEffect(() => {
        scroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scroll = () => {
        window.addEventListener('scroll', handleScroll);
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && page <= 10) {
            setPage((prev) => prev + 1);  // Increment page number when scrolling to bottom
        }
    };

    // Sorting functions


    return (
        <>
            <h1 className="inline-block font-semibold text-center text-lg py-9">Air-Conditioners in All Categories ⛄❄</h1>
            <button onClick={acStore.sortByRatingHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded">Rating(High to Low)</button>
            <button onClick={acStore.sortByPriceLtoH} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded">Price(Low to High)</button>
            <button onClick={acStore.sortByPriceHtoL} className="bg-blue-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded">Price(High to Low)</button>

            <div className="flex flex-wrap">
                {acStore.acPageData.map((obj) => (
                    <ProductCard
                        key={obj._id}
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
                        rating={obj.ratings}
                        id={obj._id}
                    />
                ))}
            </div>

            {loading && (
                <Audio
                    height="30"
                    width="500"
                    radius="9"
                    color="red"
                    ariaLabel="loading"
                />
            )}
        </>
    );
});

export default Acpage;
