import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removerfromcart, decreasequality, increasequality } from "../redux/cartslice";
import empty from "./11329060.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const products = cartState.carte;
  const dispatch = useDispatch();

  // Calculate total cart price
  const totalCartPrice = products.reduce((acc, item) => acc + item.totalprice, 0);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-28 px-6">
      <header className="w-full max-w-6xl text-center pb-4">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      </header>

      {products && products.length > 0 ? (
        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {products.map((item, index) => (
              <div key={index} className="border p-4 flex items-center gap-5 bg-gray-900 rounded-lg">
                <img className="h-36 w-28 object-cover rounded-lg" src={item.image} alt={item.name} />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: <span className="font-bold">${item.price}</span></p>
                  <p>Total: <span className="font-bold">${item.totalprice}</span></p>
                  <p>Size: <span className="font-bold">{item.Size}</span></p>
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => dispatch(decreasequality(item.id))}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >-</button>
                    <p className="text-lg font-semibold">{item.quantity}</p>
                    <button 
                      onClick={() => dispatch(increasequality(item.id))}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >+</button>
                  </div>
                </div>
                <button 
                  onClick={() => dispatch(removerfromcart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdOutlineDeleteForever className="text-3xl" />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            {products.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <span>{item.name} ({item.quantity})</span>
                <span>${item.totalprice}</span>
              </div>
            ))}
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total Price:</span>
              <span>${totalCartPrice}</span>
            </div>
            <Link to="/Checkout">
              <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src={empty} className="h-52 w-52" alt="Empty Cart" />
          <p className="mt-4 text-lg">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
