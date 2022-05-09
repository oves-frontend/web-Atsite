import React from 'react';
import { GlobalContext } from './_app';
import { useContext } from "react"
import Navbar from "@/components/OVES/NavbarFixedTop";
import Footer from "@/components/OVES/Footer";
import BlogGrid from '@/components/OVES/BlogWithSidebar';
import BannerHero from '@/components/OVES/BannerHero';

const Blog = () => {

    const ovesData = useContext(GlobalContext);
    const header=ovesData.header.atSite.data.attributes.header
    const footer=ovesData.footer.atSite.data.attributes.footer
    const blogContent=ovesData.blog.atSite.data.attributes.blog
    const blogs=ovesData.posts.atSite.data.attributes.meta.contentSelector.data.attributes.articles.data

    return (
        <>
            <Navbar content={header} />
            <BannerHero content = {blogContent.blogHero} />
            <BlogGrid blogs = {blogs} />
            <Footer content={footer} />
        </>
    )
}


export default Blog;
