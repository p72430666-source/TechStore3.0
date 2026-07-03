import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bienvenido a <span className="text-cyan-400">TechStore</span>
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre laptops, monitores, teclados, audífonos y los mejores
          accesorios tecnológicos al mejor precio.
        </p>

        <Link
          to="/products"
          className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition"
        >
          Explorar Productos
        </Link>

      </div>
    </section>
  );
}

export default Hero;