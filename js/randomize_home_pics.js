function isMobile(){
    return 'ontouchstart' in document.documentElement
}

Array.prototype.contains = function (x) {
    var len = this.length
    for (var i = 0; i<len; i++) {
        if (this[i] === x)  return true;
    }
    return false;
}

$(document).ready(function(){
    var pics = [];
    while(pics.length < 5){
        var rand = Math.ceil(Math.random()*8);
        if (!pics.contains(rand))
            pics.push(rand);
    }
    var suffix = isMobile() ? '_small.jpg' : '.jpg'
    for (var i = 0; i<pics.length; i++)
        $('#homeslide_'+ (i+1)).css('background-image', 'url(images/' + pics[i] + suffix + ')');
});