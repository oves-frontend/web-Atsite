import React from 'react'
import Navbar from "@/components/OVES/NavbarFixedTop";
import Footer from "@/components/OVES/Footer";
import PageBanner from '@/components/Common/PageBanner'
import { client } from '../../client';
import { PRODUCT } from 'queries/productGridQuery';
import { PRODUCTS } from 'queries/productsQuery';
import { GlobalContext } from 'pages/_app';
import { useContext } from "react"
import ProductDetailPage from '@/components/OVES/ProductDetailPage';

const ProductDetails = ({ product }) => {

    const ovesData = useContext(GlobalContext);
    const header = ovesData.header.atSite.data.attributes.header
    const footer = ovesData.footer.atSite.data.attributes.footer

    return (
        <>
            <Navbar content={header} />
            <PageBanner pageTitle={product && product.name} />
            <ProductDetailPage product={product} />
            <Footer content={footer} />
        </>
    )
}

export async function getStaticProps({ params }) {
    let id = params.id
    const { data } = await client.query({ query: PRODUCT, variables: { id: id }, })
    const product = data.product.data.attributes
    return {
        props: {
            product: product,
        }
    }
}

export async function getStaticPaths() {

    const { data } = await client.query({ query: PRODUCTS })
    const content = data.atSite.data.attributes.meta.contentSelector
    const products = content.data.attributes.products.data
    const paths = products.map((product) =>
    ({
        params: { id: product.id },
    }))
    return {

        paths, fallback: false
    }
}



export default ProductDetails;