import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    postProduct: (
      state,
      action: PayloadAction<{
        name: string;
        price: number | null;
        image: string;
      }>
    ) => {
      const newProduct = action.payload;
      const fetchData = async () => {
        const res = await fetch("http://localhost:6000/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });
      };
    },
  },
});

export const { postProduct } = productSlice.actions;
export default productSlice.reducer;
