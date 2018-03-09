$(document).ready(function() {
    $("main").slideDown(1000);
    $("#mission").slideDown(1000);
    
})

$(window).resize(function(){
    var xHeight = $('.footer').height();
    $('body').css('margin-bottom',xHeight + 'px');
})