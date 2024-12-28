import axios from 'axios';
import React from 'react';
import { server } from '../main';

type Coffee = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};


// const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };


export const CoffeeCard: React.FC<Coffee> = ({ name, description, price, image }) => {
  //function for buy 
  // const handelclick=(price :number)=>{
  //   console.log(price)
  // }


  console.log(window)

  //function for checkout
  const checkOut = async (amount:number) => {
    try {
      

      //create a get request for get the  key from backend
      const key=await axios.get(`${server}/payment-getways/getKey`)
      console.log(key)
    
      //create a post  request for order 
      const { data } = await axios.post(`${server}/payment-getways/checkout`, { amount }); // Send `amount` as part of an object
   


      //option for  verify and generate payment interface in razor pay

      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: data.amount, 
        currency: "INR",
        name: "Rakesh Pradhan",
        description: "Buy me a coffee for my good health",
        image: "https://avatars.githubusercontent.com/u/142331648?v=4",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/v1/payment-getways/paymentVerification",
        prefill: {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };

    //in type script there is no typesafe dev for razorpay so we have to define it as any..
    const Razorpay = (window as any).Razorpay;
    const razor = new Razorpay(options);
        razor.open();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">₹{price.toFixed(2)}</span>
          <button
            onClick={() => checkOut(price)}
            className="bg-brown-500 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

