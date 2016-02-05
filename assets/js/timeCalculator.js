var time = (function() {
	"use strict";

	moment.locale("pt-br");
	
	var hour = moment().format('H');
	var hourMinutes = moment().format('LT');
	var dayOfTheWeek = moment().format('dddd'); 
	var dayOfTheMonth = moment().format('D') + " de " + moment().format('MMMM')

	return {
		hour: hour,
		hourMinutes: hourMinutes,
		dayOfTheWeek: dayOfTheWeek,
		dayOfTheMonth: dayOfTheMonth
	}
		
})();

// check if is night time
var isNight = (function($, time) {
	"use strict";

	if(time.hour > 18 || time.hour < 5) {
		return true
	} else {
		return false
	}

	return isNight;
})($, time);


// change background and greeting
var setNight = (function($, isNight) {
	"use strict";

	if(isNight) {
		$("body").addClass("night-background")
		$(".greetings").text("Boa noite, Pedro")
	}

	return setNight;
})($, isNight);

// set hour in interface
var writeTime = (function($, time) {
	"use strict";

	$(".clock-time").text(time.hourMinutes);	

	$(".clock-date").text(time.dayOfTheMonth);

	$(".clock-day-week").text(time.dayOfTheWeek);

	return writeTime;
})($, time);