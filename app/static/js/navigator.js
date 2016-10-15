$(document).ready(function () {			
	//$('#navigator').hide();
	var hidden = true
	var limiter = false
	$("body").keypress(function(event) {
		if (event.which == 109 && !limiter) {
			if (hidden) {
				limiter = true
				setTimeout(function(){ limiter = false }, 1000)
				hidden = false
				$('#navigator').fadeIn();
			} else {
				limiter = true
				setTimeout(function(){ limiter = false }, 1000)				
				hidden = true
				$('#navigator').fadeOut();
			}
		}
	});
});