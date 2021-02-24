(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

exports.size = size;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var w = _commonJsCommonJs.size.w;
var h = _commonJsCommonJs.size.h;

var wPlus = "+=" + w;
var wMinus = "-=" + w;

var tri = document.getElementById("tri");
var tri_width = tri.offsetWidth;
console.log(tri_width);

var COPY = 4;
var LINE = 2000;

function start() {
	var startTime = new Date().getTime();
	var tl = new TimelineMax({ onComplete: function onComplete() {
			var endTime = new Date().getTime();
			console.log(endTime - startTime);
		} });

	tl.set(".frame1", { opacity: 1 });

	// return

	tl.from(".t1", .4, { x: "+=300" }, 0);

	tl.add("f2-in", "+=1.4");
	tl.add(f2(), "f2-in");

	tl.add("f3-in", "+=" + COPY);

	tl.add(f3a(), "f3-in");
	tl.add(f3b());

	tl.add("end-in", "+=1");
	tl.add(end(), "end-in");

	// tl.gotoAndPlay("f2-in")

	// return
}

function f2() {
	var tl = new TimelineMax();
	tl.set(".frame2", { opacity: 1 });
	tl.to(".frame1", .4, { x: -w }, 0);
	tl.from(".frame2", .4, { x: wPlus }, 0);
	tl.from([".logo", ".plus"], .6, { x: wPlus }, 0);

	tl.add("out", "+=.9");
	tl.to([".logo", ".plus"], .6, { opacity: 0, x: "-=" + _commonJsCommonJs.size.w }, "out");
	tl.to(".frame2 .tri_1", .5, { x: -130 }, "out");
	tl.from(".frame2 .tri_2", .5, { x: _commonJsCommonJs.size.w }, "out");

	tl.to(".photo", .3, { opacity: 0 }, "out");
	tl.from(".photo_blur", .5, { opacity: 0 }, "out");
	tl.from(".t3", .5, { opacity: 0 }, "+=.1");

	return tl;
}

function f3a() {
	var tl = new TimelineMax();
	tl.set(".frame3a", { opacity: 1 });
	tl.to(".frame2", .4, { x: wMinus }, 0);
	tl.from(".frame3a", .4, { x: _commonJsCommonJs.size.w }, 0);
	tl.add(stag(["t4_a", "t4_b", "t4_c", "t4_d"]));

	tl.from(".frame3a .line", 1, { height: 0 }, "+=.3");

	return tl;
}

function f3b() {
	var tl = new TimelineMax();
	tl.set(".frame3b", { opacity: 1 });
	tl.to(".frame3a", .4, { x: wMinus }, 0);
	tl.from(".frame3b", .4, { x: _commonJsCommonJs.size.w }, 0);

	tl.from(".frame3b .line", .5, { height: 0 }, "-=.3");
	tl.from(".frame3b .t5_a", .3, { opacity: 0 }, "+=0");
	tl.from(".frame3b .t5_b", .3, { opacity: 0 }, "+=.2");

	return tl;
}

function end() {
	var tl = new TimelineMax();
	tl.set(".frameEnd", { opacity: 1 });
	tl.to(".frame3", .4, { x: wMinus }, "end-in");
	tl.to(".frameEnd", .4, { x: -0 }, "end-in");

	tl.from(".end_txt", .3, { opacity: 0 }, "+=.3");
	tl.from(".end_cta", .3, { opacity: 0 }, "+=.3");
	tl.from(".end_logo", .3, { opacity: 0 }, "+=.3");
	tl.from(".end_tag", .5, { opacity: 0 }, "+=.5");
	return tl;
}

start();

function stag(list) {
	var time = arguments.length <= 1 || arguments[1] === undefined ? .01 : arguments[1];
	var delay = arguments.length <= 2 || arguments[2] === undefined ? .2 : arguments[2];

	var tl = new TimelineMax();

	list.map(function (abcd) {
		console.log(abcd);
		tl.from("." + abcd, time, { opacity: 0 }, "+=" + delay);
	});

	return tl;
}

module.exports = {};

// function f3(){
// 	const tl = new TimelineMax()	
// 	tl.set(".frame3", {opacity:1})
// 	tl.to(".frame2", .5, {x:`${-size.w-tri_width}`}, "f4-in") 	
// 	tl.to(".frame3", .5, {x:0}, "f4-in")
// 	tl.add(stag(["tag_1", "tag_2", "tag_3"]))

// 	const tl_line1 = new TimelineMax()	
// 	tl_line1.from(".north", size.w/LINE, {scaleX:0})
// 	tl_line1.from(".east", size.h/LINE, {scaleY:0})

// 	const tl_line2 = new TimelineMax()	
// 	tl_line2.from(".west", size.h/LINE, {scaleY:0})
// 	tl_line2.from(".south", size.w/LINE, {scaleX:0})

// 	tl.add("lines", "+=.2")
// 	tl.add(tl_line1, "lines")
// 	tl.add(tl_line2, "lines")

// 	tl.add(stag(["tag_4", "tag_5"]), "+=0")

// 	return tl
// }

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
