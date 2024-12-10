import React, { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postProduct, Product } from "@/store/productSlice";

const CreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product>({
    name: "",
    price: undefined,
    image: "",
  });
  const fetchData = async () => {
    const productCopy: Product[] = [];
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`
      );
      const data = await res.json();
      data?.data?.map((item: any) => {
        const { _id, price, name, image } = item;
        productCopy.push({ _id, price, image, name });
      });
      dispatch(postProduct(productCopy));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    await fetchData();
    navigate("/");
    setProduct({ ...product, name: "", price: undefined, image: "" });
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
            required
          />
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Price
          </label>
          <input
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            value={product.price === undefined ? "" : product.price}
            className="w-full p-2 bg-transparent border-2 rounded-md outline-none 
            [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:ring-2 active:ring-4 hover:ring-2"
            type="number"
            max={100000}
            required
          />
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
            ImageLink
          </label>
          <input
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            value={product.image}
            className="w-full p-2 bg-transparent border-2 rounded-md outline-none focus:ring-2 active:ring-4 hover:ring-2"
            type="text"
            required
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
