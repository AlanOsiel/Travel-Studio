// Código de Main

function filterSelection(category) {
  let items = document.getElementsByClassName("item");
  let buttons = document.querySelectorAll(".filters button");

  // Quitar clase active de todos los botones
  buttons.forEach(btn => btn.classList.remove("active"));
  // Agregar al botón clickeado (esto es opcional pero se ve pro)
  event.target.classList.add("active");

  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    if (items[i].className.indexOf(category) > -1) {
      items[i].style.display = "block";
    }
  }
}

// Código solo de portafolio

const RUTA_BASE = "images/portafolio";
let imagenes = []; // Lista de fotos de la categoría seleccionada
let indiceActual = 0;

/**
 * Esta función se activa al hacer clic en una portada (BODAS, XV, etc.)
 */
function abrirGaleria(carpeta, total) {
    const contenedor = document.getElementById('carrusel-dinamico');
    const visor = contenedor.querySelector('.visor-imagenes');
    
    // Limpiamos fotos de la categoría que se vio antes
    visor.innerHTML = "";
    indiceActual = 0;

    // Creamos las fotos de la nueva categoría elegida
    for (let i = 1; i <= total; i++) {
        const img = document.createElement('img');
        img.src = `${RUTA_BASE}/${carpeta}/${i}.jpg`;
        img.className = "carrusel-imagen";
        if (i === 1) img.classList.add('activa');
        img.alt = `${carpeta} - Foto ${i}`;
        
        visor.appendChild(img);
    }

    // Guardamos la referencia de las nuevas imágenes en la variable global
    imagenes = contenedor.querySelectorAll('.carrusel-imagen');

    // Mostramos el contenedor y hacemos scroll suave hacia él
    contenedor.style.display = "block";
    contenedor.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Función para navegar entre fotos del carrusel activo
 */
function cambiarImagen(boton, direccion) {
    if (imagenes.length === 0) return;

    // Quitamos 'activa' a la foto actual
    imagenes[indiceActual].classList.remove('activa');

    // Calculamos el siguiente índice
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;

    // Ponemos 'activa' a la nueva foto
    imagenes[indiceActual].classList.add('activa');
}

/**
 * Oculta el carrusel
 */
function cerrarGaleria() {
    document.getElementById('carrusel-dinamico').style.display = "none";
    // Opcional: volver a las portadas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Soporte para flechas del teclado
document.addEventListener('keydown', (e) => {
    const carrusel = document.getElementById('carrusel-dinamico');
    if (carrusel.style.display === "block") {
        if (e.key === "ArrowLeft") cambiarImagen(null, -1);
        if (e.key === "ArrowRight") cambiarImagen(null, 1);
        if (e.key === "Escape") cerrarGaleria();
    }
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