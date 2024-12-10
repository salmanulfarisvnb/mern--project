import { filterDelete, postProduct, Product } from "@/store/productSlice";
import { FaEdit, FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  _id: string;
  price: number | undefined;
  image: string;
}
const ProductCard = ({ _id, name, price, image }: ProductCardProps) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const productCopy: Product[] = [];
    try {
      const res: Response = await fetch(
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

  const handleDelete = async (
    event: React.FormEvent,
    id: string | undefined
  ) => {
    event?.preventDefault();
    await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await fetchData();
    dispatch(filterDelete(_id));
  };

  return (
    <div className="relative w-fit">
      <div className="flex flex-col overflow-hidden border border-orange-200 rounded-md bottom-1">
        <div>
          <img
            src={image}
            className="object-cover sm:w-[400px] sm:h-[300px] w-[500px] h-[400px]"
            alt="product_image"
          />
        </div>
        <div className="flex justify-between p-2 font-bold bg-indigo-900 gap-y-2">
          <p className="text-sm font-bold text-white sm:text-xl">{name}</p>
          <p className="text-sm text-white sm:text-xl">
            <FaRupeeSign className="inline" /> {price}
          </p>
        </div>
      </div>
      <div className="absolute flex gap-2 p-2 text-2xl text-gray-400 rounded right-2 top-2 bg-sky-900">
        <button>
          <MdDelete
            onClick={(e) => {
              handleDelete(e, _id);
            }}
            className="transition-all hover:text-gray-200"
          />
        </button>
        <button>
          <Link to={`/update-page/${_id}`}>
            <FaEdit className="transition-all hover:text-gray-200" />
          </Link>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
