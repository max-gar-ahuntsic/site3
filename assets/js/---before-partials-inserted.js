


//----- var language



//----- vars for bloc 'applications'
var app_slide_active = 1
var app_carousel_is_visible = false



/*=======================================================================
      BLOC 'COMPETENCES-HEADER' 
      (function needs declaration before partial inserted)
  ======================================================================*/

  /*
$(document).ready(function() {
  $( "#app-close-button" ).click( function() {
      $("#app-close-button").toggleClass('flip');
      //    jQuery("#video_lightbox").css({"height":"430px","top":"10%","width":"480px"});
  });
});
*/

function hide_app_carousel(){

  //document.getElementById("app-icon-button-" + String(old_slide)).classList.remove("active")
  document.querySelectorAll('.app-icon').forEach((x) => {x.classList.remove("active")});


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
 
  // keep comment: move scroll only if title is visible
  ele = document.getElementById("txt-applications-04")
  if ( ! isElementInViewport(ele) ){
    const start_value_window_scrollY = window.scrollY;
    let i=0
    repeat_move_then_wait()
    function repeat_move_then_wait(){
      setTimeout(function(){
        window.scrollTo({top: start_value_window_scrollY - i, behavior: 'smooth'});
        i = i+8
        if (i< 185) repeat_move_then_wait()
      }, 1);
    }
  }

  jQuery("#app-close-button").toggleClass('flip');
  $(".app-slide").animate({maxHeight: '3px'}, "slow");
  app_carousel_is_visible = false
  const appB = document.querySelectorAll('.app-button');
  appB.forEach((x) => x.style.visibility= 'hidden')


  // keep - move & shrink app icon buttons
  $(".app-icon").animate({opacity: '0'});
  $(".app-icon").animate({maxHeight: '125px'}, {duration: 600, queue: false} );
  $(".app-icon").animate({maxWidth: '125px'},  {duration: 600,queue: false});

  setTimeout(function(){
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'start', behavior: 'smooth'});
    // app-modal-carousel
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'center', behavior: 'smooth'});
   // $(".app-icon").animate({opacity: 1}, 1000);
   //$(".app-icon").animate({opacity: 1}, 1);
    $(".app-icon").animate({opacity: 1}, 500);
    $('#app-carousel-icon-container').removeClass("app-carousel-icon-container-embedded"); 
    $('#app-carousel-icon-container').addClass("app-carousel-icon-container-outside"); 
  

  }, 400);

  $(".app-icon").animate({opacity: '1'},  {duration: 5,queue: false});

}

function show_app_carousel(){
  //document.getElementById("app-modal-carousel").scrollIntoView({block: 'center', behavior: 'smooth'});

  if (1===2){
    const id = 'app-modal-carousel';
    const yOffset = -80; 
    const element = document.getElementById(id);
    const y = window.scrollY + element.getBoundingClientRect().top  + yOffset;
    
    const start_value_window_scrollY =window.scrollY;
    let displacement = element.getBoundingClientRect().top + yOffset
    let factor = 1;
    if (displacement < 0) {
      factor = -1
      displacement = -(displacement)
    }
    let i=0
    repeat_move_then_wait()
    function repeat_move_then_wait(){
      setTimeout(function(){
        window.scrollTo({top: start_value_window_scrollY + (i * factor), behavior: 'smooth'});
        i = i+7
        if (i< displacement) repeat_move_then_wait()
      }, 1);
    }
  }

  // scroll up half the size of carousel to center element
  const start_value_window_scrollY = window.scrollY;
  let i=0
  repeat_move_then_wait()
  function repeat_move_then_wait(){
    setTimeout(function(){
      window.scrollTo({top: start_value_window_scrollY + i, behavior: 'smooth'});
      i = i+7
      if (i< 185) repeat_move_then_wait()
    }, 1);
  }


  //$("body").scrollspy({ target: "#app-carousel-icon-container", offset: 100 });

  // *** APPS CAROUSEL HEIGHT ***
  carousel_height = window.innerHeight * 0.85

  
  jQuery("#app-close-button").toggleClass('flip');
  app_carousel_is_visible = true
  const appB = document.querySelectorAll('.app-button');
  appB.forEach((x) => x.style.visibility= 'visible')
  //--- carousel 
  // bon::  $(".app-slide").animate({maxHeight: '450px'}, "slow");
  $(".app-slide").animate({maxHeight: String(carousel_height)}, "slow");
  
  // keep - move & shrink app icon buttons
  //$(".app-icon").opacity=0;
  //$(".app-icon").animate({opacity: 0}, 1);

  //document.getElementsByClassName("app-icon").style.opacity = 0;

  //jQuery('.app-icon').css('opacity', '0')
  $(".app-icon").animate({opacity: '0'},  {duration: 0,queue: false});
  
  $(".app-icon").animate({maxHeight: '60px'}, {duration: 600, queue: false} );
  $(".app-icon").animate({maxWidth: '60px'},  {duration: 600,queue: false});
  $('#app-carousel-icon-container').removeClass("app-carousel-icon-container-outside"); 
  $('#app-carousel-icon-container').addClass("app-carousel-icon-container-embedded"); 
 
  document.getElementById("app-icon-button-" + String(app_slide_active)).className += " active ";

  //jQuery('.app-icon').css('opacity', '1')

  //$(".app-icon").animate({opacity: 1}, 500);
  setTimeout(function(){
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'start', behavior: 'smooth'});
    // app-modal-carousel
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'center', behavior: 'smooth'});
   // $(".app-icon").animate({opacity: 1}, 1000);
   //$(".app-icon").animate({opacity: 1}, 1);
    $(".app-icon").animate({opacity: 1}, 500);


  }, 200);
  /*
  $(document.body).animate({opacity: 0}, 1000);
  $(document.body).animate({opacity: 1}, 1000);
  */ 

  /*
    $(".app-slide").animate({maxHeight: '3px'}, "slow");

  height: 125px;
  max-width:125px;
  */

  //$('app-carousel-icon-container').width = "50%";
  
  //code before the pause
  //document.getElementById("app-target-scrollview").scrollIntoView(true);
  //document.getElementById("app-carousel-icon-container").scrollIntoView({behavior: 'smooth'});
  //document.getElementById("app-modal-carousel").scrollIntoView(true);

   
  setTimeout(function(){
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'start', behavior: 'smooth'});
    // app-modal-carousel
    //document.getElementById("app-modal-carousel").scrollIntoView({block: 'center', behavior: 'smooth'});
  }, 800);
  
}


function change_active_slide(old_slide, new_slide){
  console.log("old_slide: " + String(old_slide) )
  console.log("new_slide: " + String(new_slide) )
  document.getElementById("app-slide-" + String(old_slide)).classList.remove("active")
  document.getElementById("app-slide-" + String(new_slide)).className += " active "
  app_slide_active = new_slide
  document.getElementById("app-icon-button-" + String(old_slide)).classList.remove("active")
  document.getElementById("app-icon-button-" + String(new_slide)).className += " active ";
  //.focus();
}

// possible actions::  "prev-slide", "next-slide", "select-slide", "toggle-carousel"
function show_app_slide(button_selected, new_active_slide){
  console.log("app_slide_active: " + String(app_slide_active))
  var elems = document.querySelectorAll("[id^=app-slide]");
  var nb_elems = elems.length
  //document.getElementById('app-modal-carousel').style.display = 'inline';
 

  // ------ "toggle-carousel" button pressed
  if (button_selected === "toggle-carousel"){
    if (app_carousel_is_visible === true){
      //    jQuery("#video_lightbox").css({"height":"430px","top":"10%","width":"480px"});
      hide_app_carousel()
      return
    }else{
      show_app_carousel()
      return
    }
  }

  //----- if 'icon-button' pressed
  if (button_selected === "select-slide"){
    if (new_active_slide === app_slide_active){
      if (app_carousel_is_visible){
        hide_app_carousel()
      }
      else{
        show_app_carousel()
      }
    }else{
      if (!app_carousel_is_visible){
        show_app_carousel()
      }
      change_active_slide(app_slide_active, new_active_slide)
    }
  }

  // ------ 'prev' button pressed
  if (button_selected === "prev-slide"){
    new_active_slide = app_slide_active -1
    if (new_active_slide===0){
      new_active_slide = nb_elems
    }
    change_active_slide(app_slide_active, new_active_slide)
  }

  // ------ 'next' button pressed
  if (button_selected === "next-slide"){
    new_active_slide = app_slide_active +1
    if (new_active_slide > nb_elems){
      new_active_slide = 1
    }
    change_active_slide(app_slide_active, new_active_slide)
  }
}



/*=======================================================================
      BLOC 'COMPETENCES-HEADER' 
      (function needs declaration before partial inserted)
  ======================================================================*/
  function activate_competence_bloc(bloc){
    /*
    let ele = document.getElementById("nav-item-competences");
    ele.classList.add(" active ")
    */
    //alert(bloc)
    if (bloc==="conception"){
      let ele = document.getElementById("infographie");
      ele.style.display = 'none';
      ele = document.getElementById("conception");
      ele.style.display = 'inline';
      ele = document.getElementById("tab-conception");
      ele.classList.remove("tab-behind");
      ele.classList.add("tab-front")
      ele = document.getElementById("tab-infographie");
      ele.classList.remove("tab-front");
      ele.classList.add("tab-behind")
    }
    if (bloc==="infographie"){
      let ele = document.getElementById("conception");
      ele.style.display = 'none';
      ele = document.getElementById("infographie");
      ele.style.display = 'inline';
      ele = document.getElementById("tab-infographie");
      ele.classList.remove("tab-behind");
      ele.classList.add("tab-front")
      ele = document.getElementById("tab-conception");
      ele.classList.remove("tab-front");
      ele.classList.add("tab-behind")    }
    /*
     var yourUl = document.getElementById("yourUlId");
      yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
    */
  }

  function activate_then_goto_section(section_id){
    activate_competence_bloc(section_id)
    document.getElementById(section_id).scrollIntoView({behavior: 'smooth'}) ;
    window.scrollTo({top: -140, behavior: 'smooth'}); 

  }



