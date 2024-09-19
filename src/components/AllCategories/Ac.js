import ProductCard from "../ProductCard";
import React from 'react'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acStore from "../../Store/AcStore";
import { observer } from 'mobx-react-lite';
const Ac = observer(() => {

    useEffect(() => {
        acStore.onAcHandeler()
    }, []);



    //slides to show based on screen size ------------------------------------------------------
    const [slidesToShow, setSlidesToShow] = useState(6);
    useEffect(() => {
        //if screen size is less than 768px then show only 2 slides otherwise 6 slides
        const handleResize = () => {
            // Adjust slidesToShow based on screen width
            if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(6);
            }
        };

        // Initial call to set slidesToShow
        handleResize();

        // Listen to window resize event, when resize event happens means , when we change screen size then this function is trigreed
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //----------------------------------------------




    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", height: "40px", paddingTop: "10px", borderRadius: "8px", background: "#a9adb0", opacity: 0.9, position: "absolute", zIndex: 12 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", height: "40px", paddingTop: "10px", borderRadius: "8px", background: "#a9adb0", opacity: 0.9, position: "absolute", zIndex: 12 }}
                onClick={onClick}
            />
        );
    }

    return (<div className="bg-white my-1">

        <h2 className="inline-block text-lg font-semibold ml-2 pt-6 pl-4  ">Air-Conditioners in All Cartegories   </h2><NavLink to="/acpage"><button className="px-2 py-1 bg-blue-800 ml-4 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out text-sm">View All</button></NavLink>
        <div style={{ width: '95%', margin: '0 auto' }}>
            <Slider {...settings}>
                {/* <div className=' scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden w-full h-auto'> */}

                {acStore.ac.map((obj, index) => {
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
})

export default Ac