function filterSelection(category) {
  let items = document.getElementsByClassName("item");

  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";

    if (items[i].className.indexOf(category) > -1) {
      items[i].style.display = "block";
    }
  }
}