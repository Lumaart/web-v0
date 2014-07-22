
$(document).click(function (e){
	// toggle if navigation button is clicked 
    if ( $('.navigationButton').is(e.target)){ 			
        $('.navigationBar').toggleClass('transitionTop');
    }
    // close navigation if anything except 'nav' and it's children is clicked 
    else if ( $('nav').has(e.target).length === 0){	
        $('.navigationBar').removeClass('transitionTop');
    }


});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
    	if (!$('.navigationBar').hasClass('transitionScroll')){
       		 $('.navigationBar').addClass('transitionScroll');
			 $('.navigationLinks').addClass('transitionScrollLinks');
		}
    } else{
        $('.navigationBar').removeClass('transitionScroll');
		$('.navigationLinks').removeClass('transitionScrollLinks');
    }
});