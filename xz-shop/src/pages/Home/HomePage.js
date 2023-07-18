import React from "react";
import CarouselLayout from "../../components/Carousel/Carousel";
import ProductListingPage from "../ProductListing/ProductListingPage";
const HomePage = () => {
    return (
        <>
            <section><CarouselLayout /></section>
            <section><ProductListingPage /></section>
        </>
    );
};

export default HomePage;
