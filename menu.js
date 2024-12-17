const Hamburguer = document.getElementById("hamburguer")

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active)
  if (active) event.currentTarget.setAttribute("aria-label", "Fechar Menu")
  else {
  event.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }
}

Hamburguer.addEventListener("click", toggleMenu);
Hamburguer.addEventListener("touchstart", toggleMenu);