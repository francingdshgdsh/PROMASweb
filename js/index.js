function alerts() {
    Swal.fire({
        title: "Enviado",
        text: "Tu información se ha enviado correctamente.",
        icon: "success"
      });
}

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.caracterizacion');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(nav) {
        nav.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
