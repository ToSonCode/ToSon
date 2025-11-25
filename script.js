// Dark/Light mode toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
