function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);



var creative = {};

creative.init = function() {
  console.log('dynamicDataAvailable');
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler
      );
    }
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      creative.enablerInitHandler
    );
  }
};

creative.setupDOMElements = function() {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.backgroundImage = document.getElementById( "pn-frame1-bg" );
  creative.domElements.casino_img = document.getElementById("pn-casino-image");
};



creative.enablerInitHandler = function(event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener( "click", creative.exitClickHandler );

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler );
  }
};

creative.exitClickHandler = function(event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function(event) {  
  creative.domElements.casino_img.src = creative.dynamicData.Casino_Frame_Image.Url;
  creative.showAd();
};

// window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };




function flicker(el){
  const tl = new TimelineMax({repeat:3})
  tl.to(el, .035, {opacity:.5})
  tl.to(el, .03, {opacity:1})

  // const tl2 = new TimelineMax({repeat:1, repeatDelay:2})
  // tl2.add(tl)
  return tl
}



export {flicker, creative}


