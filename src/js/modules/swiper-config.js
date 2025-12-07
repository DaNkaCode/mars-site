export const swiperConfig = {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 130,
    mousewheel: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
};