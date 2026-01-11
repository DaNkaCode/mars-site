import { swiperConfig } from './modules/swiper-config.js';
import { initSwiperHandlers } from './modules/swiper-handlers.js';
import { initDetailsHandler } from './modules/details-handler.js';
import { PlaceholderHandler } from './modules/placeholder-handler.js';

const swiper = new Swiper(".swiper", swiperConfig);


initSwiperHandlers(swiper);
initDetailsHandler();

new PlaceholderHandler();