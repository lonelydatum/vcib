
import {size} from '../../_common/js/common.js'

const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`


const tri = document.getElementById("tri")
const tri_width = tri.offsetWidth


const COPY = 5
const LINE = 2000

function start(){
	const startTime = new Date().getTime()
	const tl = new TimelineMax({onComplete:()=>{
		const endTime = new Date().getTime()
		console.log(endTime-startTime);
	}})
	tl.set(".frame1", {opacity:1})

	tl.from(".t1", .4, {x:"+=300"}, 0)
		
	tl.add("f2-in", "+=1.4")
	tl.add(f2(), "f2-in")
			
	
	

	tl.add("f4-in", `+=${COPY}`)
	tl.add(f4(), "f4-in")
	
	
	
	
	
	// tl.gotoAndPlay("f4-in")

	// return
	

	// tl.add("f5-in", "+=.6")
	// tl.add(f5(), "f5-in")
	

		

	
	tl.add("end-in", "+=1")
	tl.add(end(), "end-in")
	
	
	
	
	


}

function f2(){
	const tl = new TimelineMax()	
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", .5, {x:-(w)}, 0)	
	tl.from(".frame2", .5, {x:wPlus}, 0)
	tl.from([".logo", ".plus"], .6, {x:wPlus}, 0)

	tl.add("out", "+=1.3")
	tl.to([".logo", ".plus"], .6, {opacity:0, x:`-=${size.w}`}, "out")
	tl.to(".frame2 .tri_1", .5, {x:-130}, "out")
	
	tl.to( ".photo", .3, {opacity:0}, "out" )
	tl.from( ".photo_blur", .5, {opacity:0}, "out" )
	tl.from( ".t3", .5, {opacity:0}, "+=.1" )

	// tl.add(stag(["t3_a", "t3_b", "t3_c", "t3_d", "t3_e", "t3_f"], .3, .3), 3.3)

	// tl.from(".t3", .3, {opacity:0}, 3.3)
	return tl
}


function f4(){
	const tl = new TimelineMax()	
	tl.set(".frame4", {opacity:1})
	tl.to(".frame2", .5, {x:-430}, "f4-in") 	
	tl.to(".frame4", .5, {x:0}, "f4-in")
	tl.add(stag(["tag_1", "tag_2", "tag_3"]))

	
	const tl_line1 = new TimelineMax()	
	tl_line1.from(".north", size.w/LINE, {scaleX:0}) 
	tl_line1.from(".east", size.h/LINE, {scaleY:0}) 

	const tl_line2 = new TimelineMax()	
	tl_line2.from(".west", size.h/LINE, {scaleY:0}) 
	tl_line2.from(".south", size.w/LINE, {scaleX:0}) 
	// tl_line1.from(".east", 1, {height:0}) 
	// tl.from([".east"], 1, {height:0}, 1) 

	tl.add("lines", "+=.2")
	tl.add(tl_line1, "lines")
	tl.add(tl_line2, "lines")

	tl.add(stag(["tag_4", "tag_5"]), "+=0")

	return tl
}


function stag(list, time=.01, delay=.2){
	const tl = new TimelineMax()

	list.map(abcd=>{
		console.log(abcd);
		tl.from(`.${abcd}`, time, {opacity:0}, `+=${delay}`)
	})

	return tl
}

function end(){
	const tl = new TimelineMax()
	tl.set(".frame6", {opacity:1})
	tl.to(".frame4", .5, {x:wMinus}, "end-in")	
	tl.to(".frame6", .5, {x:-0}, "end-in")	
	tl.from(".end_cta", .3, {opacity:0}, "+=.3")
	tl.from(".end_logo", .3, {opacity:0}, "+=.3")
	
	// tl.from(".end_txt", .3, {opacity:0}, "+=.3")
	
	tl.from(".end_tag", .5, {opacity:0}, "+=.5")
	return tl
}

start()


module.exports = {};

