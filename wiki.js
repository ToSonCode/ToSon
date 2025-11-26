// Dark/Light mode toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Smooth scrolling for sidebar links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
