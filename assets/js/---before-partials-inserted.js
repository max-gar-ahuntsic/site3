


//----- vars for bloc 'applications'
var app_slide_active = 1
var app_carousel_is_visible = false



/*=======================================================================
      BLOC 'COMPETENCES-HEADER' 
      (function needs declaration before partial inserted)
  ======================================================================*/

  

function hide_app_carousel(){

                   
  //--------- menu show (must hide menu so that clicking buttons won't trigger menu instead)
  $('#navmenu').css({'display': 'block'});
   
  //document.querySelectorAll('.app-icon').forEach((x) => {x.classList.remove("active")});

  //----------- button toggle close  triangle
  //jQuery("#app-close-button").toggleClass('flip');
  $("#app-close-button").animate({opacity: '0'},  {duration: 400,queue: false});

  //---------- button arrows
  app_carousel_is_visible = false
  const appB = document.querySelectorAll('.app-button');
  appB.forEach((x) => x.style.visibility= 'hidden')



  $(".app-icon").animate({opacity: '0'},  {duration: 150,queue: true}).promise().done(function(){
     // $(".app-sub-container").animate({height: '0px'}, {duration: 200,queue: false}).promise().done(function(){
        
     $('.app-sub-container')
        .removeClass('app-sub-container-unfolded')
        .addClass('app-sub-container-folded-with-transform')
   
    /*$('.app-sub-container').addClass('app-sub-container-folded'); */


          setTimeout(function(){
 
            $("#header").animate({opacity: '1'},  {duration: 100,queue: false});
 
            //------- remove 'height' as a standalone attribute on the element
            $(".app-sub-container-unfolded").css({height: ''});
 
            $('.app-sub-container')
                .removeClass('app-sub-container-unfolded')
                .addClass('app-sub-container-folded')


            $('#app-modal-carousel')
                .removeClass("modalUnfolded")
                .addClass("modalFolded");
              
            
            //----------- icons
            $(".app-icon").animate({opacity: 1}, 500);
            $('#app-carousel-icon-container')
                .removeClass("app-carousel-icon-container-embedded")
                .addClass("app-carousel-icon-container-outside"); 
            $('.app-icon')
                .removeClass("app-icon-embedded")
                .addClass("app-icon-outside"); 


            //---------- toggle body scroll bar
            $('body').css({'overflow-y': 'visible'});
          }, 700);
    //  })
    })
}

function show_app_carousel(){

  // *** APPS CAROUSEL HEIGHT ***
  carousel_height = window.innerHeight * 0.85

  
  //jQuery("#app-close-button").toggleClass('flip');
  $("#app-close-button").animate({opacity: '1'},  {duration: 100,queue: false});
  
  app_carousel_is_visible = true

  //---------- arrow buttons
  const appB = document.querySelectorAll('.app-button');
  appB.forEach((x) => x.style.visibility= 'visible');
  //--- carousel 
  // bon::  $(".app-slide").animate({maxHeight: '450px'}, "slow");
  // 25-04-03--- $(".app-slide").animate({maxHeight: String(carousel_height)}, "slow");
  
  //---------- move & shrink app icon buttons
    
  // $(selector).fadeOut('slow').promise().done(function(){...}); 
  $(".app-icon").animate({opacity: '0'},  {duration: 100,queue: false}).promise().done(function(){
    setTimeout(function(){
      //---------- icons
      $('#app-carousel-icon-container')
          .removeClass("app-carousel-icon-container-outside")
          .addClass("app-carousel-icon-container-embedded"); 
      $('.app-icon')
          .removeClass("app-icon-outside")
          .addClass("app-icon-embedded"); 

      // app-sub-container-unfolded
      document.getElementById("app-icon-button-" + String(app_slide_active)).className += " active ";

      setTimeout(function(){
          $(".app-icon").animate({opacity: 1}, 500);
          //---------- toggle body scroll bar
          $('body').css({'overflow': 'hidden'});
          //--------- menu hide
          $('#navmenu').css({'display': 'none'}); 

        }, 200);
      
      
      $('#app-modal-carousel')
          .removeClass("modalFolded")
          .addClass("modalUnfolded"); 
      
          $('.app-sub-container')
          .removeClass('app-sub-container-folded')
          .addClass('app-sub-container-unfolded'); 

    

    }, 200);


  })


  //---------- hide menu (must hide menu so that clicking buttons won't trigger menu instead)
  //$("#header").animate({height: '0%'}, {duration: 600, queue: false} );
  $("#header").animate({opacity: '0'},  {duration: 600,queue: false});
  //$("#header").animate({maxHeight: '0px'}, {duration: 3600, queue: false} );
  /*
  $('#header').removeClass("sticky-top");
  */

  
  
}


function change_active_slide(old_slide, new_slide){
  console.log("old_slide: " + String(old_slide) )
  console.log("new_slide: " + String(new_slide) )
  document.getElementById("app-slide-" + String(old_slide)).classList.remove("active")
  document.getElementById("app-slide-" + String(new_slide)).className += " active "
  app_slide_active = new_slide
  document.getElementById("app-icon-button-" + String(old_slide)).classList.remove("active")
  document.getElementById("app-icon-button-" + String(new_slide)).className += " active ";
}

// possible actions::  "prev-slide", "next-slide", "select-slide", "toggle-carousel"
function show_app_slide(button_selected, new_active_slide){
  console.log("app_slide_active: " + String(app_slide_active))
  var elems = document.querySelectorAll("[id^=app-slide]");
  var nb_elems = elems.length

  // ------ "toggle-carousel" button pressed
  if (button_selected === "toggle-carousel"){
    if (app_carousel_is_visible === true){
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
  }

  function activate_then_goto_section(section_id){
    activate_competence_bloc(section_id)
    document.getElementById(section_id).scrollIntoView({behavior: 'smooth'}) ;
    window.scrollTo({top: -140, behavior: 'smooth'}); 

  }



