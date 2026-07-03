import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increase,
    decrease,
    removeFromCart,
    total,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Carrito de Compras
      </h1>

      {cart.length === 0 ? (
        <p className="text-xl">
          Tu carrito está vacío.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-lg p-4 mb-4"
            >
              <div>
                <h2 className="font-bold text-xl">
                  {item.name}
                </h2>

                <p>S/. {item.price}</p>

                <p>Cantidad: {item.quantity}</p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => decrease(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>

                <button
                  onClick={() => increase(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>

              </div>
            </div>
          ))}

          <div className="mt-8 text-right">

            <h2 className="text-3xl font-bold">
              Total: S/. {total}
            </h2>

            <button className="mt-4 bg-cyan-600 text-white px-6 py-3 rounded-lg">
              Finalizar Compra
            </button>

          </div>

        </>
      )}
    </div>
  );
}

export default Cart;