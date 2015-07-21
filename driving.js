// var hours = 25 ;
// var min = 6;
// var sec = 34;


var timer = function(){
	
	var text = $('#s').text();

	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');
		//start the timer
		//call a future function
		clock.setTime(00);
		clock.start();

	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');
		//$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
		clock.stop();

		var getTime = clock.getTime();
		var hours = Math.floor(getTime / 3600);
		//var h = getTime - hours * 3600;
		var minutes = Math.floor(getTime / 60) - (hours*60);
		var seconds = (getTime - minutes * 60) - (hours*3600) - 1;
	

		$('#Result').text(hours + " hr " + minutes + " min " + seconds + " sec ");
		
	}
}





var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});

