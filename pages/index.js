import React from 'react';
import Navbar from "@/components/OVES/NavbarFixedTop";
import BannerHero from '@/components/OVES/BannerHero';
import BannerTextPic from '@/components/OVES/BannerTextPic';
import BannerPicText from '@/components/OVES/BannerPicText';
import Footer from "@/components/OVES/Footer";
import { GlobalContext } from './_app';
import { useContext } from "react"

const HOME = () => {

    const ovesData = useContext(GlobalContext);
    console.log('try',ovesData);
    const header=ovesData.header.atSite.data.attributes.header
    const footer=ovesData.footer.atSite.data.attributes.footer
    const homepage = ovesData.homePage.atSite.data.attributes.home

    return (
        <>
            <Navbar content = {header} />
            <BannerHero content = {homepage.bannerHero} />
            <BannerTextPic content ={homepage.bannerTextPic} />
            <BannerPicText content ={homepage.bannerPicText} />
            <Footer content={footer} />
        </>
    )
}


export default HOME;