const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut

const read = {
	habitat: 3.5,
	csi: 2.8,
	forum: 3.4
}


const {w, h} = size
const wPlus = `+=${w}`
const wMinus = `-=${w}`



const tri = document.getElementById("tri")
const tri_width = tri.offsetWidth
const tri_height = tri.offsetHeight

const TIME_FRAME_SLIDE = Math.min(size.w/750, .6)

console.log(wPlus);


function init(type){
	const startTime = new Date().getTime()
	const tl = new TimelineMax({onComplete:()=>{
		const endTime = new Date().getTime()
		// console.log(endTime-startTime);
	}})

	tl.set(".frameEnd", {x:w})

	tl.set(".frame1", {opacity:1})

	tl.from(".t1", TIME_FRAME_SLIDE, {x: w}, 0)
		
	tl.add("f2-in", "+=1.3")

	return {tl, read:read[type]}
}


function f2(){
	const tl = new TimelineMax()	
	tl.set(".frame2", {opacity:1})
	tl.to(".frame1", TIME_FRAME_SLIDE, {x:-(w)}, 0)	
	tl.from(".frame2", TIME_FRAME_SLIDE, {x:wPlus}, 0)
	tl.from([".f2_logo", ".f2_plus"], .6, {x:wPlus}, 0)

	tl.add("out", "+=.7")
	tl.to([".f2_logo", ".f2_plus"], .3, {opacity:0, x:`-=${size.w}`}, "out")
	tl.to(".frame2 .tri_1", .3, {x:-tri_width}, "out")
	
	
	tl.to( ".photo", .3, {opacity:0}, "out" )
	tl.from( ".photo_blur", .3, {opacity:0}, "out" )
	tl.from( ".f2_blurb", .3, {opacity:0}, "+=.1" )
	tl.from( ".f2_url", .3, {opacity:0}, "+=1" )

	
	return tl
}


function f3a(list=["f3a_1", "f3a_2", "f3a_3", "f3a_4"]){
	console.log(list);
	const tl = new TimelineMax()	
	tl.set(".frame3a", {opacity:1})
	tl.to(".frame2", TIME_FRAME_SLIDE, {x:wMinus}, 0) 
	tl.from(".frame3a", TIME_FRAME_SLIDE, {x:size.w}, 0)
	tl.add(stag(["f3a_1", "f3a_2", "f3a_3", "f3a_4"]))

	tl.from(".frame3a .line", 1, {height:0}, "+=.2") 

	return tl
}


function f3b(){
	const tl = new TimelineMax()	
	tl.set(".frame3b", {opacity:1})
	tl.to(".frame3a", TIME_FRAME_SLIDE, {x:wMinus}, 0)	
	tl.from(".frame3b", TIME_FRAME_SLIDE, {x:size.w}, 0) 
	// tl.from(".frame3a .line", TIME_FRAME_SLIDE, {opacity:0}, 0) 
	

	tl.from(".frame3b .line", .5, {height:0}, "-=.3") 
	tl.from(".frame3b .f3b_1", .3, {opacity:0}, "+=0") 
	tl.from(".frame3b .f3b_2", .3, {opacity:0}, "+=.2") 

	return tl
}




function end(){
	const tl = new TimelineMax()
	tl.set(".frameEnd", {opacity:1})
	tl.to(".frame3b", TIME_FRAME_SLIDE, {x:wMinus}, "end-in")	
	tl.to(".frameEnd", TIME_FRAME_SLIDE, {x:-0}, "end-in")	

	tl.from(".end_txt", .3, {opacity:0}, "+=.2")
	tl.from([".end_cta", ".end_logo", ".end_tag"], .3, {opacity:0}, "+=.5")

	// tl.from(".end_cta", .3, {opacity:0}, "+=.1")
	// tl.from(".end_logo", .3, {opacity:0}, "+=.1")	
	// tl.from(".end_tag", .3, {opacity:0}, "+=.1")

	return tl

}




function stag(list, time=.01, delay=.2){
	const tl = new TimelineMax()

	list.map(abcd=>{
		
		tl.from(`.${abcd}`, time, {opacity:0}, `+=${delay}`)
	})

	return tl
}



export {size, read, f2, f3a, f3b, end, init, stag}