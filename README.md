# Progress Steps

## Description
The following project has 4 circles, a line-bar(1) that lays behind the circles, a line-bar(2) with no width and two buttons that defines the width of the line-bar(2).     
The "next" button increases the width of line-bar(2) and the "previous" button decreases it accordignally.     
Buttons disables if the line-bar(2) is at the start (disables "previous") or at the end (disables "next").     
According to the width of the bar, circles change their border color.   

## Guidance
### HTML
Make one main div that everything is in it (circles, lines-bars, buttons) inside that a div that contains the circles and the lines-bars

### CSS
Customize the box with circles    
Customize the before box with circle that is going to be the line-bar(1)      
Customize the line-bar(2) that will positioned above the line-bar(1) but with zero-width      
Customize the circles (active and not)      
Customize the button(disabled and not)       

### Javascript
Make a click event on "next" button that increases an active-indicator and check not to exceed the numbers of circle  
Make a click event on "previous" button that decreases an active-indicator and check not to go below 1  
In any of two events that occurs, needs to set active the circles from the active one and below 
Expand the width of line-bar(2) 
Disable the button that needs according to active number (disable "previous" if active is 1, disable "next" button if active number is the last circle

## Techniques that used
### CSS
```justify-content:space-between;```  
for even space
```
top:50%;
transform:translateY(-50%);
```  
centering to the Y-axis 
  
```z-index:-1;```  
display under the other elements  
  
  
```order-radius:50%;```   
make a rectaglura shape to circle  
  
  
```border-radius:10px;```   
rounded corners  
  
  
```.btn:active{transform:scale(0.8);```  
make it smaller when you press it

### Javascript
```element.addEventListener("click",function(){ -- commands -- }```  
```circles.forEach(function(circle,index){ --  commands -- }```    
```element.classList.add("class");```  
adds a class to an element  
```element.style.width = number+"%"```  
sets the width of en element in % value

