document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      const menu = this.querySelector('.dropdown-menu');
      menu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
      const menu = this.querySelector('.dropdown-menu');
      menu.classList.remove('show');
    });
  });
});
