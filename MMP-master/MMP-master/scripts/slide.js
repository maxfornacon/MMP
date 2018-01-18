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
    }
  }
};
function previous() {
  if(currentSiteIndex > 0){
    window.location.href = sites[currentSiteIndex - 1];
  } else {
    window.location.href = sites[sites.length - 1];
  }
}
function next() {
  if(currentSiteIndex + 1 < sites.length){
    window.location.href = sites[currentSiteIndex + 1];
  } else {
    window.location.href = sites[0];
  }
}
