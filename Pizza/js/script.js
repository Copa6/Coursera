(function(){
	var move = $('body');
	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		return false;
	});
	$('.navigator').bind('blur', function(){
		move.toggleClass('slide-body')
	});
})();