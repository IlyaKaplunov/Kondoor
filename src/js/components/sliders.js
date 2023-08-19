import Swiper, { Navigation, Pagination, Thumbs, Autoplay} from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]); 

const worksSlider = new Swiper(".works__slider", { 
  slidesPerView: 1, 
  spaceBetween: 20, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".works__switch--next", 
    prevEl: ".works__switch--prev", 
  }, 
  breakpoints: {
    1024:  {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    },
  }
});

const popupSlider = new Swiper(".popup__slider", { 
  slidesPerView: 1, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".popup__switch--next", 
    prevEl: ".popup__switch--prev", 
  },
});

const finishingSlider = new Swiper(".finishing__slider", { 
    slidesPerView: 1, 
    spaceBetween: 25, 
    speed: 600,
    loop: true,
    navigation: { 
      nextEl: ".finishing__switch--next", 
      prevEl: ".finishing__switch--prev", 
    }, 
    breakpoints: {
      1024:  {
        slidesPerView: 5,
      },
      725: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      414: {
        slidesPerView: 2.3,
      },
      300: {
        slidesPerView: 1,
      }
    }
});