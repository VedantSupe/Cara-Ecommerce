import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { decreamentQuantity, deleteItem, increamentQuantity } from '../redux/bazarSlice';
import {ToastContainer ,toast} from "react-toastify";


const CartItem = () => {
    const dispatch = useDispatch();
      const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className='w-2/3 pr -10'>
        <div className='w-full'> 
            <h2 className='font:titlefont text-2xl'>Shopping Cart</h2>
        </div>
        <div>
            {productData.map((item) => (
                <div 
                key={item._id}
                className='flex items-center justify-between gap-6 mt-6'
                >
                    <div className='flex items-center gap-2'>
                        <MdOutlineClose onClick={() =>
                            dispatch(deleteItem(item._id)) & toast.error(`${item.title} is removed`)} 
                            className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                        <img 
                        className='w-32 h-32 object-cover'
                        src={item.image}
                        />
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-24'>${item.price}</p>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <span 
                             onClick={() =>
                                dispatch(
                                    decreamentQuantity({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        quantity:1,
                                        decription:item.decription,
                                    })
                                )}
                            
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                            duration-300 active:bg-black'>
                                -
                            </span>
                            {item.quantity}
                            <span 
                            onClick={() =>
                            dispatch(
                                increamentQuantity({
                                    _id:item._id,
                                    title:item.title,
                                    image:item.image,
                                    price:item.price,
                                    quantity:1,
                                    decription:item.decription,
                                })
                            )}
                            
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                            duration-300 active:bg-black'>
                                +
                            </span>
                        </div>
                       
                        </div>
                        <p className='w-14'>${item.quantity * item.price}</p>
               </div>         
            )) }
        </div>
        <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
};

export default CartItem
