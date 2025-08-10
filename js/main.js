document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});





 document.querySelectorAll('a[data-section]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('data-section'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });