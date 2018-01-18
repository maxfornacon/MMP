document.addEventListener("DOMContentLoaded", function() {
  sites = ["/index.html", "/kryptowaehrung.html", "/coinhive.html", "/funktionen.html", "/probleme.html"];
  currentSiteIndex = 0;
  Link = "";

  var lastElementClicked;
  var PrevLink = document.querySelector('a.prev');
  var NextLink = document.querySelector('a.next');

  pathname = window.location.pathname;
  for(var i = 0; i <= sites.length ; i++){
    if(pathname == sites[i]){
      currentSiteIndex = i;
    }
  }

  if(currentSiteIndex + 1 < sites.length){
    NextLink.href = sites[currentSiteIndex + 1];
  } else {
    NextLink.href = sites[0];
  }

  if (currentSiteIndex - 1 < 0) {
    PrevLink.href = sites[sites.length - 1];
  } else {
    PrevLink.href = sites[currentSiteIndex - 1];
  }

  linkLeft = function() {
    Link = "left";
  };

  document.body.onkeyup = function(e){
    if(e.keyCode == 37){
      PrevLink.click();
    }
    if(e.keyCode == 39){
      NextLink.click();
    }
  };

  Barba.Pjax.init();
  Barba.Prefetch.init();

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  var MovePage = Barba.BaseTransition.extend({
    start: function() {
      this.originalThumb = lastElementClicked;

      Promise
        .all([this.newContainerLoading, this.scrollTop()])
        .then(this.movePages.bind(this));
    },

    scrollTop: function() {
      var deferred = Barba.Utils.deferred();
      var obj = { y: window.pageYOffset };

      TweenLite.to(obj, 0.4, {
        y: 0,
        onUpdate: function() {
          if (obj.y === 0) {
            deferred.resolve();
          }

          window.scroll(0, obj.y);
        },
        onComplete: function() {
          deferred.resolve();
        }
      });

      return deferred.promise;
    },

    movePages: function() {
      var _this = this;
      var goingForward = true;
      this.updateLinks();
      console.log(this.oldContainer.dataset.prev);
      if ("/" + this.getNewPageFile() === this.oldContainer.dataset.prev) {
        goingForward = false;
      }
      console.log(this.getNewPageFile());
      TweenLite.set(this.newContainer, {
        visibility: 'visible',
        xPercent: goingForward ? 100 : -100,
        position: 'fixed',
        left: 0,
        top: "60px",
        right: 0
      });

      TweenLite.to(this.oldContainer, 0.4, { xPercent: goingForward ? -100 : 100 });
      TweenLite.to(this.newContainer, 0.4, { xPercent: 0, onComplete: function() {
        TweenLite.set(_this.newContainer, { clearProps: 'all' });
        _this.done();
      }});
    },

    updateLinks: function() {
      pathname = window.location.pathname;
      for(var i = 0; i <= sites.length ; i++){
        if(pathname == sites[i]){
          currentSiteIndex = i;
        }
      }

      if ( Link == "left" ){
        this.oldContainer.dataset.prev = sites[currentSiteIndex];
        Link = "";
      }

      if(currentSiteIndex + 1 < sites.length){
        this.newContainer.dataset.next = sites[currentSiteIndex + 1];

      } else {
        this.newContainer.dataset.next = sites[0];
      }

      if (currentSiteIndex - 1 < 0) {
        this.newContainer.dataset.prev = sites[sites.length - 1];
      } else {
        this.newContainer.dataset.prev = sites[currentSiteIndex - 1];
      }

      PrevLink.href = this.newContainer.dataset.prev;
      NextLink.href = this.newContainer.dataset.next;
    },

    getNewPageFile: function() {
      return Barba.HistoryManager.currentStatus().url.split('/').pop();
    }
  });

  Barba.Pjax.getTransition = function() {
    return MovePage;
  };
});
