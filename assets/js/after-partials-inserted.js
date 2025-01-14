
// this function is called from 'view-partials.js' - after partials and text insertions

function onPartialsInserted(){


  //////////  MAIN-js
  //my_main();

  //////////  onVisible:  watch ele & trigger function
  function onVisible(element, callback, disconnectAfterExecuted) {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          callback(element);
          if (disconnectAfterExecuted) observer.disconnect();
          // BON observer.disconnect();  pr continuer à surveiller
        }
        console.log("observe")
        /*
        if (!entries[0].isIntersecting) {
          console.log('Elvis has LEFT the building ');
        }
        else {
            console.log('Elvis has ENTERED the building ');
        }
        */
        });
    }).observe(element);
    if(!callback) return new Promise(r => callback=r);
  }
  
  

  /*
  ////////////   INIT SWIPER (for 'conception' bloc)
  initSwiper()
  function initSwiper() {
    //    document.querySelectorAll("#conception .init-swiper").forEach(function(swiperElement) {
    document.querySelectorAll("#conception .init-swiper-tabs").forEach(function(swiperElement) {
      let config ={
        "loop": true,
        "speed": 600,
        "autoHeight": true,
        "autoplay": {
          "delay": 5000
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
      }
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  //window.addEventListener("load", initSwiper);
  */



  //////////  Navmenu Scrollspy

  let navmenulinks = document.querySelectorAll('.navmenu a');
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 400;
      //console.log(position)
      //console.log(section.id);
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
   * page 'conception': Init swiper tabs sliders
   */
  function initSwiperTabs() {
    document
      .querySelectorAll(".init-swiper-tabs")
      .forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        const dotsContainer = swiperElement
          .closest("section")
          .querySelector(".js-custom-dots");
        if (!dotsContainer) return;

        const customDots = dotsContainer.querySelectorAll("a");

        // Remove the default pagination setting
        delete config.pagination;

        const swiperInstance = new Swiper(swiperElement, config);

        swiperInstance.on("slideChange", function() {
          updateSwiperTabsPagination(swiperInstance, customDots);
        });

        customDots.forEach((dot, index) => {
          dot.addEventListener("click", function(e) {
            e.preventDefault();
            swiperInstance.slideToLoop(index);
            updateSwiperTabsPagination(swiperInstance, customDots);
          });
        });

        updateSwiperTabsPagination(swiperInstance, customDots);
      });
  }

  function updateSwiperTabsPagination(swiperInstance, customDots) {
    const activeIndex = swiperInstance.realIndex;
    customDots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
  //window.addEventListener("load", initSwiperTabs);
  initSwiperTabs()


 /*=======================================================================
      PAGE 'CONCEPTION' :: gradually move images up and then down
  ======================================================================*/
  //let introImgFadedState = true
  let counter = 0
  let increment = 1
  let sel = document.querySelectorAll(".tabs .swiper-slide")
  let position = 0
  //console.log(sel.length)

  setInterval(myMethod, 50);
  function myMethod( ){
    sel.forEach(function(ele){
      //if (counter<100) console.log(ele)
      ele.style.bottom = String(position) + "px"
    })
    if (counter % 250 === 0 && counter != 0) increment = increment * -1
    if (counter === 10000) counter = 0
    position = position + increment
    counter++
  }


  /*=======================================================================
      LAUNCH ANIMATION PER PARTIAL
  ======================================================================*/

  partial_intro();
  partial_demo_boutique();
  partial_programmation(onVisible);

  /*=======================================================================
  preloader.remove();
  ======================================================================*/
  preloader.remove();




}




