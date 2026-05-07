// Bootstrap JS (necessari per al Navbar collapse, Modal, Accordion, Toast)
import * as bootstrap from "bootstrap";

// Inicialització dels Toasts de Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  // Inicialitzar tots els toasts
  const toastElList = document.querySelectorAll(".toast");
  toastElList.forEach((toastEl) => {
    new bootstrap.Toast(toastEl, { autohide: false });
  });

  // Filtre del programa (interactivitat bàsica)
  const filterButtons = document.querySelectorAll(".programa-filter");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Marcar l'enllaç actiu a la navbar
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".site-navbar__nav-link");
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").replace("./", "");
    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
