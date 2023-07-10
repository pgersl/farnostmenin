const toggleButton = document.querySelector('.toggle');
const navContainer = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
  navContainer.classList.toggle('toggled');
});