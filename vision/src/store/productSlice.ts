import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  name: string;
  price: number | undefined;
  image: string;
}

interface ProductState {
  product: Product[];
  filterProduct: Product[];
  filterDelete: string;
}

const initialState: ProductState = {
  product: [],
  filterProduct: [],
  filterDelete: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    postProduct: (state, action: PayloadAction<Product[]>) => {
      state.product = action.payload;
    },

    filterProducts: (state, action: PayloadAction<string>) => {
      const filterChar = action.payload;
      if (filterChar === "") {
        state.filterProduct = state.product;
      } else {
        state.filterProduct = state.product.filter((item) =>
          item.name.toLowerCase().includes(filterChar)
        );
      }
    },

    filterDelete: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (id && state.filterProduct.length !== 0) {
        state.filterProduct = state.filterProduct.filter(
          (item: Product) => item._id !== id
        );
      }
    },
  },
});

export const { postProduct, filterProducts, filterDelete } =
  productSlice.actions;
export default productSlice.reducer;
