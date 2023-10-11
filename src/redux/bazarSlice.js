import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData:[],
    userInfo:null,
};

export const bazarSlice = createSlice({
    name:"bazar",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            const item = state.productData.find((item) =>item._id === action.payload._id);

            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload);
            }         
        },

        deleteItem:(state , action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart:(state) => {
            state.productData = [];
        },

        increamentQuantity:(state,action) =>{
            const item = state.productData.find((item) =>item._id === action.payload._id);
            if(item){
                item.quantity++;
            }
        },

        decreamentQuantity:(state,action) =>{
            const item = state.productData.find((item) =>item._id === action.payload._id);
            if(item){
                item.quantity--;
            }
        },


    },
});

export const {addToCart , deleteItem , resetCart , increamentQuantity , decreamentQuantity} = bazarSlice.actions;
export default bazarSlice.reducer;