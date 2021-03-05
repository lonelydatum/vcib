import {size, init, f2, f3a, f3b, end} from '../../_common/js/common.js'

function start(){
	
	const {tl, read} = init("csi") 
	
	// return
	
	
	tl.add(f2(), "f2-in")
			
	tl.add("f3a-in", `+=${read}`)
	
	tl.add(f3a(), "f3a-in")

	tl.add(f3b())
	
	
	tl.add("end-in", "+=.5")
	tl.add(end(), "end-in")
	
	// tl.gotoAndPlay("end-in")

}

start()



