function isMobile(){
    return 'ontouchstart' in document.documentElement
}

$(document).ready(function(){
    var pics = [];
    while(pics.length < 5){
        var rand = Math.ceil(Math.random()*8);
        if (! (rand in pics))
            pics.push(rand);
    }

    var suffix = isMobile() ? '_small.jpg' : '.jpg'
    for (var i = 0; i<5; i++)
        $('#homeslide_'+(i+1)).css('background-image', 'url(images/' + pics[i] + suffix + ')');
});