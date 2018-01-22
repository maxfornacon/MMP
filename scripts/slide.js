document.addEventListener("DOMContentLoaded", function() {
  sites = ["home", "kryptowaehrung", "geschichte", "mining", "probleme", "coinhive", "funktionen"];
  currentSiteIndex = 0;
  getCurrentSite();

  console.log(currentSite[1]);
  console.log("sites.legth " + sites.length);
  document.body.onkeyup = function(e){
    if(e.keyCode == 37){
      previous();
    }
    if(e.keyCode == 39){
      next();
    }
  };

  console.log(currentSiteIndex);
  document.getElementById(sites[currentSiteIndex]).style.display = "block";
});

function next() {
  if ( currentSiteIndex + 1 < sites.length ){
    getCurrentSite();
    ChangeUrl("TITEL", currentSite[0]+ "?" + sites[currentSiteIndex + 1]);
    currentSiteIndex++;
    animate(document.getElementById(sites[currentSiteIndex - 1]), document.getElementById(sites[currentSiteIndex]) , "outLeft");
  }
}

function previous() {
  if (currentSiteIndex > 0){
    getCurrentSite();
    ChangeUrl("TITEL", currentSite[0] + "?" + sites[currentSiteIndex - 1]);
    currentSiteIndex--;
    animate(document.getElementById(sites[currentSiteIndex + 1]), document.getElementById(sites[currentSiteIndex]) , "outRight");
  }
}

async function animate(elem1, elem2, direction) {
  if (direction == "outLeft"){
    elem1.classList.add("slideOutLeft");
    elem2.classList.add("slideInFromRight");
    await sleep(500);
    elem1.style.display = "none";
    elem1.classList.remove("slideOutLeft");
    elem2.classList.remove("slideInFromRight");
    elem2.style.display = "block";
  }
  else if (direction == "outRight"){
    elem2.classList.add("slideInFromLeft");
    elem1.classList.add("slideOutRight");

    await sleep(500);
    elem1.style.display = "none";
    elem1.classList.remove("slideOutRight");
    elem2.classList.remove("slideInFromLeft");
    elem2.style.display = "block";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentSite(){
  pathname = window.location.href;
  currentSite = window.location.href.split('?');
  console.log(currentSite[0]);
  for(var i = 0; i < sites.length; i++){
    if( currentSite[1] == sites[i]){
      currentSiteIndex = i;
      break;
    }
  }
}

function ChangeUrl(title, url) {
  /*var divs = document.getElementsByClassName("sliderDiv");
  var i;
  for (i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  */
  if (typeof (window.history.pushState) != "undefined") {
    var obj = { Title: title, Url: url };
    window.history.pushState(obj, obj.Title, obj.Url);

    console.log(currentSiteIndex);
  } else {
    alert("Browser does not support HTML5.");
  }
}
