function toggleNavbar() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// claude script
function toggleNavbarClaude() {
  var x = document.getElementById("myNavbar-claude");
  if (x.className === "navbar-claude") {
    x.className += " responsive-claude";
  } else {
    x.className = "navbar-claude";
  }
}
