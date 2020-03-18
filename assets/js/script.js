//get the button:
mybutton=document.getElementById("myBtn");

//when the user scrolls down 20px from the top of the document,show the button
window.onscroll=function() {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop >20 ||document.documentElement.scrollTop >20){
		mybutton.style.display="block";
	} else{
		mybutton.style.display="none";
	}
}

//When the user clicks on the button,scroll to the top of the document
function topFunction(){
	document.body.scrollTop = 0;//for Safari
	document.documentElement.scrollTop=0;//For chrome,Firefox,IE and opera
}


