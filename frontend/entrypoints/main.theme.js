// import '../styles/main.scss';

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

// Import Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectFade, Mousewheel } from 'swiper/modules';

import '../components/alp-main-store';
import '../components/alp-cart';
import '../components/modalComponent';

window.Alpine = Alpine;
window.Swiper = Swiper;
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel]);

Alpine.plugin(persist);
Alpine.start();


import { variantSelect } from '../components/variant-select';
import { headerSticky } from '../components/header';

headerSticky();
variantSelect();
