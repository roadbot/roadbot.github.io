$(document).ready(function() {
	if(localStorage.getItem("totalMinutes") === null) {
		localStorage.setItem("totalHours", 0);
		localStorage.setItem("totalMinutes",0);
		localStorage.setItem("totalSeconds", 0);
	}

	else {
		update();
	}
});

var timer = function(){
	
	var text = $('#s').text();

	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');
		//start the timer
		//call a future function
		//clock.setTime(00);
		clock.start();

	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');
		//$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
		clock.stop();

		var getTime = Number(clock.getTime());
		alert(getTime);
		var hours = Number(Math.floor(getTime / 3600));
		//var h = getTime - hours * 3600;
		var minutes = Number(Math.floor(getTime / 60) - (hours*60));
		var seconds = Number((getTime - minutes * 60) - (hours*3600) - 1);
	

		$('#Result').text(hours + " hr " + minutes + " min " + seconds + " sec ");

		add(hours, minutes, seconds);
	}
}

		

var update = function() {
	document.getElementById("lasttime").textContent="Hours: " + localStorage.getItem("totalHours") + " Minutes: " + localStorage.getItem("totalMinutes") + " Seconds: " + localStorage.getItem("totalSeconds");
}


var add = function (lastHour, lastMin, lastSec) {

		// add each one, do the math for overflow
		var totalHr = Number(localStorage.getItem("totalHours"));
		var totalMin = Number(localStorage.getItem("totalMinutes"));
		var totalSec = Number(localStorage.getItem("totalSeconds"));
		// check seconds

		if((lastSec + totalSec) > 59) {
			// need to do the math and add possible minutes onto total minutes

			// find out what the seconds value is
			var temp = lastSec + totalSec;

			totalSec = temp % 60;

			temp = temp - totalSec;

			// what to put in minutes

			totalMin = totalMin + (temp/60);
		}

		else {
			totalSec = lastSec + totalSec;
		}

		// check minutes
		if((lastMin + totalMin) > 59) {
			// need to do the math and add possible minutes onto total minutes

			var temp = lastMin + totalMin;

			totalMin = temp % 60;

			temp = temp - totalMin;

			// what to put in minutes

			totalHr = totalHr + (temp/60);
		}

		else {
			totalMin = lastMin + totalMin;
		}

		// add hours
		
		totalHr = totalHr + lastHour;

		// now put them back in local storage 

		localStorage.setItem("totalHours", totalHr);
		localStorage.setItem("totalMinutes", totalMin);
		localStorage.setItem("totalSeconds", totalSec);

		update();

}


var reset = function() {

	localStorage.setItem("totalHours", 0);
	localStorage.setItem("totalMinutes", 0);
	localStorage.setItem("totalSeconds", 0);

	update();
}


var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});