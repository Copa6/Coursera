(function(){
	var move = $('.content');
	var main = $('.main');
	var clicker= $('.clickbutton')
	$('.navigator').bind('mouseenter', function(){
		move.toggleClass('slide-body');
		main.toggleClass('col-xs-9 col-sm-11 col-md-11');
		main.toggleClass('col-xs-12');
		clicker.toggleClass('glyphicon-remove');
		clicker.toggleClass('glyphicon-align-justify');
		return false;
		
	});
	if ($(window).width() <= 800){	
	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		main.toggleClass('col-xs-9 col-sm-11 col-md-11');
		main.toggleClass('col-xs-12');
		clicker.toggleClass('glyphicon-remove');
		clicker.toggleClass('glyphicon-align-justify');
		return false;
		
	});
}
	$('.navigator').bind('mouseleave', function(){
		move.removeClass('slide-body');
		main.addClass('col-xs-12');
		main.removeClass('col-xs-9 col-sm-11 col-md-11');
		clicker.removeClass('glyphicon-remove');
		clicker.addClass('glyphicon-align-justify');
	});
	$('.content').bind('click', function(){
		move.removeClass('slide-body');
		main.addClass('col-xs-12');
		main.removeClass('col-xs-9 col-sm-11 col-md-11');
		clicker.removeClass('glyphicon-remove');
		clicker.addClass('glyphicon-align-justify');
	});



	  /* document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );*/
})();