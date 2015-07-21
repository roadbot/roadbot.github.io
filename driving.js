var timer = function(){
	
	var text = $('#s').text();

	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');
		//start the timer
		//call a future function
	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');
		$('#Result').text('You drove ' + ' h ' + ' min ' + ' sec! ');
		//stop the timer, call a stop function
	}
}



var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});

#clock{
	autoStart = "false";

}