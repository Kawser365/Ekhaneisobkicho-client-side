import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://floating-castle-80138.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                products.map(product =><Products product={product}></Products>)
            }
        </div>
        </div>
    );
};

export default Home;