import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number | null;
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
    postProduct: (state, action: PayloadAction<Product>) => {
      state.product.push(action.payload);
    },
  },
});

export const { postProduct } = productSlice.actions;
export default productSlice.reducer;
