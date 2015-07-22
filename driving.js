var hours = 25 ;
var min = 6;
var sec = 34;


var timer = function(){
	
	var text = $('#s').text();


	// type="text/javascript"
	// clock.setTime(00);
	// clock.stop(function() { 
		
	// });
	// var clock = $('.clock').FlipClock(00);


	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');
		//start the timer
		//call a future function
		(#startClock);
	}
	
	else if(text === "Stop Driving!" id) {
		$('#s').text('Start Driving!');
		$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
		// var time = clock.getTime(); 
		// console.log(time);
		// clock.setTime(00);
	}
}





var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});

