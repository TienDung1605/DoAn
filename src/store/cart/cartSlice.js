import { createSlice } from "@reduxjs/toolkit";
import { 
    addProductIntoCart, 
    fetchListProductInCart, 
    removeProductInCart, 
    updateProductInCart
} from "./cartActions";

const initialState = [
    {
        id: "1",
        price: 0,
        discont: 0,
        avatar: ""
    },
];

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListProductInCart.fulfilled, (state, action) => {
            return action.payload;
        });

        builder.addCase(addProductIntoCart.fulfilled, (state, action) => {
            return state.push(action.payload);
        });

        builder.addCase(updateProductInCart.fulfilled, (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                }
                return item;
            });
        });

        builder.addCase(removeProductInCart.fulfilled, (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        });
    },
});

export const cartReducer = cartSlice.reducer;