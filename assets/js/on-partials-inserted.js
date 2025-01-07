
// this function is called from 'view-partials.js' - after partials and text insertions

function onPartialsInserted(){
/**
   * Navmenu Scrollspy
   */
let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  })
}
//window.addEventListener('load', navmenuScrollspy);
navmenuScrollspy();
document.addEventListener('scroll', navmenuScrollspy);


/**
   * Init swiper sliders
   */
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
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
    let config2 = JSON.parse(
      //swiperElement.querySelector(".swiper-config").innerHTML.trim()
      `{
        "loop": true,
        "speed": 5000,
        "autoplay": {
          "delay": 0
        },
        "slidesPerView": "auto",
        "pagination": {
          "el": ".swiper-pagination",
          "type": "bullets",
          "clickable": true
        },
        "breakpoints": {
          "320": {
            "slidesPerView": 1,
            "spaceBetween": 40
          },
          "1200": {
            "slidesPerView": 1,
            "spaceBetween": 1
          }
        }
      }`
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

//window.addEventListener("load", initSwiper);
initSwiper()

  
$('#carouselFade').carousel({
    interval: 5000,
    ride: 'carousel',
    pause: 'hover' // ou 'hover', false
});
/*$('#carouselFade').carousel({
    pause: false
    //pause: "hover"
});*/
$('#carouselFade').carousel('cycle');


/*
function reActivateCycling(){
  alert("s")
  jQuery('#carouselExampleIndicators').carousel({
    interval: 1000
  });
  jQuery('#carouselExampleIndicators').carousel('cycle');
}
*/

introImgFadedState = true
setInterval(myMethod, 1000);
let counter = 0
function myMethod( ){
  if (counter%10 === 0 ){ 
    if (introImgFadedState){
        $('#intro-img-bg').fadeOut(10000);
        introImgFadedState= false
    }
    else{
        $('#intro-img-bg').fadeIn(10000);
        introImgFadedState= true
    }
  }
  counter++
  //this will repeat every 5 seconds
  //you can reset counter here
}


    //$('#intro-img-bg').fadeOut(10000);
    //$('#intro-img-bg').css({ '-webkit-filter': 'blur(10px)', 'filter': 'blur(10px)' });

    /*
    $('#demo-node-vue-section').on('load',function() {
      $(this).fadeOut(1000, function() {
        $(this).prop('hidden', true);
      });
    
      $('#demo-node-vue-section').fadeIn(1000);
    })
*/

preloader.remove();


}




