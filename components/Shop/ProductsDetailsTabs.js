import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from "react-markdown";
resetIdCounter();

const ProductsDetailsTabs = ({product}) => {
    // const productProperties = product.mainProperties
    // const productBOM = product.productBOM
    // const productBOM = product.productBOM.map((pbom)=> pbom.item.data.attributes.mainProperties)
    // const productBomProp = product.productBOM.map((pbom)=> pbom.item.data.attributes)
    // console.log('pbom test',productBomProp);

    return (
        <div className="products-details-tabs" >
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Main Properties</Tab>
                    <Tab>Review</Tab>
                </TabList>
            
                <TabPanel>
                    <div className="additional-information">
                    <ReactMarkdown children={product.description}/>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="products-description">
                        <ul className="additional-information">
                            <li><b><span>Product Property</span> Value</b></li> 
                            {/* should use standardized...but why the query did not work?
                            {product.mainProperties.map((property) => <li><span>{property.standardized.data.attributes.name} </span> {property.propValue}</li>)}
                        */}
                            {product.mainProperties.map((property, index) => <li key={index}><span>{property.propName} </span> {property.propValue}</li>)}
                            <li><b><span>Included Items:</span> </b></li> 
                            {product.productBOM.map((bom,index2) => {
                                let itemPropList=[];
                                bom.item.data.attributes.mainProperties.forEach((itemProp,index)=>{
                                    itemPropList.push( <li key={index}><span>{itemProp.propName} </span> {itemProp.propValue}</li>)
                                })
                                return (<> 
                                <li key={index2}><b><span>{bom.item.data.attributes.name} x {bom.quantity}</span> {bom.item.data.attributes.description}</b></li>
                                {itemPropList}
                            </>) } ) }
                            {/*
                                <li><b><span>Item Property</span> Value</b></li> 
                                {bom.item.data.attributes.mainProperties.map(itemproperty) => <li><span>{itemproperty.propName} </span> {itemproperty.propValue}</li>)}
                            <li><b><span>Item Property</span> Value</b></li> 
                            {productBomProp.map((item) => {return (<> 
                                <li><span>{item.name} </span> {item.description}</li> 
                            </>) } ) }
                            {productBOM.map((bom) => bom.map((bomprop)=> <li><span>{bomprop.propName}</span>{bomprop.propValue}</li>))}
                            */}
                        </ul>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="products-reviews">
                        <h3>Customer Reviews</h3>
                        <p>There are no reviews yet.</p>

                        <form className="review-form">
                            <p>Rate this item:</p>

                            <div className="star-rating">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>

                                <p>Very good product!</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea name="review-message" id="message" cols="30" rows="4" placeholder="Write your review*" className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name*" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email*" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPanel>
            </Tabs> 
        </div>
    )
}

export default ProductsDetailsTabs;  