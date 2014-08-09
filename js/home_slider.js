var activeSlideNo = 1;
var slideNb = 0;
var holder = $('.homeSlides'); 
var slides = $('.homeSlides div');
var bullets = $('.bulletSlider a');
var target = slides.eq(0);



function signum(x){
	return x<0 ? -1 : 1;
}
function abs(x){
	return x<0 ? -x : x;
}

function slide(how_many){
	if  (holder.is(':animated')) return; //do not animate it an animation is already in motion
	if ( how_many < 0 && activeSlideNo == 1 ) return; //do not scroll up if at beginning
	if ( how_many > 0 && activeSlideNo == slideNb) return; //do not scroll down  if at the end
	
	activeSlideNo += how_many;	//keep track of the current slide nb
	target = slides.eq(activeSlideNo-1);
	
	holder.animate({ //animate!
		scrollTop: holder.scrollTop() + target.offset().top}, 500*(1 + abs(how_many)));
	setBullet();
}
 

function recalibrate_slides(){
	target = slides.eq(activeSlideNo-1);
	holder.scrollTop( holder.scrollTop() + target.offset().top);
}

function setBullet(){
	$('.bulletSlider').find('a.activeBullet').removeClass('activeBullet');
	bullets.eq(activeSlideNo-1).addClass('activeBullet');
}


$(document).ready(function(){
	$('.bulletSlider').css('display', 'block');

	slideNb = holder.children().length;
	holder.css('overflow', 'hidden');
	holder.on('mousewheel', function(event){
        slide(-signum(event.deltaY));
    });

	//if mobile
    if ('ontouchstart' in document.documentElement){
	    holder.swipe( {
	        //Generic swipe handler for all directions
	        swipeUp: function(event, direction, distance, duration, fingerCount, fingerData) {
	          slide(-1);
	        },
	        swipeDown: function(event, direction, distance, duration, fingerCount, fingerData) {
	          slide(1);
	        },
	        //Default is 75px, set to 0 for demo so any distance triggers swipe
	         threshold:75
	    });
	}
});


bullets.each(function() {
	var a = $(this);
	var target_slide = Number(a.text());
	a.on("click", function(event) {
		var difference = target_slide - activeSlideNo;
		slide(difference);
	});	
});

$(window).resize(function(){
	recalibrate_slides();
});

