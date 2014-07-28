/* jj */


var activeSlideNo = 1;
var slideNb = 0;
var holder = $('.homeSlides') 


function slide(direction, how_many){
	if  (holder.is(':animated')) return; //do not animate it an animation is already in motion
	if ( direction > 0 && activeSlideNo == 1 ) return; //do not scroll up if at beginning
	if ( direction < 0 && activeSlideNo == slideNb) return; //do not scroll down  if at the end
	(direction > 0) ? slide_up(how_many): slide_down(how_many);
}
 
 
function slide_up(how_many){
	activeSlideNo -= how_many;	//keep track of the current slide nb
	target = $('#homeslide_'+ activeSlideNo)
	holder.animate({ //animate!
		scrollTop: holder.scrollTop() + target.offset().top}, 500*(1 + how_many));
	setBullet();
}
 
 
function slide_down(how_many){
	activeSlideNo += how_many;	//keep track of the current slide nb
	target = $('#homeslide_'+ activeSlideNo)
	console.log(activeSlideNo)
	holder.animate({ //animate!
		scrollTop: holder.scrollTop() + target.offset().top}, 500*(1 + how_many));
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
        slide(event.deltaY, 1);
    });
});

function getBulletNb(id){
	var id_nb = parseInt((id.split('_'))[1]);
	return isFinite(id_nb) ? id_nb : 0;
}

function signum(x){
	return x<0 ? -1 : 1;
}
function abs(x){
	return x<0 ? -x : x;
}

$('.bulletSlider a').click(function(e){
	var target_slide = getBulletNb($(this).attr('id'));
	var difference = activeSlideNo - target_slide;
	slide(difference, abs(difference) )
});

$(window).resize(function(){
	recalibrate_slides();
});

