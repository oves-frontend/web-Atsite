import BlogSidebar from '@/components/OVES/BlogSidebar';
import Link from 'next/link';
import * as Icon from 'react-feather';
import React from 'react';
import { GlobalContext } from 'pages/_app';
import { useContext } from "react"

const BlogGrid = ({blogs}) => {
    const ovesData = useContext(GlobalContext);
    
  //  const blogSideContent=ovesData.blog.ovesSite.data.attributes.blog
  //  console.log('try',blogSideContent);

    return (
        <div className="blog-area ptb-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="row justify-content-center">

                        {blogs.map((blog, index) => (

                            <div key={index} className="col-lg-6 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link href={`/blogs/${blog.id}`}>
                                            <a>
                                              <img src={blog.attributes.titleImage.url} alt="image" />
                                            </a>
                                        </Link>
                                        <div className="date">
                                            <Icon.Calendar /> {blog.attributes.createdAt}
                                        </div>
                                    </div>
                                    <div className="blog-post-content">
                                        <h3>
                                            <Link href={`/blogs/${blog.id}`}>
                                                <a>{blog.attributes.title}</a>
                                            </Link>
                                        </h3>
                                        <span>By <a href="#">{blog.attributes.author.data.attributes.name}</a></span>
                                        
                                        <p>{blog.attributes.description}</p>
                                        <Link href={`/blogs/${blog.id}`}>
                                            <a className="read-more-btn">
                                                Read More <Icon.ArrowRight />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>

                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>

                                        <li className="page-item"><a className="page-link" href="#">2</a></li>

                                        <li className="page-item"><a className="page-link" href="#">3</a></li>

                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>

    );
}

export default BlogGrid;