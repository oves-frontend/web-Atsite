import React from 'react'
import BlogSidebar from './BlogSidebar'
import * as Icon from 'react-feather';
import ReactMarkdown from "react-markdown";

export default function BlogDetails({article}) {
  return (
    <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={article.titleImage.url} alt="image" />
                                </div>
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> {article.createdAt}
                                            </li>
                                            <li>
                                                <Icon.User /> <a href="#">{article.author.data.attributes.name}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ReactMarkdown children={article.content}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
  )
}
