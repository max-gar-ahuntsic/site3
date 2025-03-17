

var doneInsertingText = {state:false}
var done_inserting_partials_1st_round = false
var done_inserting_partials_2nd_round = false


////////// language change
var currentLanguage = "fr"
var languageFile = {
  "fr" : "assets/language/fr.json",
  "eng" : "assets/language/eng.json",
}
var language_change_in_progress = false;
var animated_headlines_needs_reset = false;


var a= "<b> this  is html </b>"




/*=======================================================================
      BUTTON 'TOGGLE LANGUAGE' 
  ======================================================================*/

function toggle_language(){
  if (currentLanguage === "fr") currentLanguage = "eng"
  else currentLanguage = "fr"
  language_change_in_progress = true;
  // resetting dom segment for "animated headline" to work when language changes
  // ... removing dom elements will cause running animatedHeadlines to stop
  //... and  allow to restart  with fresh new dom elements
  const myNode = document.getElementById("animated-headline-parent");
	myNode.innerHTML = `
                      <b id="txt-intro-12" class="is-visible" ></b>
                      <b id="txt-intro-13"></b>
                      <b id="txt-intro-14"></b>
                      <b id="txt-intro-15"></b>
                      `;
  insertLangText();
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
      INSERT TEXT BASED ON LANGUAGE SELECTED
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
              if (language_change_in_progress){
                //animated_headlines_needs_reset = true;
                animateHeadlines()
              }else{
                onPartialsInserted()
              }
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

