import React, { useEffect, useState } from "react";
import CarouselLayout from "../../components/Carousel/Carousel";
import "../../assets/styles/index.scss"
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
const HomePage = () => {
    const [products, setproducts] = useState()
    const fetchData = async () => {
        const response = await axios.get(`/api/products`);
        setproducts(response.data)
    }
    console.log(products);
    const sHoodie = products?.find((item) => item.clothingType === 'hoodie' && item.design === 'solid')
    const pHoodie = products?.find((item) => item.clothingType === 'hoodie' && item.design === 'printed')
    const sTshirt = products?.find((item) => item.clothingType === 'tshirt' && item.design === 'solid')
    const pTshirt = products?.find((item) => item.clothingType === 'tshirt' && item.design === 'printed')

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <section><CarouselLayout /></section>
            <section className="featured-products-sec py-4 my-5">
                <h3 className="text-center">Featured Products</h3>
                <div className="products-tab-wrapper my-5 d-flex justify-content-evenly flex-wrap p-1">
                    <div className="products-tab position-relative">
                        <div className="product-pic">
                            <Link to='products'><img src={sHoodie?.image} alt="" className="w-100 h-100 object-fit-cover" /></Link>
                        </div>
                        <p className="product-slug m-0 position-absolute w-100">{sHoodie?.name}</p>
                    </div>
                    <div className="products-tab position-relative">
                        <div className="product-pic">  <Link to='products'><img src={sTshirt?.image} alt="" className="w-100 h-100 object-fit-cover" /></Link></div>
                        <p className="product-slug m-0 position-absolute w-100">{sTshirt?.name}</p>
                    </div>
                    <div className="products-tab position-relative">
                        <div className="product-pic"><Link to='products'><img src={pTshirt?.image} alt="" className="w-100 h-100 object-fit-cover" /></Link> </div>
                        <p className="product-slug m-0 position-absolute w-100">{pTshirt?.name}</p>
                    </div>
                    <div className="products-tab position-relative">
                        <div className="product-pic"> <Link to='products'><img src={pHoodie?.image} alt="" className="w-100 h-100  object-fit-cover" /></Link></div>
                        <p className="product-slug m-0 position-absolute w-100">{pHoodie?.name}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
