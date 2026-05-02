const toggleBtn = document.getElementById('mode-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Quick logic to change button text
    if (document.body.classList.contains('light-theme')) {
        toggleBtn.textContent = "Switch to Dark Mode";
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#333";
    } else {
        toggleBtn.textContent = "Switch to Light Mode";
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";
    }
});