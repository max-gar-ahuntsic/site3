
function next_app_slide(){
  //const car = document.querySelector('#carouselFade')
  //car.next()
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
  //window.addEventListener("load", initSwiper);
  initSwiper()



  /*=======================================================================
      CONFIG CAROUSEL "DEMO-NODE-VUE" (left pane)
  ======================================================================*/
  $('#carouselFade').carousel({
      interval: 5000, //5000
      ride: 'carousel',
      pause: 'hover' // ou 'hover', false
  });
  /*$('#carouselFade').carousel({
      pause: false
      //pause: "hover"
  });*/
  $('#carouselFade').carousel('cycle');



  
  

  /*=======================================================================
      USE "placeholder-for-carousel-indicators" TO INSERT CAROUSEL-INDICATORS
      (partials demo-node-vue-carousel-indicators.html)
      (purpose of this function is to avoid repeating same html code / keep code clean)
  ======================================================================*/
  /*
  (function(){
    let mySource = document.getElementsByClassName("carousel-indicators-2")
    let myTargets = document.getElementsByClassName("placeholder-for-carousel-indicators") 
    for (let i=0; i < myTargets.length; i++) {
      let mySourceClone = []
      mySourceClone[i] = mySource[0].cloneNode(true);
      let j = i+1
      if (i!=0){
        mySourceClone[i].querySelector(`button[aria-label='Slide 1']`).setAttribute("class", "")
        mySourceClone[i].querySelector(`button[aria-label='Slide 1']`).setAttribute("aria-current", "")
      }
      mySourceClone[i].querySelector(`button[aria-label='Slide ${j}']`).setAttribute("class", "active")
      mySourceClone[i].querySelector(`button[aria-label='Slide ${j}']`).setAttribute("aria-current", "true")
      myTargets[i].parentNode.appendChild(mySourceClone[i])
      // myTargets[i].replaceWith(mySourceClone[i])
      //myTargets[i].outerHTML =  mySourceClone[i].outerHTML
      //  **   class="active" aria-current="true"  **
    }
    for (const x of myTargets){
      x.parentNode.removeChild(x)
    }
  })()
  */
  

}
