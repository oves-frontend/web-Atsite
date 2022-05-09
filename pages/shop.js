import React from 'react';
import Navbar from "@/components/OVES/NavbarFixedTop";
import Footer from "@/components/OVES/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ProductCard from '@/components/OVES/ProductCard';
import { GlobalContext } from './_app';
import { useContext } from "react"
import { client } from 'client';
 

const Shop = () => {
    const ovesData = useContext(GlobalContext);
    const header=ovesData.header.atSite.data.attributes.header
    const footer=ovesData.footer.atSite.data.attributes.footer
    const products=ovesData.products.atSite.data.attributes.meta.contentSelector.data.attributes.products.data

    //const products=content.data.attributes.products.data
    return (
        <>
            <Navbar content={header}/>
            <PageBanner pageTitle="Products" /> 
            <ProductCard products={products} />
            <Footer content={footer} />
        </>
    )
}



export default Shop;