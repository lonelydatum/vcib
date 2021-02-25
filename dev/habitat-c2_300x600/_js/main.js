
import {size} from '../../_common/js/common.js'

const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`


const tri = document.getElementById("tri")
const tri_width = tri.offsetWidth
console.log(tri_width);

const COPY = 3.5
const LINE = 2000

function start(){
	const startTime = new Date().getTime()
	const tl = new TimelineMax({onComplete:()=>{
		const endTime = new Date().getTime()
		console.log(endTime-startTime);
	}})
	
	
	tl.set(".frame1", {opacity:1})

	// return



	tl.from(".t1", .4, {x:"+=300"}, 0)
		
	tl.add("f2-in", "+=1.3")
	tl.add(f2(), "f2-in")
			
	
	

	tl.add("f3a-in", `+=${COPY}`)
	
	tl.add(f3a(), "f3a-in")
	tl.add(f3b())
	
	
	
	
	

		

	
	tl.add("end-in", "+=.5")
	tl.add(end(), "end-in")
	
	
	
	
	// tl.gotoAndPlay("f2-in")

	// return
	
	


}




function f2(){
	const tl = new TimelineMax()	
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", .4, {x:-(w)}, 0)	
	tl.from(".frame2", .4, {x:wPlus}, 0)
	tl.from([".logo", ".plus"], .6, {x:wPlus}, 0)

	tl.add("out", "+=.7")
	tl.to([".logo", ".plus"], .3, {opacity:0, x:`-=${size.w}`}, "out")
	tl.to(".frame2 .tri_1", .3, {x:-130}, "out")
	
	
	tl.to( ".photo", .3, {opacity:0}, "out" )
	tl.from( ".photo_blur", .3, {opacity:0}, "out" )
	tl.from( ".t3_a", .3, {opacity:0}, "+=.1" )
	tl.from( ".t3_b", .3, {opacity:0}, "+=1" )

	
	return tl
}


function f3a(){
	const tl = new TimelineMax()	
	tl.set(".frame3a", {opacity:1})
	tl.to(".frame2", .4, {x:wMinus}, 0) 
	tl.from(".frame2 .tri_2", .4, {x:size.w}, 0)
	tl.from(".frame3a", .4, {x:size.w}, 0)
	tl.add(stag(["t4_a", "t4_b", "t4_c", "t4_d"]))

	tl.from(".frame3a .line", 1, {height:0}, "+=.3") 

	return tl
}


function f3b(){
	const tl = new TimelineMax()	
	tl.set(".frame3b", {opacity:1})
	tl.to(".frame3a", .4, {x:wMinus}, 0)	
	tl.from(".frame3b", .4, {x:size.w}, 0) 
	

	tl.from(".frame3b .line", .5, {height:0}, "-=.3") 
	tl.from(".frame3b .t5_a", .3, {opacity:0}, "+=0") 
	tl.from(".frame3b .t5_b", .3, {opacity:0}, "+=.2") 

	return tl
}




function end(){
	const tl = new TimelineMax()
	tl.set(".frameEnd", {opacity:1})
	tl.to(".frame3b", .4, {x:wMinus}, "end-in")	
	tl.to(".frameEnd", .4, {x:-0}, "end-in")	

	tl.from(".end_txt", .3, {opacity:0}, "+=.2")
	tl.from(".end_cta", .3, {opacity:0}, "+=.1")
	tl.from(".end_logo", .3, {opacity:0}, "+=.1")	
	tl.from(".end_tag", .3, {opacity:0}, "+=.1")
	return tl
}

start()


function stag(list, time=.01, delay=.2){
	const tl = new TimelineMax()

	list.map(abcd=>{
		console.log(abcd);
		tl.from(`.${abcd}`, time, {opacity:0}, `+=${delay}`)
	})

	return tl
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
