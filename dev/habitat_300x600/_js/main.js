
import {size} from '../../_common/js/common.js'

const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`


const tri = document.getElementById("tri")
const tri_width = tri.offsetWidth


const COPY = 7


function start(){
	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
		
	tl.add("f2-in", "+=1.5")
	tl.add(f2(), "f2-in")
			
	tl.add("f3-in", "+=.7")
	tl.add(f3(), "f3-in")

	tl.add("f4-in", `+=${COPY}`)
	tl.add(f4(), "f4-in")
	
	
	

	

	

	tl.add("f5-in", "-=.6")
	tl.add(f5(), "f5-in")
	
	
		

	
	tl.add("end-in", "+=1")
	tl.add(end(), "end-in")
	
	
	
	
	// tl.gotoAndPlay("f4-in")


}

function f2(){
	const tl = new TimelineMax()	
	tl.to(".frame1", 1, {x:-(w+tri_width)}, 0)	
	tl.from(".frame2 .photo", .3, {x:wPlus}, 0)
	tl.from([".logo", ".plus"], .6, {x:wPlus}, 0)
	return tl
}

function f3(){
	const tl = new TimelineMax()	
	tl.to(".frame2", .5, {x:wMinus}, 0)	
	tl.from(".frame3 .photo", .5, {x:wPlus}, 0)
	tl.from(".frame3 .t3", .8, {x:wPlus}, 0)
	return tl
}

function f4(){
	const tl = new TimelineMax()	
	
	tl.to(".frame3", .7, {x:wMinus}, "f4-in") 
	tl.to(".frame4", .4, {x:0}, "f4-in")
	tl.add(wdwc())

	tl.from(".frame4 .line", 1, {height:0}, "+=.6") 

	return tl
}


function f5(){
	const tl = new TimelineMax()	
	tl.to(".frame4", .8, {x:wMinus}, 0)	
	tl.to(".frame5", .5, {x:-0}, 0) 
	

	tl.from(".frame5 .line", .5, {height:0}, "-=.3") 

	tl.from(".frame5 .t5_a", .3, {opacity:0}, "+=.4") 
	tl.from(".frame5 .t5_b", .3, {opacity:0}, "+=.3") 

	return tl
}

function wdwc(){
	const tl = new TimelineMax()
	var list = ["a", "b", "c", "d"]

	list.map(abcd=>{
		tl.from(`.t4_${abcd}`, .01, {opacity:0}, "+=.2")
	})

	return tl
}

function end(){
	const tl = new TimelineMax()
	tl.to(".frame5", .5, {x:wMinus}, "end-in")	
	tl.to(".frame6", .5, {x:-0}, "end-in")	
	tl.from(".end_txt", .3, {opacity:0}, "+=.3")
	tl.from(".end_cta", .3, {opacity:0}, "+=.3")
	tl.from(".end_tag", .5, {opacity:0}, "+=.5")
	return tl
}

start()


module.exports = {};

