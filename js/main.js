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