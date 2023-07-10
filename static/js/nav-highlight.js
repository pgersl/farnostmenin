var currentPage = window.location.pathname.slice(0, -1);

var navLinks = document.querySelectorAll('.nav-link a');

navLinks.forEach(function(link) {
    var linkPage = link.getAttribute('href');
    console.log(linkPage);
    if (currentPage.includes(linkPage)) {
        link.classList.add('highlight');
      }
});