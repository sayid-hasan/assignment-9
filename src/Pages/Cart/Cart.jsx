import { Link, useLoaderData } from "react-router-dom";
import { getIdFromLS } from "../../Utilities/saveToLS";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const estates = useLoaderData();
  const SavedIdFromLs = getIdFromLS();
  const savedItemInLs = estates.filter((estate) =>
    SavedIdFromLs.includes(estate.id.toString())
  );
  //console.log(savedItemInLs);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col max-w-3xl w-full p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {savedItemInLs.map((cartitem, idx) => (
            <CartItem key={idx} cartitem={cartitem}></CartItem>
          ))}
        </ul>

        <div className="flex justify-end space-x-4">
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </Link>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded bg-[#05A081] text-white"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
