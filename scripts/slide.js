document.addEventListener("DOMContentLoaded", function() {
  sites = ["home", "kryptowaehrung", "coinhive", "funktionen"];
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
    ChangeUrl("TITEL", "http://127.0.0.1:3000/index.html?" + sites[currentSiteIndex + 1]);
    currentSiteIndex++;
    document.getElementById(sites[currentSiteIndex]).style.display = "block";
  }
}

function previous() {
  if (currentSiteIndex > 0){
    getCurrentSite();
    ChangeUrl("TITEL", "http://127.0.0.1:3000/index.html?" + sites[currentSiteIndex - 1]);
    currentSiteIndex--;
    document.getElementById(sites[currentSiteIndex]).style.display = "block";
  }
}

function getCurrentSite(){
  pathname = window.location.href;
  currentSite = window.location.href.split('?');
  for(var i = 0; i < sites.length; i++){
    if( currentSite[1] == sites[i]){
      currentSiteIndex = i;
      break;
    }
  }
}

function ChangeUrl(title, url) {
  var divs = document.getElementsByClassName("sliderDiv");
  var i;
  for (i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  if (typeof (window.history.pushState) != "undefined") {
      var obj = { Title: title, Url: url };
      window.history.pushState(obj, obj.Title, obj.Url);

      console.log(currentSiteIndex);
  } else {
      alert("Browser does not support HTML5.");
  }
}
