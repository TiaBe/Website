function switchElemColor(e){ 
	var username = document.getElementById("username"); 
  var color = e.target.getAttribute("data-color"); 
  username.style.color = color; 
} 
 
function initSwitcher(){ 
	var els = document.getElementsByClassName("color-switcher"); 
  for(var i=0; i<els.length; i++) 
  { 
  	els[i].addEventListener("click", switchElemColor, false); 
  } 
} 
 
initSwitcher(); 