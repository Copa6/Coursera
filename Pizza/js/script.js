(function(){
	var move = $('body');
	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		return false;
	});
})();