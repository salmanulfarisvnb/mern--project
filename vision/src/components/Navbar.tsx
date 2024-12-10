import { IoMdCreate } from "react-icons/io";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "@/store/productSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterTerm = e.target.value;
    dispatch(filterProducts(filterTerm));
    navigate("filter-page");
  };

  return (
    <nav className="container mx-auto my-7">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold sm:text-3xl">
          <Link to={"/"}>Product Store</Link>
        </h1>
        <div>
          <input
            onChange={handleFilter}
            type="text"
            placeholder="Search your product"
            className="p-2 bg-transparent border rounded-md outline-none"
          />
        </div>
        <div className="flex gap-3 ">
          <div className="relative group">
            <Link to={"create-page"}>
              <Button variant="outline" size="icon">
                <IoMdCreate />
              </Button>
            </Link>
            <p className="group-hover:scale-100 transition-transform scale-0 duration-200 absolute m-0 text-sm font-semibold dark:text-gray-400 whitespace-nowrap left-[-25px] bottom-[-35px]">
              Create new product
            </p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
