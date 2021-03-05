(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsDcJs = require('../../_common/js/dc.js');

// creative.showAd = ()=>{
//     start()

// }

// creative.dynamicDataAvailable = function() {
//   // NOTE: Here starts the pasted section from Studio.
//   // Dynamic Content variables and sample values
//   // https://www.google.com/doubleclick/studio/#assets:accountId=39901982&folderId=61990835

//   	Enabler.setProfileId(10565190);
//   	var devDynamicContent = {};

//   	devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600 = [{}];
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0]._id = 0;
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Unique_ID = 489;
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Reporting_Label = "bclc_casinos_2020_160x600_cascades";
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Casino_Frame_Image = {};
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Casino_Frame_Image.Type = "file";
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Casino_Frame_Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/81368512/dirty/end-Play-at-Cascades-Casino.png";
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Exit_URL = {};
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Exit_URL.Url = "https://www.casinosbc.com/";
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Default = false;
//     devDynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0].Active = true;

//   	Enabler.setDevDynamicContent(devDynamicContent);

//   	creative.dynamicData = dynamicContent.BCLC_Casinos__Phase_2_2020__Dynamic_Feed_160x600[0]; 
//   	creative.dynamicExitUrl = creative.dynamicData.Exit_URL.Url;

// };

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.to(".t1", .2, { opacity: 1 }, "+=.5");
	tl.add((0, _commonJsDcJs.flicker)(".t1"), "+=.5");
	tl.to(".t1", .2, { opacity: 0 }, "+=2");

	// tl.from([".t2", ".bg2"], .5, {opacity:0})	
	// tl.add( flicker(".t2"), "+=.8" )
	// tl.to([".t2"], .3, {opacity:0}, "+=3.5")
	tl.add("f2", "+=.1");
	tl.to("#pn-casino-image", .3, { opacity: 1 }, "f2");
	tl.from(".bg2", .3, { opacity: 0 }, "f2");

	tl.to("#pn-casino-image", .3, { opacity: 0 }, "+=2.1");

	tl.add("end");

	tl.from(".legal", .3, { opacity: 0 }, "end");
	tl.to(".logo", .3, { y: -78 }, "end");
	tl.from(".footer", .3, { opacity: 0 }, "end");

	tl.from(".txt_end", .3, { opacity: 0 }, "+=.3");

	tl.from(".cta", .3, { opacity: 0, y: "+=20" }, "+=.5");
}

start();

module.exports = {};

},{"../../_common/js/dc.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

var creative = {};

creative.init = function () {
  void 0;
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, creative.enablerInitHandler);
    }
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, creative.enablerInitHandler);
  }
};

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.backgroundImage = document.getElementById("pn-frame1-bg");
  creative.domElements.casino_img = document.getElementById("pn-casino-image");
};

creative.enablerInitHandler = function (event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener("click", creative.exitClickHandler);

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};

creative.exitClickHandler = function (event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function (event) {
  creative.domElements.casino_img.src = creative.dynamicData.Casino_Frame_Image.Url;
  creative.showAd();
};

// window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };

function flicker(el) {
  var tl = new TimelineMax({ repeat: 3 });
  tl.to(el, .035, { opacity: .5 });
  tl.to(el, .03, { opacity: 1 });

  // const tl2 = new TimelineMax({repeat:1, repeatDelay:2})
  // tl2.add(tl)
  return tl;
}

exports.flicker = flicker;
exports.creative = creative;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
