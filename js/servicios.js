// Código de Main

function filterSelection(category) {
  let items = document.getElementsByClassName("item");
  let buttons = document.querySelectorAll(".filters button");

  // Quitar clase active de todos los botones
  buttons.forEach(btn => btn.classList.remove("active"));
  // Agregar al botón clickeado
  event.target.classList.add("active");

  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    if (items[i].className.indexOf(category) > -1) {
      items[i].style.display = "block";
    }
  }
}

// Código solo de servicios

const paquetesData = {
    'BODAS': [
        { nombre: 'Paquete Basic Digital', img: 'images/precios/BODAS/1.jpeg' },
        { nombre: 'Paquete Plus Digital', img: 'images/precios/BODAS/2.jpeg' },
        { nombre: 'Paquete Basic', img: 'images/precios/BODAS/3.jpeg' },
        { nombre: 'Paquete Platinum Digital', img: 'images/precios/BODAS/4.jpeg' },
        { nombre: 'Paquete Plus', img: 'images/precios/BODAS/5.jpeg' },
        { nombre: 'Paquete Premium Digital', img: 'images/precios/BODAS/6.jpeg' },
        { nombre: 'Paquete Platinum', img: 'images/precios/BODAS/7.jpeg' },
        { nombre: 'Paquete Premium', img: 'images/precios/BODAS/8.jpeg' },
    ],
    'XV_ANOS': [
        { nombre: 'Paquete Basic Digital', img: 'images/precios/XV_ANOS/paquete_basic_digital.jpeg' },
        { nombre: 'Paquete Plus Digital', img: 'images/precios/XV_ANOS/paquete_plus_digital.jpeg' },
        { nombre: 'Paquete Basic', img: 'images/precios/XV_ANOS/paquete_basic.jpeg' },
        { nombre: 'Paquete Platinum Digital', img: 'images/precios/XV_ANOS/paquete_platinum_digital.jpeg' },
        { nombre: 'Paquete Plus', img: 'images/precios/XV_ANOS/paquete_plus.jpeg' },
        { nombre: 'Paquete Premium Digital', img: 'images/precios/XV_ANOS/paquete_premium_digital.jpeg' },
        { nombre: 'Paquete Platinum', img: 'images/precios/XV_ANOS/paquete_platinum.jpeg' },
        { nombre: 'Paquete Premium', img: 'images/precios/XV_ANOS/paquete_premium.jpeg' },
    ],
    'PINATAS': [
        { nombre: 'Paquete 1 o 2', img: 'images/precios/PINATAS/piñata1-2.jpeg' },
        { nombre: 'Paquete 3 o 4', img: 'images/precios/PINATAS/piñata3-4.jpeg' }
    ],
    'BAUTIZOS': [
        { nombre: 'Paquete 1 o 2', img: 'images/precios/BAUTIZOS/paquete1-2.jpeg' },
        { nombre: 'Paquete 3 o 4', img: 'images/precios/BAUTIZOS/paquete3-4.jpeg' }
    ],
    'SESIONES EN EXTERIOR': [
        { nombre: 'Paquete 1 o 2', img: 'images/precios/SESIONES EN EXTERIOR/sesiones1-2.jpeg' },
        { nombre: 'Paquete 3 o 4', img: 'images/precios/SESIONES EN EXTERIOR/sesiones3-4.jpeg' }
    ],
    'SESIONES EN ESTUDIO': [
        { nombre: 'Paquete 1 o 2', img: 'images/precios/SESIONES EN ESTUDIO/sesiones_estudio1-2.jpeg' },
    ]
};

function mostrarCategoria(cat, btn) {
    const contenedor = document.getElementById('contenedor-paquetes');
    contenedor.innerHTML = "";

    // Actualizar botones de pestañas
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Generar tarjetas
    paquetesData[cat].forEach(paquete => {
        const card = document.createElement('div');
        card.className = 'paquete-card';
        card.onclick = () => verImagen(paquete.img);
        
        card.innerHTML = `
            <img src="${paquete.img}" alt="${paquete.nombre}">
            <h4>${paquete.nombre}</h4>
            <p style="font-size: 0.8rem; color: var(--acento);">Click para ampliar</p>
        `;
        contenedor.appendChild(card);
    });
}

function verImagen(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('img-zoom');
    img.src = src;
    lb.style.display = 'flex';
}

// Cargar por defecto la primera categoría al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    const primerBoton = document.querySelector('.tab-btn');
    mostrarCategoria('BODAS', primerBoton);
});

const menuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Animación opcional de las rayitas
        menuBtn.classList.toggle('open');
    });
}