function toggleMenu() {
    var navMenu = document.querySelector('.site-nav ul');
    var menuIcon = document.querySelector('.nav-toggle');

    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('open');
}

document.addEventListener('click', function (e) {
    var navMenu = document.querySelector('.site-nav ul');
    var menuIcon = document.querySelector('.nav-toggle');

    if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('open');
    }
});
function toggleMenu() {
    var navMenu = document.querySelector('.site-nav ul');
    navMenu.classList.toggle('active');
}
function toggleMenu() {
    const nav = document.querySelector('.site-nav ul');
    const toggleButton = document.querySelector('.nav-toggle');
    nav.classList.toggle('active');
    toggleButton.classList.toggle('open');
}