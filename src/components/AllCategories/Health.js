
import ProductCard from "../ProductCard";
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useData } from "../../Providers/AllcategoryData";
import { NavLink } from "react-router-dom";

const Health = () => {
    const [getCategory, setCategory] = useState([]);
    const [selectedsubCataegory, setSelectedSubCataegory] = useState('health');
    const { gethealth, healthDatahandler } = useData();
    useEffect(() => {
        onHealthHandeler();
    }, [])
    const onHealthHandeler = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            setCategory(response.data.data);
            healthDatahandler(response.data.data)
        } catch (err) {
            console.log(err);
        }


    }
    return (<>
        <h2 className="inline-block text-lg font-semibold">Health and Care 👩‍⚕️</h2> <NavLink to="/healthpage"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">View All</button></NavLink>

        <div className=' scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden'>
            {getCategory.map((obj) => {
                return <ProductCard
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
                    rating={obj.ratings.toFixed(1)}
                    id={obj._id}
                />
            })}

        </div>
    </>)
}

export default Health