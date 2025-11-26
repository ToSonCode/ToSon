// Dark/Light mode toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Simple ToSon syntax highlighting
function highlightToSon() {
    const codeBlocks = document.querySelectorAll('code.toson');

    codeBlocks.forEach(block => {
        let code = block.textContent;

        // Comments
        code = code.replace(/~\/<-.*/g, match => `<span class="comment">${match}</span>`);

        // Keywords (say, variable, text, color)
        code = code.replace(/\b(say|variable|text|color)\b/g, match => `<span class="keyword">${match}</span>`);

        // Strings
        code = code.replace(/"(.*?)"/g, match => `<span class="string">${match}</span>`);

        // Operators
        code = code.replace(/>:/g, match => `<span class="operator">${match}</span>`);

        // Brackets
        code = code.replace(/[\{\}\[\]]/g, match => `<span class="bracket">${match}</span>`);

        block.innerHTML = code;
    });
}

// Run the highlighting
highlightToSon();
