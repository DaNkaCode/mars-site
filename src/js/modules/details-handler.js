export function initDetailsHandler() {
    const detailsElements = document.querySelectorAll('.swiper-slide details');

    detailsElements.forEach((el) => {
        const slide = el.closest('.swiper-slide');
        let cardHeight;

        el.addEventListener('toggle', () => {
            if(slide) {
                if(el.open) {
                    cardHeight = slide.clientHeight;
                    const detailsHeight = slide.querySelector('details').clientHeight;
                    slide.style.height = detailsHeight + 'px';
                } else {
                    slide.style.height = cardHeight + 'px';
                }
            }
        });
    });
}