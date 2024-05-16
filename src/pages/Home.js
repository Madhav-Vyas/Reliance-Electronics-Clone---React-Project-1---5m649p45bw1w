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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import Subnavbar from '../components/Subnavbar';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [lowest, setLowest] = useState([]);
    const { getName } = useData();

    //slides to show based on screen size ------------------------------------------------------
    const [slidesToShow, setSlidesToShow] = useState(6);
    useEffect(() => {
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

        // Listen to window resize event
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //----------------------------------------------



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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "blue", opacity: 0.3, position: "absolute", zIndex: 100 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "blue", position: "absolute", opacity: 0.3 }}
                onClick={onClick}
            />
        );
    }



    return (<>
        <Subnavbar />
        <div className="global-Container sm:w-full ">

            <div className='text-xl text-center mb-3 md:mt-3 ml-8'>What Do You Want To Buy Today, <span className='text-orange-500'>{getName}</span>?</div>






            <div className="bg-white my-1">
                <NavLink to="/acpage"><img src="https://www.reliancedigital.in/medias/Good-Friday-Sale-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNzY0MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDE5L2hiMC8xMDEyNDkzNDE1MjIyMi5qcGd8ZjBlM2JiYTVhYzlmZDlkOWM2NTVhZGM5YzliOTZjZWNjMGQ5ZTlhZTMwODQ2MmI5YzNkY2Q2NjE5OWMyYzFhOA"></img></NavLink>
            </div>
            <div className="bg-white my-1">
                <div style={{ width: '97%', margin: '0 auto' }}>
                    <Slider {...settings2}>
                        <NavLink to="/kitchenpage"> <img src="https://www.reliancedigital.in/medias/Kitchen-Fest-Banner-D-rev-1.jpg?context=bWFzdGVyfGltYWdlc3w5OTQzM3xpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDBhLzEwMTI0NzAzNzYwNDE0LmpwZ3xkNTRiZTQyMGZjNmM5NDhjYzRhZWQ2ZjAyNTFmNTk0NDhhMzkzY2YyZjQ0ZDg3MzMwZTY2YTgwYTE0OThhNGNm"></img></NavLink>

                        <NavLink to="/televisonpage"><img src="https://www.reliancedigital.in/medias/Midnight-Sale-Banner-New.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2hmNi8xMDExMDU5MDc0NjY1NC5qcGd8NzY5ZGIzNjVlZDdiMWIxYWE2NmE1YjQ2YzUyZDQ5NWRjNDA5YmUzNzA2ZTNmYzcxNmE4ZjZkZGE4YmNjMTJkZQ"></img></NavLink>

                        <NavLink to="/laptoppage"> <img src="https://www.reliancedigital.in/medias/Gaming-laptops-Banner-1365X260-1-1-1-.jpg?context=bWFzdGVyfGltYWdlc3wyMDQyNTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDE3L2hlYS8xMDExNDY4ODM4NTA1NC5qcGd8NjM3ZGIyYmVjYThjM2Q3MGVhZTY2YzRlYzg4YmQ2MWQ4NzcxMzdiZDBjYmViYmYxOGYzOTEwYjZjZmIxNTRlNg"></img></NavLink>
                        <NavLink> <img src="https://www.reliancedigital.in/medias/OnePlus-Nord-3-5G-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3w5NDg2NXxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaDBjLzEwMTIxNjg4MDIzMDcwLmpwZ3w4MDcwY2E2MjNlZTliYjFmM2M4NGM2YTRmMWUxNmE5ZTEzMjM4MWI4NTZkM2IzYTg0MjlhZjc4YjM0M2EwNGE2"></img></NavLink>
                        <NavLink> <img src="https://www.reliancedigital.in/medias/Fireboltt-Oracle-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzE4MzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gxMy8xMDEyMzE2MjgxMjQ0Ni5qcGd8MzgyNmY0ZDczMWNmZDJhOWJjOWE4MWEwY2Q4ZDk4MDBhYTI2ZDAwZjczOTJjODUwYjk0YWRmMjY5OTQyODM5Yg"></img></NavLink>
                        <NavLink>  <img src="https://www.reliancedigital.in/medias/Summer-Ready-Sale-Beat-the-Heat-Banner-freebie-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMDQxMDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2g1MS8xMDEyMDI1MDMyNzA3MC5qcGd8M2M5NDAwZGFmYjgwMGYxZWJhM2FkN2Q4NTdjNWE5YzcyNmZlNzNiYWVjMjgwYjcxMzkwNjI5MDMxMmM2MmE5Yg"></img></NavLink>
                        <NavLink to="/televisonpage"><img src="https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wyNDI4Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGZiL2hjNi8xMDEyMDIzNzkwNzk5OC5qcGd8YWMzM2UzY2Q4YmE1YWE1MmM1NmNkNGM0NGJkNjU1Mjg4NzFmNzQwYTE1ZmVlNTViODQ0NWY5Y2ZkMmFmZjk2NA"></img></NavLink>
                        <NavLink to="/acpage">  <img src="https://www.reliancedigital.in/medias/New-Launches-AC-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzU0MjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2hlMi8xMDEyMDIyNDU3MTQyMi5qcGd8NDZlMTg5YmVjZmRhYzg4NjAzNGE2OGQyNzY3NjY4NDMxMzBmNTcwZGMwZmQ5ZTJjMDU5MDk1ZmZkNzg5N2VmMQ"></img></NavLink>
                        <NavLink to="/"><img src="https://www.reliancedigital.in/medias/JioAirFiber-1365-260-2-1-.jpg?context=bWFzdGVyfGltYWdlc3wzMDc4MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGIxL2gxNS8xMDExNDY4NjMyMDY3MC5qcGd8OThiMGExMjlhMWE0Yjc3ZDc5MzkxZTMyMmFkZWY3NGMzMjgzZDdhYTdiMDExMGY4ZTA5NjRkNGE5ZjM1OTk4ZA"></img></NavLink>
                    </Slider>
                    {/* </div > */}
                </div >

            </div >
            <div className="bg-white my-1">
                <div className='mx-1'>
                    <div className="text-lg font-semibold m-6 p-2">Digital Midnight Sale</div>
                    <div className='flex gap-3'>
                        <NavLink to="/kitchenpage"><img className='hover:scale-105' src="https://www.reliancedigital.in/medias/Top-Deals-on-Home-Kitchen-Appliances-GDOE-Banner-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MjAzOHxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDMwLzEwMTE0Njg4NTE2MTI2LmpwZ3w0YWY2YTdmMTgyNmJjY2Q0MzBhYTEyNDAzMWE3MjExMmY4ZjMxZjRjNmVjZWVlZTQ3MWI2ZDlkMTdmYjkyZDI4"></img></NavLink>
                        <NavLink to="/televisonpage"><img className='hover:scale-105' src="https://www.reliancedigital.in/medias/8-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MzYwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaGVlLzEwMTA1MzMyODkxNjc4LmpwZ3wyODdiMzc4MGE0OTRmNGQyMjVlYjJjYWE1ODg1OWVhM2NkMDZkMThhMDVjM2Y0NzA1NzA2YWEzNzIwMTg5ZTg1"></img></NavLink>
                        <NavLink to="/washingmachinepage"><img className='hover:scale-105' src="https://www.reliancedigital.in/medias/9-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MzExNnxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDg1LzEwMTA1MzMyOTU3MjE0LmpwZ3xmMmQ5NjNkODE1MGZkZjFhMjg4ZjhmNWNiMGFhNmZiZjNmNmJkYjA3YWU1OGQyMTc4M2NlZDJmMWQxZjk3MWJi"></img></NavLink>
                        <NavLink to="/audiopage"><img className='hover:scale-105' src="https://www.reliancedigital.in/medias/3-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0MTYxMXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaGQ0LzEwMTA1MzMyNjI5NTM0LmpwZ3wwZDY4NWUwOWM3NmI3ZjlkZmVjMmY3N2FmMWZiNjdmOTc3YWEzMjMxNWFhMGEzM2ZmNjVhN2JiN2E4MWNmNmU2"></img></NavLink>
                    </div>
                </div>
            </div>
            {/* --------------------------------Lowest price of the day----------------------------------------------------------------------------- */}
            <>


                <div className="bg-white my-1 w-full">
                    <div className="text-lg font-semibold pt-6 px-4">Lowest Price Of Today </div>

                    <div className="scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden">

                        <div style={{ width: '95%', margin: '0 auto' }}>
                            <Slider {...settings}>

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
                            </Slider>
                            {/* </div > */}
                        </div >

                    </div>
                </div>

            </>





            {/* --------------------------------Deal Of the day------------------------------------------------------------------------------------- */}
            <>
                <div className="bg-white my-1">
                    <h2 className="text-lg font-semibold pt-6 pl-4">Deal Of The Day ⚡</h2>
                    <div className="scroll-container lowest-price-today flex overflow-x-auto overflow-y-hidden">
                        <div style={{ width: '95%', margin: '0 auto' }}>
                            <Slider {...settings}>
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
                            </Slider>
                            {/* </div > */}
                        </div >
                    </div >
                </div>
            </>

            {/* -----------------------------------search by catagories----------------------------------------------------------- */}
            <>

                <Mobile />
                <NavLink to="/mobilepage"> <img src="https://www.reliancedigital.in/medias/Samsung-Galaxy-A55-A35-5G-Carousel-Banner-19-03-2024-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyMTR8aW1hZ2UvanBlZ3xpbWFnZXMvaGRhL2gzZC8xMDEyMjIwNDA4NjMwMi5qcGd8ZTA1NjgyYjljZDAxNjQxODM3OTgxNGU4ZjBjYjM2NmVhNzkxODRmNGZmN2FmYTA4ZGJiYjc1NmExNjlhYzI1OQ"></img></NavLink>
                <Ac />
                <Audio />
                <div>


                    <NavLink to="/laptoppage"> <img src="https://www.reliancedigital.in/medias/Buy-now-Apple-MacBook-Air-M3-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTE0OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2gyNi8xMDExNzk5MjM4MjQ5NC5qcGd8OTNjYzk2MzY5ZmI2ZWQ0Yzk5Y2M5N2MyN2EwOTZiOWEyZDYzNzlkMzEzZjZlZGViYzZkNTk5YjY4Njg4ODQ3Mg"></img></NavLink>

                </div>
                <Health />
                <Kitchenappliances />
                <Laptop />
                <Refrigerator />
                <NavLink to="/televisonpage"> <img src="https://www.reliancedigital.in/medias/RD-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wyMzMyMDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDY1L2hmZS8xMDEyMDI0OTkwMTA4Ni5qcGd8NzU4ZTgyM2IzMzc1MmI5NDdiZjRkMDEzM2ZhNmIyMTQ5YTcyZWJhN2I0NDA0ODFjZDIzY2EzNzAzNTMzYzViZA"></img></NavLink>
                <Tablet />
                <Travel />
                <NavLink to="/"> <img src="https://www.reliancedigital.in/medias/1365-261-3-1-.jpg?context=bWFzdGVyfGltYWdlc3wxOTI1ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDM1L2g2NS8xMDEwNDYzNjMwOTUzNC5qcGd8ODNlY2JiMjMyMDQ1Y2NjMGIxZjAyNDMyNDc0N2QyNWE3NWNhNGE0ZTMxNDBlOTkyYWJhNzVkMmI4YTEyNWY5OQ"></img></NavLink>
                <Televison />
                <WashingMachine />
            </>
        </div>

    </>)
}

export default Home