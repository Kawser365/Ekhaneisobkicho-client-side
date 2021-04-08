import React, { useContext, useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch("https://floating-castle-80138.herokuapp.com/products")
        .then(res=> res.json())
        .then(data=> setDetails(data))
    },[])

    const result =  details.filter(detail=> detail.name == name)
    const info = result.map(product => product.price)
    const orderSubmit = () =>{
        const products = {...loggedInUser, price:info, name:name}
        fetch('https://floating-castle-80138.herokuapp.com/orderProduct', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data){
                alert('order placed successfully');
            }
        })
    }
    return (
        <div className="container">
            <h2>CheckOut</h2>
            <table class="table">
        <thead>
            <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{name}</th>
            <td>1</td>
            <td>{info}</td>
            </tr>
            <tr>
            <th scope="row"></th> 
            <td></td>
            <td></td> 
            </tr>
            <td><h4>Total</h4></td>
            <td></td>
            <td>{info}</td>
        </tbody>
        </table>
        <div>
            <button onClick={()=>orderSubmit()} style={{marginLeft:'860px'}}>Checkout</button>
        </div>
        </div>
    );
};

export default Checkout;
