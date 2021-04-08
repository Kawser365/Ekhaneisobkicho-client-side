import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        console.log(eventData)
        const url = `https://floating-castle-80138.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event=>{
        console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '73d7a3c02652ee43e13157d582a37762');
    imageData.append('image', event.target.files[0])  

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
       setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Product Name</h5>
          <input name="name" ref={register} />
          <div>
          <h5>Product Price</h5>
          <input name="price" ref={register} />
          </div>
          <br/>
          <div>
          <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
          </div>
          <br/>
          <div>
          <input type="submit" />
          </div>
        </form>
        </div>
    );
};

export default Admin;