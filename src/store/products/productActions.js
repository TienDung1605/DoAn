import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://63db7454b8e69785e4826e59.mockapi.io/product";

export const fetchListProduct = createAsyncThunk(
    "productSlice/fetchListProduct",
    async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/products`)
            return data;
        } catch (error) {
            
        }
    }
)