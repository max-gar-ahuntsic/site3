
function next_app_slide(){
  $('#carouselFade').carousel('next');

}

function partial_demo_boutique(){

  /*=======================================================================
     * Init swiper sliders
  ======================================================================*/
  function initSwiper() {
    document.querySelectorAll("#demo-node-vue-section .init-swiper").forEach(function(swiperElement) {
      let config ={
        loop: true,
        freeMode: true,
        spaceBetween: 0,
        grabCursor: true,
        slidesPerView: 1,
        loop: true,
        effect: 'coverflow',
        autoplay: {
          delay: 1,
          disableOnInteraction: true
        },
        freeMode: true,
        speed: 5000,
        freeModeMomentum: false,
        coverflowEffect: {
          rotate: 130,
          stretch: 100,
          depth: 500,
          modifier: 1,
          slideShadows: false,}

      }
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  initSwiper()



  /*=======================================================================
      CONFIG CAROUSEL "DEMO-NODE-VUE" (left pane)
  ======================================================================*/
  $('#carouselFade').carousel({
      interval: 5000, //5000
      ride: 'carousel',
      pause: 'hover' // ou 'hover', false
  });
  $('#carouselFade').carousel('cycle');

   

}
