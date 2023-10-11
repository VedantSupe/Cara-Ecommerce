import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import CartItem from './CartItem';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const[totalAmt , setTotalAmt] = useState("")

  useEffect(()=>{
    let price= 0;
    productData.map((item) =>{
      price += item.price* item.quantity;
      return price;
    })
    setTotalAmt(price);
  },[productData]);
  
  return (
    <div >
      <img className='w-full h-60 object-cover'
      src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?w=1380&t=st=1684151180~exp=1684151780~hmac=a06a9e5c40f96514742f3f7d59de9049a3a1220340dd5f0809ab70d9fc5030b2"
        />
        <div className='max-w-screen-xl mx-auto py-20 flex'>
          <CartItem />
          <div className='w-1/3 bg-white py-6 px-4'>  
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Total</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titlefont font-bold text-lg'>${totalAmt}</span>
            </p>
            <p className = 'flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem asfkjf afsljajfioh afhao sfiho saofho afshoi
              </span>
            </p>
          </div>
          <p className='font-titlefont font-semibold flex justify-between mt-6'>
             Total <span className='text-xl font-bold'>${totalAmt}</span>
           </p>
           <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Proceed To Checkout</button>
          </div>
        </div>
    </div>   
  )
}

export default Cart
