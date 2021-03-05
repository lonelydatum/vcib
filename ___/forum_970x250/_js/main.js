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

	// return

	tl.set(".frameEnd", {x:w})

	tl.set(".frame2", {opacity:1})

	tl.from(".t1", .5, {x: w}, 0)


		
	tl.add("f2-in", "+=1")
	tl.to(".t1", .4, {x:-241}, "f2-in")
	tl.to(".big-red", .4, {x:-534}, "f2-in")
	tl.from([".f2_logo", ".f2_plus"], .4, {opacity:0, x:"+=100"}, "f2-in")


	tl.add("f3-in", "+=1")
	tl.to([".f2_logo", ".f2_plus"], .4, {opacity:0, x:"-=100"}, "f3-in")
	tl.to([".t1", ".big-red"], .4, {x:"-=700"}, "f3-in")
	tl.to(".photo", .4, {opacity:0}, "f3-in")
	// tl.to(, .4, {x:"-=200"}, "f3-in")

	
	tl.from( ".f2_blurb", .3, {opacity:0}, "+=.1" )
	tl.from( ".f2_url", .3, {opacity:0}, "+=1" )

	tl.add("f3a-in", `+=${read.forum}`)
	tl.add(f3a(["f3a_1", "f3a_2"]), "f3a-in")


	tl.add("f3b-in", "+=.3")
	tl.add(f3b(), "f3b-in")

	tl.add(end(), "+=1")

	// tl.gotoAndPlay("f3a-in")

	

	
	

}





start()



