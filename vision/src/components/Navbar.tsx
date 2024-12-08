import { IoMdCreate } from "react-icons/io";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto my-7">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold sm:text-3xl">
          <Link to={"/"}>Product Store</Link>
        </h1>
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
