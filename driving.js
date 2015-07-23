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


var hours = 25 ;
var minutes = 6;
var seconds = 34;


var totalHours =0;
var totalMinutes = 0;
var totalSeconds = 0;

var timer = function(){


	
	var text = $('#s').text();

	if(text === "Start Driving!") {
		$('#s').text('Stop Driving!');
		$('#Result').text('');
		//start the timer
		//call a future function

		dim();

		clock.setTime(00);
		clock.start();

	}
	
	else if(text === "Stop Driving!") {
		$('#s').text('Start Driving!');
		//$('#Result').text('You drove ' + hours + ' hr ' + min + ' min ' + sec + ' sec! ');
		//stop the timer, call a stop function
		clock.stop();

		normal();

		var getTime = clock.getTime();
		var hours = Math.floor(getTime / 3600);
		//var h = getTime - hours * 3600;
		var minutes = Math.floor(getTime / 60) - (hours*60);
		var seconds = (getTime - minutes * 60) - (hours*3600) - 1;
		
		var totalHours = totalHours + hours; 
		var totalMinutes = totalMinutes + minutes;
		var totalSeconds = totalSeconds + seconds;
		



		$('#Result').text("You just drove: " + hours + " hr " + minutes + " min " + seconds + " sec ");
		
	}
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

// var hours = 0 ;
// var minutes = 0;
// var seconds = 0;
// main overlay container



var clock = $('.your-clock').FlipClock({
	//options
	
});

clock.setTime(3600);

clock.start(function() {
		// this (optional) callback will fire each time the clock flips
	});

