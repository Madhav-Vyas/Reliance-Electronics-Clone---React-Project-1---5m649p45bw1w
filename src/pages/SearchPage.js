import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import { useData } from "../Providers/AllcategoryData";
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
const SearchPage = () => {
    const { searchTerm } = useData();//should be in context
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        initial();
    }, [searchTerm])
    const initial = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"description":"${searchTerm}"}`, {
                headers: {
                    projectID: "5m649p45bw1w"
                }
            });
            console.log(response.data.data);
            setSearchResults(response.data.data);
        }
        catch (err) {
            console.log(err);
        }

    }
    const goHome = () => {
        navigate("/")
    }
    return (<>
        <button className="m-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={goHome}> &lt; Home</button>
        <div>
            {searchResults.length > 0 ? ( // Check if searchResults has data
                searchResults.map((obj) => (
                    <ProductCard
                        key={obj._id} // Make sure to include a unique key for each product
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
                ))
            ) : (
                <p>No search results found.</p> // Display a message if there are no search results
            )}
        </div>
    </>
    )
}

export default SearchPage