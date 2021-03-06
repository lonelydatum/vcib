import {size, init, f2, f3a, f3b, end, stag} from '../../_common/js/common.js'



const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`

const TIME_FRAME_SLIDE = .5;

function start(){
	

	const startTime = new Date().getTime()
	const tl = new TimelineMax({onComplete:()=>{
		const endTime = new Date().getTime()
		// console.log(endTime-startTime);
	}})

	tl.set([".frameEnd"], {x:w})

	tl.set(".frame2", {opacity:1})

	tl.from(".t1", .5, {x: w}, 0)


		
	tl.add("f2-in", "+=1")
	tl.to(".t1", .4, {x:-185}, "f2-in")
	tl.to(".frame2 .big-red", .4, {x:-400}, "f2-in")
	tl.from([".f2_logo", ".f2_plus"], .4, {opacity:0, x:"+=100"}, "f2-in")


	tl.add("f3-in", "+=1")
	tl.to([".f2_logo", ".f2_plus"], .4, {opacity:0, x:"-=100"}, "f3-in")
	tl.to([".t1", ".frame2 .big-red"], .4, {x:"-=500"}, "f3-in")
	tl.to(".photo", .4, {opacity:0}, "f3-in")
	// tl.to(, .4, {x:"-=200"}, "f3-in")

	tl.from(".f2_blurb", .5, {opacity:0}, "+=.1")

	tl.add("f3a-in", "+=4")
	tl.add(f3a_(), "f3a-in")

	// tl.gotoAndPlay("f3a-in")

	
	// tl.add("f3b-in", "+=1")
	// tl.add(f3b_(), "f3b-in")

	tl.add(end_(), "+=1")

	

	
	
	

}



function f3a_(){
	const x = 728
	const time = .65
	const tl = new TimelineMax()	
	tl.set(".frame3a", {opacity:1})
	tl.set([".frame3a .big-red", ".f3a_1", ".f3a_2"], {x:size.w})
	tl.to(".frame2", time, {x:-x}, 0) 
	tl.to(".frame3a .big-red", time, {x:size.w-x}, 0)
	tl.to( [".f3a_1", ".f3a_2"], time, {x:size.w-x}, 0)
	// tl.add(stag(["f3a_1", "f3a_2"]))

	tl.add("leave", "+=1")
	tl.to(".frame3a .big-red", .3, {x:0}, "leave")
	tl.to([".f3a_1", ".f3a_2"], .3, {opacity:0, x:"-=200"}, "leave")

	tl.add(stag(["f3b_1", "f3b_2"]), "+=.1")

	

	return tl
}




function end_(){
	const tl = new TimelineMax()
	tl.set(".frameEnd", {opacity:1})
	tl.to(".frame3a", .3, {opacity:0}, "end-in")	
	tl.to(".frameEnd", .4, {x:-0})	

	// tl.from(".end_txt", .3, {opacity:0}, "+=.2")
	// tl.from(".end_cta", .3, {opacity:0}, "+=.1")
	// tl.from(".end_logo", .3, {opacity:0}, "+=.1")	
	// tl.from(".end_tag", .3, {opacity:0}, "+=.1")

	tl.from(".end_txt", .3, {opacity:0}, "+=.2")
	tl.from([".end_cta", ".end_logo", ".end_tag"], .3, {opacity:0}, "+=.5")
	
	return tl
}




start()



