$(document).ready(function(){
	var height = $(window).outerHeight();
	var element = $('#first-section-piture');
	var element_height = element.outerHeight();
	resize(element_height,height);

	$(window).resize(function(){
		height = $(window).outerHeight();
		element_height= element.outerHeight();
		resize(element_height,height);
	});
	
	function resize(element_height , height){
		element.css({"margin-top" : (height/2) - (element_height / 1.5) + "px"});
	}
});
