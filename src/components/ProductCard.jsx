import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-lg md:text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {product.brand}
        </p>

        <p className="text-sm text-gray-600 mt-2">
          {product.category}
        </p>

        <p className="text-3xl font-bold text-cyan-600 mt-4">
          S/. {product.price}
        </p>

        <p className="mt-2">
          Stock:
          <span className="text-green-600 font-semibold">
            {" "}{product.stock}
          </span>
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
          🛒 Agregar al carrito
        </button>

        <Link
          to={`/products/${product.id}`}
          className="block mt-3 bg-cyan-600 hover:bg-cyan-700 text-center text-white py-3 rounded-lg"
        >
          Ver detalle
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;