import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Mobile from '../components/AllCategories/Mobile';
import Ac from '../components/AllCategories/Ac';
import Audio from '../components/AllCategories/Audio';
import Health from '../components/AllCategories/Health';
import Kitchenappliances from '../components/AllCategories/Kitchenappliances';
import Laptop from '../components/AllCategories/Laptop';
import Refrigerator from '../components/AllCategories/Refrigerator';
import Tablet from '../components/AllCategories/Tablet';
import Travel from '../components/AllCategories/Travel';
import Televison from '../components/AllCategories/Televison';
import WashingMachine from '../components/AllCategories/WashingMachine';
import parse from 'html-react-parser';
import { useData } from "../Providers/AllcategoryData";
const Home = () => {
    const [products, setProducts] = useState([]);
    const [lowest, setLowest] = useState([]);
    const { getName } = useData();



    useEffect(() => {
        onProductHandler();
        onLowestHandler();

    }, [])


    const onProductHandler = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products", {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            setProducts(response.data.data)
        } catch (err) {
            console.log(err);
        }

    }

    const onLowestHandler = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/electronics/products", {
                params: {
                    sort: JSON.stringify({ price: 1 })
                },
                headers: {
                    projectID: "5m649p45bw1w"
                }
            });

            setLowest(response.data.data);

        } catch (err) {
            console.log(err);
        }
        console.log(lowest, "lowest data........................");

    }

    return (<>
        <div className="global-Container">
            {/* --------------------------------Lowest price of the day----------------------------------------------------------------------------- */}
            <>
                <h1 className='text-3xl text-center mb-3 mt-3'>What Do You Want To Buy Today, <span className='text-orange-500'>{getName}</span>?</h1>
                <h2 className="text-2xl font-semibold">Lowest Price Of Today 🤑</h2>
                <div className="scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden">
                    <img className="max-w-80" src="https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100316/93088778-banner-lowest-price-vector-illustration.jpg" alt="Lowest price today"></img>

                    {lowest.map((obj) => {
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

            </>




            {/* --------------------------------Deal Of the day------------------------------------------------------------------------------------- */}
            <>
                <h2 className="text-2xl font-semibold">Deal Of The Day ⚡</h2>
                <div className="scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden">
                    {products.map((obj) => {
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
            </>

            {/* -----------------------------------search by catagories----------------------------------------------------------- */}
            <>

                <Mobile />
                <Ac />
                <Audio />
                <Health />
                <Kitchenappliances />
                <Laptop />
                <Refrigerator />
                <Tablet />
                <Travel />
                <Televison />
                <WashingMachine />
            </>
        </div>

    </>)
}

export default Home