// Centering first-section-picture

$(document).ready(function(){
	var picture = $('#first-section-piture');
	$(window).resize(function(){
	 	var height = $(window).outerHeight();
		var element_height= picture.outerHeight();
		picture.css({"margin-top" : (height/2) - (element_height / 1.5) + "px"});
	});

	$(window).resize();
});

// Sticky nav

$(window).load(function(){
  $("#mainnav").sticky({ topSpacing: 0 });
});

// $(function() {
//     $('.chart').easyPieChart({
        
//     });
// });

var isPopShowed=false;

$(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop()>1000 && isPopShowed ) {
        $('.chart').easyPieChart({
            lineWidth:15,
            lineCap:'square',
            trackColor:false,
            scaleColor:false,
            barColor:'#fec400',
            animate: 2000
        });
    }
    isPopShowed=true;
});
// Smooth scroll

$(document).ready(function() {

    $(".scroll-links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});


// Selectnav

selectnav('fluid-nav', {
    nested: false,
    label: false
});

selectnav('fixed-nav', {
    nested: false,
    label: false
});


// One Page Navigation

$('#fluid-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

