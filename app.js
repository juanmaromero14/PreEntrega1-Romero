
let producto;

//array de objetos

const productos = [
  {
    nombre: "Dunk Low",
    productoAVender: "Sneaker",
    marca: "Nike",
    precio: 200,
    estado: "Nueva",
  },
  {
    nombre: "Jordan 4",
    productoAVender: "Sneaker",
    marca: "Nike",
    precio: 5000,
    estado: "Nueva",
  },
  {
    nombre: "Yeezy",
    productoAVender: "Sneaker",
    marca: "Adidas",
    precio: 150,
    estado: "Nueva",
  },
];

function bienvenida() {
  nombre = prompt("¡Bienvendio! Veo que te gusto nuestra coleccion de Sneakers. Para realizar la compra necesitamos tu Nombre u/o apodo.");
  if (nombre == "") {
    alert("Por favor ingresa al menos un nombre o apodo");
    iniciarEvento();
  } else if (nombre == null) {
    alert("Hasta la próxima!!");
  } else {
    seleccionProducto();
  }
}

function seleccionProducto() {
    sneakers = prompt (`${nombre}! Elije una opción
  1 - Todos los productos;
  2 - Sólo Adidas;
  3 - Sólo Nike;
  0 - Salir
  `);

  switch (sneakers) {
    case "1":
      mostrarProductos();
      break;
    case "2":
      mostrarAdidas();
      seleccionProducto();
      break;
    case "3":
      mostrarNike();
      seleccionProducto();
      break;
    case "0":
      alert("Hasta la próxima!!");
      break;
    default:
      alert("Por favor, ingrese un número válido");
      seleccionProducto();
      break;
  }
}
function mostrarProductos() {
  productos.forEach((element) => console.log(element));
  seleccionProducto();
}
function mostrarAdidas() {
  let adidas = productos.filter((v) => v.marca == "Adidas");
  console.log("Lista de adidas:")
  console.log(adidas);
}
function mostrarNike() {
  let nike = producto.filter((v) => v.marca == "Nike");
  console.log("Lista de Nike:")
  console.log(nike);
}


bienvenida();