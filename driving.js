$(document).ready(function() {
	if(localStorage.getItem("totalMinutes") === null) {
		localStorage.setItem("totalHours", 0);
		localStorage.setItem("totalMinutes",0);
		localStorage.setItem("totalSeconds", 0);
		localStorage.setItem("startingDay", 0);
		localStorage.setItem("startingMonth", 0);
	}
	else {
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

		
		clock.reset(00);
		dim();
		clock.start();


	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');

		clock.stop();


		normal();

		var getTime = Number(clock.getTime());
		var hours = Number(Math.floor(getTime / 3600));
		var minutes = Number(Math.floor(getTime / 60) - (hours*60));
		var seconds = Number((getTime - minutes * 60) - (hours*3600) - 1);
	

		$('#Result').text("You just drove: " + hours + " hr " + minutes + " min " + seconds + " sec ");

		add(hours, minutes, seconds);

		var totalH = localStorage.getItem("totalHours");
		var totalM = localStorage.getItem("totalMinutes");
		var totalS = localStorage.getItem("totalSeconds");


		var timeLeftInSec = 180000 - ((totalHr * 3600) + (totalMin * 60) + totalSec);
	}
}

var refresh = function(){
	location.reload();
	
}

var update = function() {
	document.getElementById("lasttime").textContent=+ localStorage.getItem("totalHours") + " hr " + localStorage.getItem("totalMinutes") + " min " + localStorage.getItem("totalSeconds") + " sec";
	averageHours();
}

var totalHr = 0;
var totalMin = 0;
var totalSec = 0;

var add = function (lastHour, lastMin, lastSec) {

		// add each one, do the math for overflow
		totalHr = Number(localStorage.getItem("totalHours"));
		totalMin = Number(localStorage.getItem("totalMinutes"));
		totalSec = Number(localStorage.getItem("totalSeconds"));
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
	localStorage.setItem("startingDay", 0);
	localStorage.setItem("startingMonth", 0);

	update();
}

var dim = function() {

		$("#dimmer").css("opacity",0.4).fadeIn(300, function () {            
	     	$('#red').css({'position':'aboslute','z-index':9999});
	     });
}

var normal = function(){
	$("#dimmer").css("opacity",1).fadeIn(300, function () {            
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




var dateEntry = function(){
	var firstDay = ($("#day").val());
	var firstMonth = ($("#month").val());

	if ($("#month").val() == "January" || $("#month").val() == "january"){
		firstMonth = 1; 
	}
	else if ($("#month").val() == "February" || $("#month").val() == "february" ){
		firstMonth = 2;
	}
	else if ($("#month").val() == "March" || $("#month").val() == "march"){
		firstMonth = 3;
	}
	else if ($("#month").val() == "April" || $("#month").val() == "april"){
		firstMonth = 4;
	}
	else if ($("#month").val() == "May" || $("#month").val() == "may"){
		firstMonth = 5;
	}
	else if ($("#month").val() == "June" || $("#month").val() == "june"){
		firstMonth = 6;
	}
	else if ($("#month").val() == "July" || $("#month").val() == "july"){
		firstMonth = 7;
	}
	else if ($("#month").val() == "August" || $("#month").val() == "august"){
		firstMonth = 8;
	}
	else if ($("#month").val() == "September" || $("#month").val() == "september"){
		firstMonth = 9;
	}
	else if ($("#month").val() == "October" || $("#month").val() == "october"){
		firstMonth = 10;
	}
	else if ($("#month").val() == "November" || $("#month").val() == "november"){
		firstMonth = 11;
	}
	else if ($("#month").val() == "December" || $("#month").val() == "december"){
		firstMonth = 12;
	}



	localStorage.setItem("startingDay", firstDay);
	localStorage.setItem("startingMonth", firstMonth);

	averageHours();

}


var averageHours = function(){
	var d = new Date();
	var today = Number(d.getDate());
	var month = Number(d.getMonth()+1);

	totalHr = Number(localStorage.getItem("totalHours"));
	totalMin = Number(localStorage.getItem("totalMinutes"));
	totalSec = Number(localStorage.getItem("totalSeconds"));

	var fMonth = Number(localStorage.getItem("startingMonth"));
	var fDay = Number(localStorage.getItem("startingDay"));

	

	var timeLeftInSec = 180000 - ((totalHr * 3600) + (totalMin * 60) + totalSec);
 

	var daysLeft = 30 * (fMonth + 5 - month) + (30 - today) + (30-fDay) ;

	var averagePerDay = timeLeftInSec / daysLeft;

	var avghours = Math.floor(averagePerDay / 3600);
	var avgminutes = Math.round(Math.floor(averagePerDay / 60) - (avghours*60));
	
	if (avghours > -1) {
		$('#averageHours').text(avghours + " hr " + avgminutes + " min " );
	}
	else{
		$('#averageHours').text("You have not entered any data yet. Go to the 'Set Start Date' tab."); 
	}
}

