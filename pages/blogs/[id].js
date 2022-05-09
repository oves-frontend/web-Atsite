import React from 'react';
import Navbar from "@/components/OVES/NavbarFixedTop";
import Footer from "@/components/OVES/Footer";
import PageBanner from '@/components/Common/PageBanner';
import BlogDetailPage from '@/components/OVES/BlogDetailPage';
import { client } from '../../client';
import {POST} from 'queries/postGrid';
import { POSTS } from 'queries/postsQuery';
import { useContext } from "react"
import { GlobalContext } from 'pages/_app';

const BlogDetails = ({article }) => {
    const ovesData = useContext(GlobalContext);
    const header=ovesData.header.atSite.data.attributes.header
    const footer=ovesData.footer.atSite.data.attributes.footer

    return (
        <>
            <Navbar content={header} />
            <PageBanner pageTitle={article.title} />
            <BlogDetailPage article={article}/>
            <Footer content={footer} />
        </>
    )
}





  export async function getStaticProps({params}) {
    let id = params.id
    const { data } = await client.query({ query: POST,variables: { id: id },})
     const article = data.article.data.attributes
    return {
      props: {
          article:article,
      }
    }
  }


  export async function getStaticPaths() {
    
    const { data } = await client.query({ query: POSTS })
    const content = data.atSite.data.attributes.meta.contentSelector
    const articles = content.data.attributes.articles.data
    const paths = articles.map((article) =>
     ({
       params: { id: article.id },
     }))
    return {
      paths, fallback: false
    }
  }
export default BlogDetails;