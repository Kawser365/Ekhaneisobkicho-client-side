import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {name,imageURL,price} = props.product
    
    return (
        <div className="col-md-3">
               <div className="card">
                   <img src={imageURL} style={{width: '200px'}} class="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4>{price}</h4>
                    <Link to={`/Checkout/${name}`}> <button className="btn btn-primary">Buy Now</button> </Link>
                </div>
                </div>
           </div>
    );
};

export default Products;