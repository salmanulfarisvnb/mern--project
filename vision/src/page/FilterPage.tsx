import ProductCard from "@/components/ProductCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const FilterPage = () => {
  const { filterProduct } = useSelector((state: RootState) => state.products);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-orange-400">Filter</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-5 p-2  grid-cols-[repeat(auto-fit, minmax(500px, 1fr))] shadow-orange-200">
        {filterProduct.map((item) => (
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
export default FilterPage;
