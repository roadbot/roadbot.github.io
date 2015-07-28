
var jq = $.noConflict();

jq(document).ready(function() {
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


jq('<div id="__msg_overlay">').css({
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


	var text = jq('#s').text();


	if(text === "Start Driving!") {

		jq('#s').text('Stop Driving!');
		jq('#Result').text('');

		clock.reset(00);
		dim();
		clock.start();
		jq('#beforeDriving').text("Keep your eyes on the road! Remember, if you go out of the app before you are done driving, your time will not count. Press the Stop Driving button as soon as you are done!");
		
	}
	
	else if(text === "Stop Driving!") {
		jq('#s').text('Start Driving!');

		clock.stop();

		normal();

		var getTime = Number(clock.getTime());
		var hours = Number(Math.floor(getTime / 3600));
		var minutes = Number(Math.floor(getTime / 60) - (hours*60));
		var seconds = Number((getTime - minutes * 60) - (hours*3600) - 1);
	

		jq('#beforeDriving').text("Press the Start Driving button just before you get behind the wheel! The screen will get darker, and the timer will begin. If you go out of the app at any time, the timer will stop and your time will not be counted.");


		jq('#Result').text("You just drove: " + hours + " hr " + minutes + " min " + seconds + " sec ");

		add(hours, minutes, seconds);
		
		left();

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
	left();
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
	localStorage.setItem("startingYear", 0);
	localStorage.setItem("totalMonths" , 0);

	update();
}

var dim = function() {

	//jq(window).load(function(e){
	  //jq('#trigger').on('click',function(e){
		
		jq("#dimmer").css("opacity",0.0).fadeIn(300, function () {            
	     	jq('#red').css({'position':'aboslute','z-index':9999});
	     });

		jq("#pageone").css('background-image', 'url("grey.jpg")');

	// jq('#trigger').on('click', function () {
	//     jq('#overlay, #overlay-back').fadeIn(500);
	// });


	   //e.preventDefault();
	   //});
	//});

}

var normal = function(){
	jq("#dimmer").css("opacity",1).fadeIn(300, function () {            
	     	//jq('#red').css({'position':'aboslute','z-index':9999});
	});

	jq("#pageone").css('background-image', 'url("whites.jpg")');

}

var clock = jq('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
});

var dateEntry = function(){

	var firstDay = (jq("#day").val());
	var firstMonth = (jq("#month").val());
	var totalMonth = (jq("#totalMonths").val());
	var firstYear = (jq("#year").val());


	if (jq("#month").val() == "January" || jq("#month").val() == "january"){
		firstMonth = 1; 
	}
	else if (jq("#month").val() == "February" || jq("#month").val() == "february" ){
		firstMonth = 2;
	}
	else if (jq("#month").val() == "March" || jq("#month").val() == "march"){
		firstMonth = 3;
	}
	else if (jq("#month").val() == "April" || jq("#month").val() == "april"){
		firstMonth = 4;
	}
	else if (jq("#month").val() == "May" || jq("#month").val() == "may"){
		firstMonth = 5;
	}
	else if (jq("#month").val() == "June" || jq("#month").val() == "june"){
		firstMonth = 6;
	}
	else if (jq("#month").val() == "July" || jq("#month").val() == "july"){
		firstMonth = 7;
	}
	else if (jq("#month").val() == "August" || jq("#month").val() == "august"){
		firstMonth = 8;
	}
	else if (jq("#month").val() == "September" || jq("#month").val() == "september"){
		firstMonth = 9;
	}
	else if (jq("#month").val() == "October" || jq("#month").val() == "october"){
		firstMonth = 10;
	}
	else if (jq("#month").val() == "November" || jq("#month").val() == "november"){
		firstMonth = 11;
	}
	else if (jq("#month").val() == "December" || jq("#month").val() == "december"){
		firstMonth = 12;
	}


	localStorage.setItem("startingDay", firstDay);
	localStorage.setItem("startingMonth", firstMonth);
	localStorage.setItem("totalMonths", totalMonth);
	localStorage.setItem("startingYear", firstYear);

	averageHours();

}

var averageHours = function(){
	var d = new Date();
	var today = Number(d.getDate());
	var month = Number(d.getMonth()+1);
	var year = Number(d.getYear() +1900);

	totalHr = Number(localStorage.getItem("totalHours"));
	totalMin = Number(localStorage.getItem("totalMinutes"));
	totalSec = Number(localStorage.getItem("totalSeconds"));
	totalMon = Number(localStorage.getItem("totalMonths"));

	var fMonth = Number(localStorage.getItem("startingMonth"));
	var fDay = Number(localStorage.getItem("startingDay"));
	var fYear = Number(localStorage.getItem("startingYear"));
	

	if (fYear == 2014){
		if (fMonth == 12){
			fMonth = -1; 
		}
		else if (fMonth == 11){
			fMonth = -2; 
		}
		else if (fMonth == 10){
			fMonth = -3; 
		}
		else if (fMonth == 9){
			fMonth = -4; 
		}
		else if (fMonth == 8){
			fMonth = -5; 
		}
		else if (fMonth == 7){
			fMonth = -6; 
		}
		else if (fMonth == 6){
			fMonth = -7; 
		}
		else if (fMonth == 5){
			fMonth = -8; 
		}
		else if (fMonth == 4){
			fMonth = -9; 
		}
		else if (fMonth == 3){
			fMonth = -10; 
		}
		else if (fMonth == 2){
			fMonth = -11; 
		}
		else if (fMonth == 1){
			fMonth = -12; 
		}
	}




	console.log(totalMon + "totalmonth" );
	console.log(year + "year");
	console.log(fYear + "first year"); 



	var timeLeftInSec = 180000 - ((totalHr * 3600) + (totalMin * 60) + totalSec);
 

	var daysLeft = 30 * (fMonth + (totalMon - 1) - month) + (30 - today) + (30-fDay) ;
	console.log(daysLeft + "daysLeft"); 
	var averagePerDay = timeLeftInSec / daysLeft;

	var avghours = Math.floor(averagePerDay / 3600);
	var avgminutes = Math.round(Math.floor(averagePerDay / 60) - (avghours*60));
	
	if (avghours > -1) {
		jq('#averageHours').text(avghours + " hr " + avgminutes + " min " );
	}
	else{
		jq('#averageHours').text("You have not entered any data yet. Go to the 'Settings' tab."); 
	}
}

// var hoursleft = 0;
// var minleft = 0;
// var secleft = 0;

var left = function(){

	var tHr = Number(localStorage.getItem("totalHours"));
	var tMin = Number(localStorage.getItem("totalMinutes"));
	var tSec = Number(localStorage.getItem("totalSeconds"));

	// set at max time

	hoursleft = 50;
	minleft = 0;
	secleft = 0;

	// do the math with our totals

	if(tSec > secleft) {
		secleft = 60 - tSec;

		// now move down minutes and subtract

		minleft = 59;
		hoursleft = 49;
	}

	if(minleft === 0) {

		if(tMin === 0) {
		}

		else {
			minleft = 60 - tMin;
			hoursleft = hoursleft - 1;
		}
	}

	else {
		minleft = minleft - tMin;
	}

	hoursleft = hoursleft - tHr;

	// print the time lift
	document.getElementById("timeleft").textContent=+ hoursleft + " hr " + minleft + " min " + secleft + " sec ";

}

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
