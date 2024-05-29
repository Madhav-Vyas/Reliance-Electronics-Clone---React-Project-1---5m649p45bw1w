import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import { useData } from "../Providers/AllcategoryData";
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
const SearchPage = () => {
    //these 2 terms come from context 
    const { searchTerm, searchTermHandler } = useData();//should be in context
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    //whenever there is change in searchTerm this initial function will be triggred
    useEffect(() => {
        initial();
    }, [searchTerm])


    const initial = async () => {
        //if there is total backspace and there is no character in search bar, navigate to home page
        if (searchTerm == '') {
            navigate("/")
        }
        //otherwise searchterm is entered here and API is beig hit searchResults will be set and data will be displayed
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
    //there is a home button on search page this function is called on click of that
    const goHome = () => {
        searchTermHandler("");
        navigate("/")
    }
    return (<>
        <button className="m-8 bg-blue-800 hover:bg-blue-700 text-white text-sm font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" onClick={goHome}> &lt; Home</button>
        <div className='flex flex-wrap'>
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