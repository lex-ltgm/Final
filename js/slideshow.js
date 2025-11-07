(function startSlideshow() {
    const slides = document.querySelectorAll('#slide-container .slide');
    if (!slides.length) return;

    let current = 0;
    slides[current].style.display = 'block';

    setInterval(() => {
        slides[current].style.display = 'none';
        current = (current + 1) % slides.length;
        slides[current].style.display = 'block';
    }, 4000);
})();
