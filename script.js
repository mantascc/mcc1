const typed = new Typed('#typed-text', {
    strings: ['Hello, world'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 3000, // Pause for 1 second before starting to backspace
    loop: true
});

// Menu functionality
const menuSquare = document.getElementById('menuSquare');
const menuPopover = document.getElementById('menuPopover');

menuSquare.addEventListener('click', (e) => {
    e.stopPropagation();
    menuPopover.classList.toggle('show');
});

// Close popover when clicking outside
document.addEventListener('click', (e) => {
    if (!menuPopover.contains(e.target) && !menuSquare.contains(e.target)) {
        menuPopover.classList.remove('show');
    }
}); 