export interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

export const productos: Producto[] = [
  {
    nombre: "Zapatillas Deportivas",
    precio: 89900,
    categoria: "Deportes"
  },
  {
    nombre: "Botas de Cuero",
    precio: 129900,
    categoria: "Formal"
  },
  {
    nombre: "Sandalias Casuales",
    precio: 49900,
    categoria: "Casual"
  }
];

if (require.main === module) {
  console.log("Arreglo de productos:");
  console.log(productos);

  console.log("\nProductos formateados:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toLocaleString()} - ${producto.categoria}`);
  });
}

