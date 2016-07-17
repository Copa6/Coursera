(function(){
	var move = $('.content');
	var main = $('.main');
	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		main.toggleClass('col-xs-9 col-sm-11 col-md-11');
		main.toggleClass('col-xs-12');
		return false;
		
	});
	$('.navigator').bind('blur', function(){
		move.removeClass('slide-body');
		main.addClass('col-xs-12');
		main.removeClass('col-xs-9 col-sm-11 col-md-11');
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