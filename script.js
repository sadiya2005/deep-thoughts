// JavaScript to toggle the sliding menu
const toggleButton = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    // Check the current position of the menu and toggle it
    if (menu.style.left === '0px') {
        menu.style.left = '-300px'; // Slide out
    } else {
        menu.style.left = '0px'; // Slide in
    }
});
