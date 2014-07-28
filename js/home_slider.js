var activeSlideNo = 1;
var slideNb = 0;
var holder = $('.homeSlides') 


function slide(direction){
	if  (holder.is(':animated')) return; //do not animate it an animation is already in motion
	if ( direction > 0 && activeSlideNo == 1 ) return; //do not scroll up if at beginning
	if ( direction < 0 && activeSlideNo == slideNb) return; //do not scroll down  if at the end
	(direction > 0) ? slide_up(): slide_down();
}
 
 
function slide_up(){
	activeSlideNo -= 1;	//keep track of the current slide nb
	target = $('#homeslide_'+ activeSlideNo)
	holder.animate({ //animate!
		scrollTop: holder.scrollTop() + target.offset().top}, 1000);
	setBullet();
}
 
 
function slide_down(){
	activeSlideNo += 1;	//keep track of the current slide nb
	target = $('#homeslide_'+ activeSlideNo)
	console.log(activeSlideNo)
	holder.animate({ //animate!
		scrollTop: holder.scrollTop() + target.offset().top},1000);
	setBullet();
}

function recalibrate_slides(){
	target = $('#homeslide_'+ activeSlideNo)
	holder.scrollTop( holder.scrollTop() + target.offset().top);
}

function setBullet(){
	$('.bulletSlider').find('a.activeBullet').removeClass('activeBullet');
	$('#bulletslide_'+activeSlideNo).addClass('activeBullet');
}

$(document).ready(function(){
	slideNb = holder.children().length;
	holder.css({'overflow': 'hidden'});

	holder.on('mousewheel', function(event){
        slide(event.deltaY);
    });
});

$(window).resize(function(){
	recalibrate_slides();
});

