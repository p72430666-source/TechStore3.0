import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
} from "../services/productService";

function Admin() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    const data = await getProducts();

    setProducts(data);

  }

  async function handleDelete(id) {

    if (!confirm("¿Eliminar este producto?")) return;

    await deleteProduct(id);

    loadProducts();

  }

  return (

    <div className="max-w-7xl mx-auto p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">

          Panel Administrador

        </h1>

        <button
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          + Agregar Producto
        </button>

      </div>

      <table className="w-full border shadow-lg">

        <thead className="bg-slate-900 text-white">

          <tr>

            <th className="p-3">Producto</th>

            <th>Marca</th>

            <th>Precio</th>

            <th>Stock</th>

            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {

            products.map(product=>(

              <tr
                key={product.id}
                className="border-b text-center"
              >

                <td className="p-3">

                  {product.name}

                </td>

                <td>

                  {product.brand}

                </td>

                <td>

                  S/. {product.price}

                </td>

                <td>

                  {product.stock}

                </td>

                <td className="space-x-2">

                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >

                    Editar

                  </button>

                  <button
                    onClick={()=>handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >

                    Eliminar

                  </button>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default Admin;