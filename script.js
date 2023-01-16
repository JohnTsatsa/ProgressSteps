
const progress=document.getElementById("progress")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const circles=document.querySelectorAll(".circle")


	// 	initialize active
	
/* 	if "next" button pressed, increase active by 1
	if active exceeds the number of circles, keep active same as the numbers of circle
	execute "update" function */

active=1

next.addEventListener("click",function(){
	active++
	
	if (active>circles.length){
			active=circles.length
	}	
	update()
})

/* 	if "previous" button pressed, decrease active by 1
	if active gets lower than 1, keep active 1
	execute "update" function */


prev.addEventListener("click",function(){
	active--
	
	if (active<1){
		active=1
	}	
	update()
})

/* 	for each circle give its index which is this case is going to be 1, 2, 3, 4
	compare each index number with the number of active
	if active number is bigger of the number index give to that index circle the class "active"
	if is smaller remove the class "active"  */

	//example: if active is 3 is going to add the class "active" to circles 1, 2 and 3.
function update(){
	circles.forEach(function(circle,index){
		if(index < active){
			circle.classList.add("active")
		} else {
			circle.classList.remove("active")
		}
	})
	
/* 	we get the actives elements.
	we need to put the width of the progress bar in %, according to the number of active elements
	the equation gives the result 0, 33.3, 66.6 and 100 in each scenario  */
const actives=document.querySelectorAll(".active")
progress.style.width=((actives.length-1)/(circles.length-1)*100)+"%"

/* 	give a class to buttons in order to disable them or not
	if the active is the circle 1, diable the "previous" button
	if the active is the circle 4, disable the "next" button 
	in every other scenario I want them both enabled */
		
if(active===1){
	prev.disabled=true
	} else if 
		(active===circles.length){
	next.disabled=true
	} else {
	prev.disabled=false
	next.disabled=false
	}
}

