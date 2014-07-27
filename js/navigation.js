// ios safari click event bubbling hack
$('.navigationButton').click(function(e){});
$('body>div').click(function(e){});

$(document).click(function (e){
	// toggle if navigation button is clicked 
    if ( $('.navigationButton').is(e.target)){ 			
        $('.navigationBar').toggleClass('transitionTop');
    }
    // close navigation if anything except 'nav' and it's children is clicked 
    else if ( $('nav').has(e.target).length == 0){	
        $('.navigationBar').removeClass('transitionTop');
    }
});

$('div').on("scroll",function(){
    if($(document).scrollTop()>100 ||  $('.homeSlides').scrollTop()>100 ){
    	if (!$('.navigationBar').hasClass('transitionScroll')){
       		 $('.navigationBar').addClass('transitionScroll');
             $('.navigationLinks').addClass('transitionScrollLinks');
             $('.logoBox').addClass('transitionScrollLogoBox');
		}
    } else{
        $('.navigationBar').removeClass('transitionScroll');
		$('.navigationLinks').removeClass('transitionScrollLinks');
        $('.logoBox').removeClass('transitionScrollLogoBox');

    }
});

