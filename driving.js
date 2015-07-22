$(document).ready(function() {
	if(localStorage.getItem("totalMinutes") === null) {
		localStorage.setItem("totalHours", 0);
		localStorage.setItem("totalMinutes",0);
		localStorage.setItem("totalSeconds", 0);
	}else {
		update();
	}
});

$('<div id="__msg_overlay">').css({
      "width" : "100%"
    , "height" : "100%"
    , "background" : "#000"
    , "position" : "fixed"
    , "top" : "0"
    , "left" : "0"
    , "zIndex" : "50"
    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
    , "filter" : "alpha(opacity=60)"
    , "MozOpacity" : 0.6
    , "KhtmlOpacity" : 0.6
    , "opacity" : 0.6

}).appendTo(document.body);

var timer = function(){

	var text = $('#s').text();

	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');

		dim();
		clock.start();

	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');

		clock.stop();

		normal();

		var getTime = Number(clock.getTime());
		alert(getTime);
		var hours = Number(Math.floor(getTime / 3600));
		//var h = getTime - hours * 3600;
		var minutes = Number(Math.floor(getTime / 60) - (hours*60));
		var seconds = Number((getTime - minutes * 60) - (hours*3600) - 1);
	

		$('#Result').text("You just drove: " + hours + " hr " + minutes + " min " + seconds + " sec ");

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

var dim = function() {
	//$(window).load(function(e){
	  //$('#trigger').on('click',function(e){
		
		$("#pageone").css("opacity",0.4).fadeIn(300, function () {            
	     	$('#red').css({'position':'aboslute','z-index':9999});
	     });

	// $('#trigger').on('click', function () {
	//     $('#overlay, #overlay-back').fadeIn(500);
	// });


	   //e.preventDefault();
	   //});
	//});
}

var normal = function(){
	$("#pageone").css("opacity",1).fadeIn(300, function () {            
	     	//$('#red').css({'position':'aboslute','z-index':9999});
	});
}

var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});
