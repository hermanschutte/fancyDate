# fancyDate

A small jQuery plugin that converts a date to a format similar to what Facebook uses

## Usage:

	$('#myDate')
		.fancyDate(new Date());

Would produce: `Just Now`

	$('#myDate')
		.fancyDate(new Date("September 2, 2011 11:13:00"))
		.css('css', 'red');

Would produce a red colored: `3 minutes ago` depending on the current date obviousely :)

	$('#myDate')
		.fancyDate(new Date("September 23, 2010 10:31:00"));

Would produce `September 23, 2010`
