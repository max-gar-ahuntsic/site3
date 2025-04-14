


// this function is called from 'view-partials.js' - after partials and text insertions
function onPartialsInserted(){
  document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll("a[href^='#']");
    anchors.forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const href = anchor.getAttribute("href");
            const targetElement = document.querySelector(href);
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        });
    });
  });

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
       
        });
    }).observe(element);
    if(!callback) return new Promise(r => callback=r);
  }
  
  


//=======================================================.
  //////////  Navmenu Scrollspy
//=======================================================.

  let navmenulinks = document.querySelectorAll('.navmenu a');
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      //ci-bas permet highlight nav menu ele 'competences' en survolant plusieurs autres sections
      if (section.id != "programmation" && section.id != "conception" && section.id != "infographie"){
        if (!section) return;
        let position = window.scrollY + 400;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      }
    })
  }
  navmenuScrollspy();
  document.addEventListener('scroll', navmenuScrollspy);




 /**-------------------------------------------------.
   * page 'conception': Init swiper tabs sliders
   ------------------------------------------------.*/
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
  initSwiperTabs()


 /*=======================================================================
      BLOC 'CONCEPTION' :: gradually move images up and then down
  ======================================================================*/
  let counter = 0
  let increment = 1
  let sel = document.querySelectorAll(".tabs .swiper-slide")
  let position = 0

  setInterval(myMethod, 50);
  function myMethod( ){
    sel.forEach(function(ele){
      ele.style.bottom = String(position) + "px"
    })
    if (counter % 250 === 0 && counter != 0) increment = increment * -1
    if (counter === 10000) counter = 0
    position = position + increment
    counter++
  }

  /*=======================================================================
  bloc DEMO-BOUTIQUE
  USE "placeholder-for-carousel-indicators" TO INSERT CAROUSEL-INDICATORS
  (partials demo-node-vue-carousel-indicators.html)
  (purpose of this function is to avoid repeating same html code / keep code clean)
  ======================================================================*/
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
    }
    for (const x of myTargets){
      x.parentNode.removeChild(x)
    }
  })()

  /*=======================================================================
  LAUNCH ANIMATION PER PARTIAL
  ======================================================================*/

  partial_intro();
  partial_programmation(onVisible);
  setTimeout(function(){
    partial_demo_boutique();
  }, 800);
  
  const myCarouselElement = document.querySelector('#carouselExampleControls2')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: false
  })


  /*=======================================================================
  preloader.remove();
  ======================================================================*/
  if (!language_change_in_progress){
    preloader.remove();
  }

}



