const toggleButton = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav-order');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
});
