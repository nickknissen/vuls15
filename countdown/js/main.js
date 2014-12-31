(function($) {
	
	var date  = new Date(Date.UTC(2015, 8, 30, 12, 0, 0));
	var now   = new Date();
	var diff  = date.getTime()/1000 - now.getTime()/1000;

	var clock = $('#vuls-clock').FlipClock(diff, {
	    clockFace: 'DailyCounter',
	    countdown: true,
	    language: "da-dk"
	});

}(jQuery));



