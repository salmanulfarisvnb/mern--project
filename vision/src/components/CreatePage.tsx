import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { postProduct } from "@/store/productSlice";

interface Product {
  name: string;
  price: number | null;
  image: string;
}

const CreatePage = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product>({
    name: "",
    price: null,
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postProduct(product));
    setProduct({ ...product, name: "", price: null, image: "" });
  };

  return (
    <div className="container flex flex-col items-center justify-center h-screen max-w-[700px] mx-auto">
      <h1 className="text-2xl font-black mb-7">Create Product</h1>
      <form className="w-full border rounded" onSubmit={handleSubmit}>
        <div className="flex flex-col p-3 ">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            value={product.name}
            className="w-full p-2 bg-transparent border-2 rounded-md outline-none focus:ring-2 active:ring-4 hover:ring-2"
            type="text"
          />
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Price
          </label>
          <input
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            value={product.price === null ? "" : product.price}
            className="w-full p-2 bg-transparent border-2 rounded-md outline-none focus:ring-2 active:ring-4 hover:ring-2"
            type="text"
          />
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            ImageLink
          </label>
          <input
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            value={product.image}
            className="w-full p-2 bg-transparent border-2 rounded-md outline-none focus:ring-2 active:ring-4 hover:ring-2"
            type="text"
          />
        </div>
        <div className="flex justify-end p-3">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};
export default CreatePage;
