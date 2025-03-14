document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check if user has a saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true; // Keep switch ON
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});

