import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const active = "text-cyan-400 font-semibold";
  const normal = "hover:text-cyan-400 transition";

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <Link
            to="/"
            className="text-3xl font-bold text-cyan-400"
          >
            TechStore
          </Link>

          <div className="flex flex-wrap justify-center gap-6 items-center">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? active : normal
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? active : normal
              }
            >
              Productos
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? active : normal
              }
            >
              Nosotros
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? active : normal
              }
            >
              Contacto
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? active : normal
              }
            >
              🛒 ({totalItems})
            </NavLink>

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;