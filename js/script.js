  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    loader.classList.add("fade-out");
  });


  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
