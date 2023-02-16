import { createSlice } from "@reduxjs/toolkit";
import { fetchListProduct } from "./productActions";

const initialState = [
    {
        id:"1",
        name:"",
        price: 0,
        discount: 0,
        avatar: "",
    },
];

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducer: {},
    extraReducer: (builder) => {
        builder.addCase(fetchListProduct.fulfilled, (state, action) => {
            return action.payload
        });
    },
});

export const productReducer = productSlice.reducer;