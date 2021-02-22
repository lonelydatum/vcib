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

var COPY = 5;
var LINE = 1000;

function start() {
	var startTime = new Date().getTime();
	var tl = new TimelineMax({ onComplete: function onComplete() {
			var endTime = new Date().getTime();
			console.log(endTime - startTime);
		} });
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .4, { x: "+=300" }, 0);

	tl.add("f2-in", "+=1.1");
	tl.add(f2(), "f2-in");

	tl.add("f4-in", "+=" + COPY);
	tl.add(f4(), "f4-in");

	tl.add("end-in", "+=1");
	tl.add(end(), "end-in");
}

function f2() {
	var tl = new TimelineMax();
	tl.set(".frame2", { opacity: 1 });
	tl.to(".frame1", .5, { x: -w }, 0);
	tl.from(".frame2", .5, { x: wPlus }, 0);
	tl.from([".logo", ".plus"], .6, { x: wPlus }, 0);

	tl.add("out", "+=1.3");
	tl.to([".logo", ".plus"], .6, { opacity: 0, x: "-=" + _commonJsCommonJs.size.w }, "out");
	tl.to(".frame2 .tri_1", .5, { x: -130 }, "out");

	tl.to(".photo", .3, { opacity: 0 }, "out");
	tl.from(".photo_blur", .5, { opacity: 0 }, "out");
	tl.from(".t3", .5, { opacity: 0 }, "+=.1");

	// tl.add(stag(["t3_a", "t3_b", "t3_c", "t3_d", "t3_e", "t3_f"], .3, .3), 3.3)

	// tl.from(".t3", .3, {opacity:0}, 3.3)
	return tl;
}

function f4() {
	var tl = new TimelineMax();
	tl.set(".frame4", { opacity: 1 });
	tl.to(".frame2", .5, { x: -430 }, "f4-in");
	tl.to(".frame4", .5, { x: 0 }, "f4-in");
	tl.add(stag(["tag_1", "tag_2", "tag_3"]));

	var tl_line1 = new TimelineMax();
	tl_line1.from(".north", _commonJsCommonJs.size.w / LINE, { scaleX: 0 });
	tl_line1.from(".east", _commonJsCommonJs.size.h / LINE, { scaleY: 0 });

	var tl_line2 = new TimelineMax();
	tl_line2.from(".west", _commonJsCommonJs.size.h / LINE, { scaleY: 0 });
	tl_line2.from(".south", _commonJsCommonJs.size.w / LINE, { scaleX: 0 });
	// tl_line1.from(".east", 1, {height:0})
	// tl.from([".east"], 1, {height:0}, 1)

	tl.add("lines", "+=.2");
	tl.add(tl_line1, "lines");
	tl.add(tl_line2, "lines");

	tl.add(stag(["tag_4", "tag_5"]), "+=0");

	return tl;
}

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

function end() {
	var tl = new TimelineMax();
	tl.set(".frame6", { opacity: 1 });
	tl.to(".frame4", .5, { x: wMinus }, "end-in");
	tl.to(".frame6", .5, { x: -0 }, "end-in");
	tl.from(".end_cta", .3, { opacity: 0 }, "+=.3");
	tl.from(".end_logo", .3, { opacity: 0 }, "+=.3");

	// tl.from(".end_txt", .3, {opacity:0}, "+=.3")

	tl.from(".end_tag", .5, { opacity: 0 }, "+=.5");
	return tl;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
