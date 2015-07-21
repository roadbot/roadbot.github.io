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