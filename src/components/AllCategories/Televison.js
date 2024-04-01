
import ProductCard from "../ProductCard";
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useData } from "../../Providers/AllcategoryData";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Televison = () => {
    const [getCategory, setCategory] = useState([]);
    const [selectedsubCataegory, setSelectedSubCataegory] = useState('tv');
    const { televisonDatahandler } = useData();
    useEffect(() => {
        onTelevisonHandeler();
    }, [])
    const onTelevisonHandeler = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            setCategory(response.data.data);
            televisonDatahandler(response.data.data);

        } catch (err) {
            console.log(err);
        }


    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "blue", opacity: 0.3 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "blue", opacity: 0.3 }}
                onClick={onClick}
            />
        );
    }
    return (<div className="bg-white my-1">
        <h2 className="text-lg font-semibold inline-block ml-2 pt-6 pl-4">TV   </h2> <NavLink to="/televisonpage"><button className="px-2 py-1 bg-blue-800 ml-4 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out  text-sm">View All</button></NavLink>

        <div style={{ width: '95%', margin: '0 auto' }}>
            <Slider {...settings}>
                {/* <div className=' scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden w-full h-auto'> */}

                {getCategory.map((obj, index) => {
                    return <div key={obj._id}>
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
                            rating={obj.ratings.toFixed(1)}
                            id={obj._id}
                        />
                    </div>
                })}
            </Slider>
            {/* </div > */}
        </div >
    </div>)
}

export default Televison