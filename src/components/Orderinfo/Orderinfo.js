import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orderinfo = () => {
    const [orders,setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{

        fetch('https://floating-castle-80138.herokuapp.com/order?email='+loggedInUser.email)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])
    return (
        <div className="container">
           <h3>Your order</h3>
           <div>
               {
                   orders.map(order=> <li>Product Name: {order.name} Product Price: {order.price}</li>)
               }
           </div> 
        </div>
    );
};

export default Orderinfo;