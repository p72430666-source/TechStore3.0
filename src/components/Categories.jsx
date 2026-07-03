function Categories() {
  const categories = [
    {
      id: 1,
      icon: "💻",
      name: "Laptops",
      description: "Equipos para estudio y trabajo",
    },
    {
      id: 2,
      icon: "🖥️",
      name: "Monitores",
      description: "Calidad de imagen profesional",
    },
    {
      id: 3,
      icon: "⌨️",
      name: "Periféricos",
      description: "Teclados, mouse y accesorios",
    },
    {
      id: 4,
      icon: "🎧",
      name: "Audio",
      description: "Audífonos y parlantes",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Categorías
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition"
          >
            <div className="text-6xl mb-4">
              {category.icon}
            </div>

            <h3 className="text-2xl font-semibold">
              {category.name}
            </h3>

            <p className="text-gray-600 mt-3">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;