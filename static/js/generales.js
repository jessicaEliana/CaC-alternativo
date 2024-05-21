

// const verScroll = function() {
//     const navbar = document.querySelector('header')
//     const deplegable = document.querySelector('.enlace')
//     if (window.scrollY > 0) {
//       navbar.classList.add('scrolled')
//       deplegable.classList.add('scrolled')
//     } else {
//       navbar.classList.remove('scrolled')
//       deplegable.classList.remove('scrolled')
//     }
// }

// window.addEventListener('scroll', verScroll )


// menu alternativo

// BOTON MENUS

document.getElementById('btnProductos').addEventListener('click', function() {
  var submenu = document.getElementById('submenu');
  if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
  } else {
      submenu.style.display = 'block';
  }
});

document.addEventListener('click', function(event) {
  var isClickInsideMenu = document.getElementById('menu').contains(event.target);
  var isClickInsideSubmenu = document.getElementById('submenu').contains(event.target);

  if (!isClickInsideMenu && !isClickInsideSubmenu) {
      document.getElementById('submenu').style.display = 'none';
  }
});

// formulario



// Actualizar la fecha mínima del campo de fecha de pedido
const fechaPedido = document.getElementById('fechaPedido');
const hoy = new Date().toISOString().split('T')[0];
fechaPedido.setAttribute('min', hoy);

// Función para actualizar la lista de productos según el tipo seleccionado
function updateProductos() {
    const tipoProducto = document.getElementById('tipoProducto').value;
    const productoSelect = document.getElementById('producto');
    productoSelect.innerHTML = '<option value="">Seleccione un producto</option>';

    let productos = [];
    if (tipoProducto === 'tortas') {
        productos = ['Torta de Chocolate', 'Torta Red Velvet', 'Torta Tres Leches', 'Torta de Zanahoria', 'Torta de Fresas con Crema'];
    } else if (tipoProducto === 'postres') {
        productos = ['Cheesecake Clásico', 'Tiramisú', 'Macarons', 'Brownies', 'Panna Cotta'];
    } else if (tipoProducto === 'panaderia') {
        productos = ['Croissants', 'Pan de Ciabatta', 'Conchas', 'Pan de Centeno', 'Bollos de Canela'];
    }

    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto;
        option.textContent = producto;
        productoSelect.appendChild(option);
    });
}

// Validación del formulario
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    const nombreApellido = document.getElementById('nombreApellido').value;
    const email = document.getElementById('email').value;
    const tipoProducto = document.getElementById('tipoProducto').value;
    const producto = document.getElementById('producto').value;

    if (!nombreApellido) {
        alert('Por favor, ingrese su nombre y apellido.');
        event.preventDefault();
    } else if (!email) {
        alert('Por favor, ingrese su email.');
        event.preventDefault();
    } else if (!tipoProducto) {
        alert('Por favor, seleccione un tipo de producto.');
        event.preventDefault();
    } else if (!producto) {
        alert('Por favor, seleccione un producto específico.');
        event.preventDefault();
    }
});
