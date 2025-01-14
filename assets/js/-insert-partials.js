

var doneInsertingText = {state:false}
var currentLanguage = "fr"
var languageFile = {
  "fr" : "assets/language/fr.json",
  "eng" : "assets/language/eng.json",
}

/*=======================================================================
      insert partials
  ======================================================================*/

insertPartials(insertLangText)
function insertPartials(insertLangText){
  //var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  //z = document.getElementsByTagName("*");
  let z = document.querySelectorAll(`[data-partial]`)
  
  for (let i = 0; i < z.length; i++) {
    let elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    // file = "view-partials/" + elmnt.getAttribute("data-partial").toString();
    let file =  elmnt.getAttribute("data-partial");
    //console.log(file)
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
              elmnt.outerHTML = this.responseText;
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-partial");
 
          if ( i === z.length -1 ){
            insertLangText()
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

