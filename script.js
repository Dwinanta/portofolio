// script.js
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.menu').classList.toggle('show');
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about');

    // Ketika halaman pertama kali dimuat, jalankan animasi masuk
    aboutSection.classList.add('fade-in');

    // Contoh event scroll untuk memicu fade out
    window.addEventListener('scroll', function () {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition > screenPosition) {
            aboutSection.classList.add('fade-out');
        } else {
            aboutSection.classList.remove('fade-out');
        }
    });
});
