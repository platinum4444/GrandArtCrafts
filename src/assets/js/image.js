
$(document).ready(function(){

	$(".zoom").mousemove(function(e){
		zoom(e);

	});

	function zoom(e){

    var offsetX, offsetY;
		var x, y;
		var zoomer = e.currentTarget;
		if(e.offsetX) {
			offsetX = e.offsetX;
		} else {
			offsetX = e.touches[0].pageX;
		}

		if(e.offsetY) {
			offsetY = e.offsetY;

		} else {
			offsetX = e.touches[0].pageX;
		}
		x = offsetX/zoomer.offsetWidth*100;
		y = offsetY/zoomer.offsetHeight*100;
		zoomer.style.backgroundPosition = x+'% '+y+'%';
	}
});
