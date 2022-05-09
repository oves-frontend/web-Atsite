import React from 'react';
import Navbar from "@/components/OVES/NavbarFixedTop";
import BannerHero from '@/components/OVES/BannerHero';
import BannerTextPic from '@/components/OVES/BannerTextPic';
import BannerPicText from '@/components/OVES/BannerPicText';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import OurServices from '@/components/IOT/OurServices';
import Cta from '@/components/IOT/Cta';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Features from '@/components/IOT/Features';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import Feedback from '@/components/Common/Feedback';
import WhyWeAreBest from '@/components/IOT/WhyWeAreBest';
import BlogPost from '@/components/Common/BlogPost';
import Footer from "@/components/OVES/Footer";
import { GlobalContext } from './_app';
import { useContext } from "react"

const anyPage = () => {
    const siteContent = useContext(GlobalContext);
    const header=siteContent.ovesSite.data.attributes.header
    const footer=siteContent.ovesSite.data.attributes.footer
    const pageContent=siteContent.ovesSite.data.attributes.home
      
    return (
        <>
            <Navbar content = {header} />
            <BannerHero content = {pageContent.bannerHero} />
            <BannerTextPic content ={pageContent.bannerTextPic} />
            <BannerPicText content ={pageContent.bannerPicText} />
            <Footer content={footer} />
        </>
    )
}


export default anyPage;