

function partial_intro(){

    //////////  ANIMATEHEADLINES

    animateHeadlines()


    //////////  INTRO:: FADE-IN FADE-OUT FILTER IMAGE on intro partial

    let introImgFadedState = true
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
    }


  
    ///////   INTRO:: CONFIG FOR SWIPER CAROUSEL BANNER TECH ICONS

    intro_initSwiper()
    function intro_initSwiper() {
        document.querySelectorAll(".logo-banner .init-swiper").forEach(function(swiperElement) {
        let config ={
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
                "0": {
                "slidesPerView": document.getElementById('logo-banner-swiper').offsetWidth / 150,
                "spaceBetween": 10
                }},
            }
        
        if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
        } else {
            new Swiper(swiperElement, config);
        }
        });
    }
    //window.addEventListener("load", initSwiper);

}
