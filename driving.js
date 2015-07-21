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
<<<<<<< HEAD
		//clock.setTime(00);
		clock.start();

=======
		(#startClock);
>>>>>>> origin/master
	}
	
	else if(text === "Stop Driving!" id) {
		$('#s').text('Start Driving!');
		//$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
<<<<<<< HEAD
		clock.stop();

		var getTime = clock.getTime();
		var hours = Math.floor(getTime / 3600);
		//var h = getTime - hours * 3600;
		var minutes = Math.floor(getTime / 60) - (hours*60);
		var seconds = (getTime - minutes * 60) - 1;
	

		$('#Result').text(hours + " hr " + minutes + " min " + seconds + " sec ");
		
=======
		// var time = clock.getTime(); 
		// console.log(time);
		// clock.setTime(00);
>>>>>>> origin/master
	}
}





var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});

