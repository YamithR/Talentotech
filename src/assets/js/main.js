// main.js: Lógica para cargar header, footer y páginas

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  cargarHeader();
  cargarFooter();

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hostname === window.location.hostname) {
        e.preventDefault();
        const header = document.querySelector('header');
        if (header) {
          header.classList.remove('header-transition');
          void header.offsetWidth; // trigger reflow
          header.classList.add('header-transition');
        }
        setTimeout(() => {
          window.location.href = this.href;
        }, 650);
      }
    });
  });
  mostrarContadorVisitas();
});

function cargarHeader() {
  const header = document.getElementById('main-header');
  if (header) {
    header.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark" style="background:#a67c52;">
        <div class="container">
          <a class="navbar-brand" href="index.html">Artesanal</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
              <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
              <li class="nav-item"><a class="nav-link" href="compras.html">Compras</a></li>
              <li class="nav-item"><a class="nav-link" href="acercade.html">Acerca de</a></li>
              <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

function cargarFooter() {
  const footer = document.getElementById('main-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <p>&copy; 2025 Portal Artesanal. Todos los derechos reservados.</p>
      </div>
    `;
  }
}

// Lógica de productos para productos.html
const productos = [
  {
    id: 1,
    nombre: "Artesanía de Madera",
    precio: 35000,
    imagen: "../../Imagenes/arbol.jpg",
    descripcion: "Figura artesanal tallada en madera."
  },
  {
    id: 2,
    nombre: "Flor Decorativa",
    precio: 18000,
    imagen: "../../Imagenes/flor.jpg",
    descripcion: "Flor hecha a mano con materiales reciclados."
  },
  {
    id: 3,
    nombre: "Atardecer Pintado",
    precio: 42000,
    imagen: "../../Imagenes/atardecer.jpg",
    descripcion: "Cuadro pintado a mano de un atardecer."
  },
  {
    id: 4,
    nombre: "Hojas Secas Decorativas",
    precio: 12000,
    imagen: "../../Imagenes/hojas.jpg",
    descripcion: "Ramo de hojas secas para decoración."
  },
  {
    id: 5,
    nombre: "Fotografía de Playa",
    precio: 25000,
    imagen: "../../Imagenes/playa.jpg",
    descripcion: "Fotografía artística de una playa."
  }
];

function renderMatrizProductos() {
  const contenedor = document.getElementById('listado-productos');
  if (!contenedor) return;
  contenedor.innerHTML = productos.map(producto => `
    <div class="col d-flex flex-column h-100">
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top producto-img-matriz" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text fw-bold">$${producto.precio.toLocaleString()}</p>
          <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${producto.id})">
            <i class="bi bi-cart-plus"></i> Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProductosDestacados() {
  const contenedor = document.getElementById('productos-destacados');
  if (!contenedor) return;
  // Estructura del slider
  contenedor.innerHTML = `
    <div class="productos-slider-wrapper">
      <button class="slider-btn slider-btn-left" id="slider-left"><i class="bi bi-chevron-left"></i></button>
      <div class="productos-slider" id="slider-track">
        ${productos.map(producto => `
          <div class="producto-slide">
            <div class="card h-100">
              <img src="${producto.imagen}" class="card-img-top producto-img-slider" alt="${producto.nombre}">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text fw-bold">$${producto.precio.toLocaleString()}</p>
                <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${producto.id})">
                  <i class="bi bi-cart-plus"></i> Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="slider-btn slider-btn-right" id="slider-right"><i class="bi bi-chevron-right"></i></button>
    </div>
  `;
  // Lógica del slider
  const track = document.getElementById('slider-track');
  const leftBtn = document.getElementById('slider-left');
  const rightBtn = document.getElementById('slider-right');
  let pos = 0;
  const max = productos.length - 1;
  const slidesToShow = window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  function updateSlider() {
    track.style.transform = `translateX(-${pos * (100 / slidesToShow)}%)`;
  }
  leftBtn.onclick = () => {
    pos = Math.max(0, pos - 1);
    updateSlider();
  };
  rightBtn.onclick = () => {
    pos = Math.min(max - slidesToShow + 1, pos + 1);
    updateSlider();
  };
  updateSlider();
  window.addEventListener('resize', updateSlider);
}

// Carrito de compras simulado
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarNotificacion('Producto agregado al carrito');
  actualizarContadorCarrito();
}

function mostrarNotificacion(msg) {
  let notif = document.getElementById('notificacion-carrito');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'notificacion-carrito';
    notif.style.position = 'fixed';
    notif.style.top = '20px';
    notif.style.right = '20px';
    notif.style.background = '#00bcd4';
    notif.style.color = '#fff';
    notif.style.padding = '12px 24px';
    notif.style.borderRadius = '8px';
    notif.style.zIndex = 9999;
    notif.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(notif);
  }
  notif.textContent = msg;
  notif.style.display = 'block';
  setTimeout(() => { notif.style.display = 'none'; }, 1200);
}

function actualizarContadorCarrito() {
  let contador = document.getElementById('contador-carrito');
  if (!contador) {
    const nav = document.querySelector('nav ul');
    if (nav) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="compras.html"><i class="bi bi-cart"></i> <span id="contador-carrito" style="background:#00bcd4;color:#fff;border-radius:50%;padding:2px 8px;font-size:0.9em;">0</span></a>`;
      nav.appendChild(li);
      contador = document.getElementById('contador-carrito');
    }
  }
  if (contador) {
    const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    contador.textContent = total;
  }
}

function renderCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalDiv = document.getElementById('carrito-total');
  if (!lista || !totalDiv) return;
  if (carrito.length === 0) {
    lista.innerHTML = '<p>El carrito está vacío.</p>';
    totalDiv.innerHTML = '';
    return;
  }
  lista.innerHTML = `
    <table class="table">
      <thead><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th></tr></thead>
      <tbody>
        ${carrito.map(item => `
          <tr>
            <td><img src="${item.imagen}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;"> ${item.nombre}</td>
            <td>$${item.precio.toLocaleString()}</td>
            <td><input type="number" min="1" value="${item.cantidad}" style="width:60px" onchange="cambiarCantidad(${item.id}, this.value)"></td>
            <td>$${(item.precio * item.cantidad).toLocaleString()}</td>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${item.id})"><i class="bi bi-trash"></i></button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  totalDiv.innerHTML = `<h5>Total: $${total.toLocaleString()}</h5>`;
}

function cambiarCantidad(id, cantidad) {
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad = Math.max(1, parseInt(cantidad) || 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
    actualizarContadorCarrito();
  }
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(p => p.id !== id);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  renderCarrito();
  actualizarContadorCarrito();
}

// Contador de visitas (se muestra debajo del header en cada página)
function mostrarContadorVisitas() {
  let visitas = parseInt(localStorage.getItem('contadorVisitas') || '0', 10);
  visitas++;
  localStorage.setItem('contadorVisitas', visitas);
  let contadorDiv = document.getElementById('contador-visitas');
  if (!contadorDiv) {
    contadorDiv = document.createElement('div');
    contadorDiv.id = 'contador-visitas';
    contadorDiv.style.textAlign = 'center';
    contadorDiv.style.background = 'rgba(0,188,212,0.08)';
    contadorDiv.style.color = '#00bcd4';
    contadorDiv.style.fontWeight = 'bold';
    contadorDiv.style.padding = '0.5rem 0';
    contadorDiv.style.fontSize = '1rem';
    const header = document.querySelector('header');
    if (header) header.insertAdjacentElement('afterend', contadorDiv);
  }
  contadorDiv.textContent = `Visitas a este portal: ${visitas}`;
}

// Renderizar productos y/o carrito según la página
if (window.location.pathname.includes('productos.html')) {
  renderMatrizProductos();
}
if (document.getElementById('productos-destacados')) {
  renderProductosDestacados();
}
if (window.location.pathname.includes('compras.html')) {
  renderCarrito();
}
actualizarContadorCarrito();
