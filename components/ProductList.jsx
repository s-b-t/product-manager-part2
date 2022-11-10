import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <div>
            <h1>All Products</h1>
            {
            loaded ? products.map((product, i) =>
            <p key={i}>
                <Link to={"/api/products/" + product._id}>{product.title}</Link>
            </p>) 
            : <p>Loading...</p>
            }
        </div>
    )
}

export default ProductList;