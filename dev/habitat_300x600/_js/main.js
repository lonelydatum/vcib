
import {size} from '../../_common/js/common.js'

const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`


const tri = document.getElementById("tri")
const tri_width = tri.offsetWidth


const COPY = 5


function start(){
	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
		
	tl.add("f2-in", "+=1.5")
	tl.add(f2(), "f2-in")
			
	
	

	tl.add("f4-in", `+=${COPY}`)
	tl.add(f4(), "f4-in")
	
	
	
	
	

	

	tl.add("f5-in", "-=.1")
	tl.add(f5(), "f5-in")
	
	// tl.gotoAndPlay("f4-in")

	// return
		

	
	tl.add("end-in", "+=1")
	tl.add(end(), "end-in")
	
	
	
	
	


}

function f2(){
	const tl = new TimelineMax()	
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", .5, {x:-(w)}, 0)	
	tl.from(".frame2", .5, {x:wPlus}, 0)
	tl.from([".logo", ".plus"], .6, {x:wPlus}, 0)

	tl.add("out", "+=2")
	tl.to([".logo", ".plus"], .6, {opacity:0}, "out")
	tl.to(".frame2 .tri_1", .5, {x:-130}, "out")
	// tl.from(".frame2 .tri_2", .5, {x:"+=130"}, "out")
	tl.to( ".photo", 3, {opacity:0}, "out" )
	tl.from( ".photo_blur", .5, {opacity:0}, "out" )

	tl.add(stag(["t3_a", "t3_b", "t3_c", "t3_d", "t3_e", "t3_f"], .3, .3), 3.3)

	// tl.from(".t3", .3, {opacity:0}, 3.3)
	return tl
}


function f4(){
	const tl = new TimelineMax()	
	tl.set(".frame4", {opacity:1})
	tl.to(".frame2", 1.5, {x:-430}, "f4-in") 	
	tl.to(".frame4", .5, {x:0}, "f4-in")
	tl.add(stag(["t4_a", "t4_b", "t4_c", "t4_d"]))

	tl.from(".frame4 .line", 1, {height:0}, "+=.8") 

	return tl
}


function f5(){
	const tl = new TimelineMax()	
	tl.set(".frame5", {opacity:1})
	tl.to(".frame4", .5, {x:wMinus}, 0)	
	tl.to(".frame5", .5, {x:-0}, 0) 
	

	tl.from(".frame5 .line", .5, {height:0}, "-=.3") 

	tl.from(".frame5 .t5_a", .3, {opacity:0}, "+=.2") 
	tl.from(".frame5 .t5_b", .3, {opacity:0}, "+=.3") 

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
	tl.to(".frame5", .5, {x:wMinus}, "end-in")	
	tl.to(".frame6", .5, {x:-0}, "end-in")	
	tl.from(".end_txt", .3, {opacity:0}, "+=.3")
	tl.from(".end_cta", .3, {opacity:0}, "+=.3")
	tl.from(".end_tag", .5, {opacity:0}, "+=.5")
	return tl
}

start()


module.exports = {};

