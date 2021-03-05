(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var read = {
	habitat: 3.5,
	csi: 3,
	forum: 3.8
};

var w = size.w;
var h = size.h;

var wPlus = "+=" + w;
var wMinus = "-=" + w;

var tri = document.getElementById("tri");
var tri_width = tri.offsetWidth;
var tri_height = tri.offsetHeight;

var TIME_FRAME_SLIDE = Math.min(size.w / 750, .6);

console.log(wPlus);

function init(type) {
	var startTime = new Date().getTime();
	var tl = new TimelineMax({ onComplete: function onComplete() {
			var endTime = new Date().getTime();
			// console.log(endTime-startTime);
		} });

	tl.set(".frameEnd", { x: w });

	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", TIME_FRAME_SLIDE, { x: w }, 0);

	tl.add("f2-in", "+=1.3");

	return { tl: tl, read: read[type] };
}

function f2() {
	var tl = new TimelineMax();
	tl.set(".frame2", { opacity: 1 });
	tl.to(".frame1", TIME_FRAME_SLIDE, { x: -w }, 0);
	tl.from(".frame2", TIME_FRAME_SLIDE, { x: wPlus }, 0);
	tl.from([".f2_logo", ".f2_plus"], .6, { x: wPlus }, 0);

	tl.add("out", "+=.7");
	tl.to([".f2_logo", ".f2_plus"], .3, { opacity: 0, x: "-=" + size.w }, "out");
	tl.to(".frame2 .tri_1", .3, { x: -tri_width }, "out");

	tl.to(".photo", .3, { opacity: 0 }, "out");
	tl.from(".photo_blur", .3, { opacity: 0 }, "out");
	tl.from(".f2_blurb", .3, { opacity: 0 }, "+=.1");
	tl.from(".f2_url", .3, { opacity: 0 }, "+=1");

	return tl;
}

function f3a() {
	var list = arguments.length <= 0 || arguments[0] === undefined ? ["f3a_1", "f3a_2", "f3a_3", "f3a_4"] : arguments[0];

	console.log(list);
	var tl = new TimelineMax();
	tl.set(".frame3a", { opacity: 1 });
	tl.to(".frame2", TIME_FRAME_SLIDE, { x: wMinus }, 0);
	tl.from(".frame3a", TIME_FRAME_SLIDE, { x: size.w }, 0);
	tl.add(stag(["f3a_1", "f3a_2", "f3a_3", "f3a_4"]));

	tl.from(".frame3a .line", 1, { height: 0 }, "+=.2");

	return tl;
}

function f3b() {
	var tl = new TimelineMax();
	tl.set(".frame3b", { opacity: 1 });
	tl.to(".frame3a", TIME_FRAME_SLIDE, { x: wMinus }, 0);
	tl.from(".frame3b", TIME_FRAME_SLIDE, { x: size.w }, 0);
	// tl.from(".frame3a .line", TIME_FRAME_SLIDE, {opacity:0}, 0)

	tl.from(".frame3b .line", .5, { height: 0 }, "-=.3");
	tl.from(".frame3b .f3b_1", .3, { opacity: 0 }, "+=0");
	tl.from(".frame3b .f3b_2", .3, { opacity: 0 }, "+=.2");

	return tl;
}

function end() {
	var tl = new TimelineMax();
	tl.set(".frameEnd", { opacity: 1 });
	tl.to(".frame3b", TIME_FRAME_SLIDE, { x: wMinus }, "end-in");
	tl.to(".frameEnd", TIME_FRAME_SLIDE, { x: -0 }, "end-in");

	tl.from(".end_txt", .3, { opacity: 0 }, "+=.2");
	tl.from([".end_cta", ".end_logo", ".end_tag"], .3, { opacity: 0 }, "+=.5");

	// tl.from(".end_cta", .3, {opacity:0}, "+=.1")
	// tl.from(".end_logo", .3, {opacity:0}, "+=.1")	
	// tl.from(".end_tag", .3, {opacity:0}, "+=.1")

	return tl;
}

function stag(list) {
	var time = arguments.length <= 1 || arguments[1] === undefined ? .01 : arguments[1];
	var delay = arguments.length <= 2 || arguments[2] === undefined ? .2 : arguments[2];

	var tl = new TimelineMax();

	list.map(function (abcd) {

		tl.from("." + abcd, time, { opacity: 0 }, "+=" + delay);
	});

	return tl;
}

exports.size = size;
exports.read = read;
exports.f2 = f2;
exports.f3a = f3a;
exports.f3b = f3b;
exports.end = end;
exports.init = init;
exports.stag = stag;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var w = _commonJsCommonJs.size.w;
var h = _commonJsCommonJs.size.h;

var wPlus = "+=" + w;
var wMinus = "-=" + w;

var TIME_FRAME_SLIDE = .5;

function start() {

	var startTime = new Date().getTime();
	var tl = new TimelineMax({ onComplete: function onComplete() {
			var endTime = new Date().getTime();
			// console.log(endTime-startTime);
		} });

	// return

	tl.set(".frameEnd", { x: w });

	tl.set(".frame2", { opacity: 1 });

	tl.from(".t1", .5, { x: w }, 0);

	tl.add("f2-in", "+=1");
	tl.to(".t1", .4, { x: -241 }, "f2-in");
	tl.to(".big-red", .4, { x: -534 }, "f2-in");
	tl.from([".f2_logo", ".f2_plus"], .4, { opacity: 0, x: "+=100" }, "f2-in");

	tl.add("f3-in", "+=1");
	tl.to([".f2_logo", ".f2_plus"], .4, { opacity: 0, x: "-=100" }, "f3-in");
	tl.to([".t1", ".big-red"], .4, { x: "-=700" }, "f3-in");
	tl.to(".photo", .4, { opacity: 0 }, "f3-in");
	// tl.to(, .4, {x:"-=200"}, "f3-in")

	tl.from(".f2_blurb", .3, { opacity: 0 }, "+=.1");
	tl.from(".f2_url", .3, { opacity: 0 }, "+=1");

	tl.add("f3a-in", "+=2");
	tl.add((0, _commonJsCommonJs.f3a)(["f3a_1", "f3a_2"]), "f3a-in");

	tl.add("f3b-in", "+=.3");
	tl.add((0, _commonJsCommonJs.f3b)(), "f3b-in");

	tl.add((0, _commonJsCommonJs.end)(), "+=1");

	// tl.gotoAndPlay("f3a-in")
}

start();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
