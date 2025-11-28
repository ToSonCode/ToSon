// Function to get cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Apply theme based on cookie
function applyTheme() {
    const theme = getCookie("toson-theme") || "light";
    document.body.className = theme;
}

// Toggle theme and save to cookie
function toggleTheme() {
    const current = document.body.className;
    const newTheme = current === "dark" ? "light" : "dark";
    document.body.className = newTheme;
    setCookie("toson-theme", newTheme, 365);
}

// Event listener for toggle button
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
});
