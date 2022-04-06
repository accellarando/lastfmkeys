function next(){
	document.getElementsByClassName("player-bar-btn--next")[0].click();
}
function prev(){
	document.getElementsByClassName("player-bar-btn--previous")[0].click();
}
function pause(){
	var button = document.getElementsByClassName("player-bar-btn--pause");
	if(button.length==0)
		button = document.getElementsByClassName("player-bar-btn--play");
	button[0].click();
}

document.addEventListener('keyup', function(e){
	if(e.key=="N")
		next();
	if(e.key=="P")
		prev();
	if(e.key==" "){
		e.preventDefault();
		pause();
	}
});

//Prevent space from scrolling
document.addEventListener('keydown', function(e){
	if(e.key==" ")
		e.preventDefault();
});
