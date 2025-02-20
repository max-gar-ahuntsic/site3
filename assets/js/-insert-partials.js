

var doneInsertingText = {state:false}
var done_inserting_partials_1st_round = false
var done_inserting_partials_2nd_round = false

var currentLanguage = "fr"
var languageFile = {
  "fr" : "assets/language/fr.json",
  "eng" : "assets/language/eng.json",
}

var a= "<b> this  is html </b>"

/*=======================================================================
      BLOC 'COMPETENCES-HEADER' 
      (function needs declaration before partial inserted)
  ======================================================================*/
  function activate_competence_bloc(bloc){
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
    document.getElementById(section_id).scrollIntoView({behavior: 'smooth'});

  }

/*=======================================================================
      insert partials
  ======================================================================*/

insertPartials()
//insertPartials(insertLangText)
//function insertPartials(insertLangText){
function insertPartials(){
    //var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  //z = document.getElementsByTagName("*");
  let z = document.querySelectorAll(`[data-partial]`)
  console.log(z.length)
  nb_of_inserts = 0

  for (let i = 0; i < z.length; i++) {
    let elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    // file = "view-partials/" + elmnt.getAttribute("data-partial").toString();
    let file =  elmnt.getAttribute("data-partial");
    console.log(file)
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
              //console.log(elmnt)
              elmnt.outerHTML = this.responseText;
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute*/
          elmnt.removeAttribute("data-partial");

          // mitigating asynchronicity -> wait for inserts completed before next inserts
          nb_of_inserts++
          check_partials_inserted();
          function check_partials_inserted() {
              if(nb_of_inserts != z.length) {
                window.setTimeout(check_partials_inserted, 100); 
              } else {
                if (!done_inserting_partials_1st_round){
                  done_inserting_partials_1st_round = true
                  insertPartials() //re-run function to allow for nested partials
                } 
                if (done_inserting_partials_1st_round && !done_inserting_partials_2nd_round){ 
                  done_inserting_partials_2nd_round = true
                  insertLangText()
                }
              }
          }


          //wait for all partial insertions before insertech lang text 
          if ( i === z.length -1 ){
            console.log("pass")
            //insertLangText()
          }
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      //return;
    }
  }
    //let b="I'm a developper 2"
    //document.getElementById('output').innerHTML = b;
}

/*=======================================================================
      INSERT TXT BASED ON LANGUAGE SELECTED
  ======================================================================*/
// insert text from [language].json files
async function insertLangText(){
  console.log("pass")

  console.log(currentLanguage)

  //if ( currentLanguage === "fr") file = "assets/language/fr.json"
  file = languageFile[currentLanguage]
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
          if (this.status == 200) {
              let res= this.responseText;
              let langObj = JSON.parse(res);

              for (const property in langObj) {
                try{
                  document.getElementById(property).innerHTML = langObj[property]
                  //console.log(`${property}: ${langObj[property]}`);
                }catch{
                  console.log(`Text insertion: id '${property}' not found in document, while language json contains that key.`  )
                }
                //document.getElementById("tess").innerHTML = "texest"
              }
              //doneInsertingText.state = true
              //mainJs()
              onPartialsInserted()
 
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}

          
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    /* Exit the function: */
    return;
  
}
  

if (1 == 2){
//includeHTML()
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("data-include-html");
          //includeHTML();
        }
      } 
      xhttp.withCredentials = true;
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
}

