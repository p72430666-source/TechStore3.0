function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        Sobre TechStore
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600">
            Nuestra Misión
          </h2>

          <p className="text-gray-600 leading-7">
            Brindar productos tecnológicos de alta calidad,
            ofreciendo una excelente experiencia de compra,
            asesoría especializada y precios competitivos.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600">
            Nuestra Visión
          </h2>

          <p className="text-gray-600 leading-7">
            Ser una de las tiendas tecnológicas más confiables
            e innovadoras del país, destacando por nuestro
            servicio y compromiso con cada cliente.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600">
            Nuestros Valores
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Honestidad</li>
            <li>✔ Innovación</li>
            <li>✔ Calidad</li>
            <li>✔ Responsabilidad</li>
            <li>✔ Compromiso</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default About;