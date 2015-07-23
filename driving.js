// var hours = 0 ;
// var minutes = 0;
// var seconds = 0;


var totalHours =20;
var totalMinutes = 0;
var totalSeconds = 0;



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
		
 

		var totalHours = totalHours + hours; 
		var totalMinutes = totalMinutes + minutes;
		var totalSeconds = totalSeconds + seconds;




		$('#Result').text(hours + " hr " + minutes + " min " + seconds + " sec ");
		
	}
}


// var hours = 0 ;
// var minutes = 0;
// var seconds = 0;




var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});


var firstDay = 0;
var firstMonth = 0;


var dateEntry = function(){
	firstDay = Number(document.getElementById("firstDay").value);
	firstMonth = Number(document.getElementById("firstMonth").value);
	

}



var averageHours = function(){
	var d = new Date();
	var today = d.getDate();
	var month = d.getMonth()+1;
	

	var timeLeftInSec = (totalHours * 3600) + (totalMinutes * 60) + totalSeconds;

	var daysLeft = 30 * (firstMonth + 5 - month) + (30 - today) + (30-firstDay) ;
	
	var averagePerDay = timeLeftInSec / daysLeft;

	var avghours = Math.floor(averagePerDay / 3600);
	var avgminutes = Math.round(Math.floor(averagePerDay / 60) - (avghours*60));
	$('#averageHours').text(avghours + " hr " + avgminutes + " min " );

}

averageHours();
