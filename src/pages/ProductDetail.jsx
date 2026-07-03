import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/productService";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl">
        Cargando producto...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link
        to="/products"
        className="text-cyan-600 hover:underline"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4">
            <strong>Marca:</strong> {product.brand}
          </p>

          <p className="mt-2">
            <strong>Categoría:</strong> {product.category}
          </p>

          <p className="mt-2">
            <strong>Stock:</strong> {product.stock}
          </p>

          <h2 className="text-5xl font-bold text-cyan-600 mt-6">
            S/. {product.price}
          </h2>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg">
            Comprar
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;