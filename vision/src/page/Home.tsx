import ProductCard from "@/components/ProductCard";
import { postProduct, Product } from "@/store/productSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { product } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const productCopy: Product[] = [];
    try {
      const res = await fetch("http://localhost:7000/api/products");
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
  useEffect(() => {
    fetchData();
  }, []);

  if (product.length === 0)
    return (
      <div className="container flex items-center justify-center mx-auto">
        <h1 className="mt-5 text-2xl font-semibold text-orange-400">
          Not product please Create New Product{" "}
        </h1>
      </div>
    );
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-orange-400">Products</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-5 p-2  grid-cols-[repeat(auto-fit, minmax(500px, 1fr))] shadow-orange-200">
        {product.map((item) => (
          <ProductCard
            key={item._id}
            name={item.name}
            _id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
