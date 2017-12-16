window.onload = function() {
  sites = ["/index.html", "/coinhive.html", "/funktionen.html", "/probleme.html"];
  pathname = window.location.pathname;
  currentSiteIndex = 0;
  document.body.onkeyup = function(e){
    if(e.keyCode == 37){
      previous();
    }
    if(e.keyCode == 39){
      next();
    }
  };
  for(var i = 0; i < sites.length; i++){
    if(pathname == sites[i]){
      currentSiteIndex = i;
      console.log(currentSiteIndex);
      console.log(currentSiteIndex - 1);
    }
  }
};
function previous() {
  console.log("previous");
  if(currentSiteIndex - 1 > 0){
    window.location.href = sites[currentSiteIndex - 1];
  } else {
    window.location.href = sites[sites.length];
  }
}
function next() {
  console.log("next");
  if(currentSiteIndex + 1 < sites.length){
    window.location.href = sites[currentSiteIndex + 1];
  } else {
    window.location.href = sites[0];
  }
}
