(function(){
	var move = $('body');
	var main = $('.main');
	var head= $('.clickbutton')
	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		main.toggleClass('col-xs-9 col-sm-11 col-md-11');
		main.removeClass('col-xs-12');
		head.toggleClass('mybutton');
		return false;
		
	});
	$('.navigator').bind('blur', function(){
		move.removeClass('slide-body');
		main.addClass('col-xs-12');
		main.removeClass('col-xs-9 col-sm-11 col-md-11');
		head.removeClass('mybutton');
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