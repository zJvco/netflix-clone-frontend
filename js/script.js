const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carouselImages = document.querySelector('.carousel-images');

var currentCarousel = 0;
var carouselSize = carouselImages.clientWidth;

window.addEventListener('scroll', (e) => {
    const windowHeight = window.pageYOffset;
    const headerContainer = document.querySelector('.header-container');

    if (windowHeight < 1) {
        headerContainer.style.backgroundColor = 'transparent';
    }
    else {
        headerContainer.style.backgroundColor = 'rgb(20, 20, 20)';
    }
})

nextBtn.addEventListener('click', () => {
    currentCarousel++;

    if (currentCarousel > 1) {
        currentCarousel = 1;
    }

    carouselImages.style.transition = 'transform 1s ease-in-out';
    carouselImages.style.transform = `translateX(${-carouselSize * currentCarousel}px)`;
})

prevBtn.addEventListener('click', () => {
    currentCarousel--;

    if (currentCarousel < 0) {
        currentCarousel = 0;
    }

    carouselImages.style.transition = 'transform 1s ease-in-out';
    carouselImages.style.transform = `translateX(${-carouselSize * currentCarousel}px)`;
})