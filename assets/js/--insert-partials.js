

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
      (embedded partials allowed)
 ======================================================================*/
insertPartials()
function insertPartials(){
  let z = document.querySelectorAll(`[data-partial]`)
  if (z[0] !== null){
    console.log(z.length)
    nb_of_inserts = 0

    for (let i = 0; i < z.length; i++) {
      let elmnt = z[i];
      let file =  elmnt.getAttribute("data-partial");
      console.log(i + "-"+ file)
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = xhttp_onReady_my_function
        xhttp.open("GET", file, true);
        xhttp.send();
        function xhttp_onReady_my_function(){
          if (this.readyState == 4){
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            else if (this.status == 200) {
              elmnt.outerHTML = this.responseText;
              console.log(">>>>> inserted: " + file)
              elmnt.removeAttribute("data-partial");
              nb_of_inserts++
              if(nb_of_inserts >= z.length){
                remains = document.querySelectorAll(`[data-partial]`) 
                if  (remains[0] !== undefined){
                  insertPartials()
                }
                else{
                  insertLangText()
                }
              }
            }
          }
        }
      }
    }
  }
}


/*=======================================================================
      INSERT TEXT BASED ON LANGUAGE SELECTED
  ======================================================================*/
// insert text from [language].json files
async function insertLangText(){
  console.log("pass")

  console.log(currentLanguage)

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
                }catch{
                  //console.log(`Text insertion: id '${property}' not found in document, while language json contains that key.`  )
                }
              }
              if (language_change_in_progress){
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
    return;
  
}
  

