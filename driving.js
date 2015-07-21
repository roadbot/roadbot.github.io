var hours = 25 ;
var min = 6;
var sec = 34;


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
		$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
	}
}

//' h ' + ' min ' + ' sec '

//$('#totalTime').text('Hello World!');