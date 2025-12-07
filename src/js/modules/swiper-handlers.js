export function initSwiperHandlers(swiper) {

    window.addEventListener('resize', () => {
        swiper.slides.forEach(slide => {
            const details = slide.querySelector('details');

            if(details) details.removeAttribute('open');

            setTimeout(() => {
                slide.style.height = '';
            }, 10);

            setTimeout(() => {
                slide.style.height = slide.clientHeight + 'px';
            }, 10);
        });
    });

    swiper.slides.forEach((slide, index) => {
        const cardHeight = slide.clientHeight;
        slide.style.height = cardHeight + 'px';

        slide.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        slide.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });

        slide.addEventListener('click', () => {
            if(swiper.params.slidesPerView > 1) {
                if(slide.classList.contains('swiper-slide-active')) swiper.slidePrev(300);
                else if(!slide.classList.contains('swiper-slide-next')) swiper.slideNext(300);
            }
        });
    });
};