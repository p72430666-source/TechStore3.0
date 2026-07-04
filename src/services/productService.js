const API_URL = "https://techstore3-0.onrender.com/products";

// Obtener todos
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return await response.json();
}

// Obtener por ID
export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Producto no encontrado");
  }

  return await response.json();
}

// Crear
export async function createProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await response.json();
}

// Editar
export async function updateProduct(id, product) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await response.json();
}

// Eliminar
export async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}