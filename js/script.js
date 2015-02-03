var openMenu = function() {
    $('.menu-2').css({
        right: '0px'
    });
}
var closeMenu = function(){
	$('.menu-2').css('right', '-270px');
}
var main = function() {
	openMenu();
	setTimeout(function(){
		closeMenu();
	}, 1000);
}

$(document).ready(main);