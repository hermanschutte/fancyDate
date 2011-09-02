// fancyDate - a simple jQuery plugin that takes a date and converts it to a date format similar to what Facebook uses
// Copyright (c) 2011 Herman Schutte - herman.schutte@gmail.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function ($) {
    $.fn.fancyDate = function (date) {
        return this.each(function() {
            var $this = $(this),
                checkDate = new Date(),
                today = new Date(),
                monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			
            checkDate.setTime(date*1000);
			
            minutes = parseInt((today.getTime() - date.getTime()) / (60*1000));
			
			if (minutes == 0) {
			    $this.html('Just now');
			} else if (minutes < 2) {
			    $this.html(minutes + ' minute ago');
			} else if (minutes < 60) {
                $this.html(minutes + ' minutes ago');
            } else if (minutes < 120) {
                $this.html('About an hour ago');
            } else if (minutes < (60 * 24)) {
                $this.html(Math.round((minutes / 60)) + ' hours ago');
            } else if (minutes < (60 * 48)) {
                $this.html('Yesterday');
            }else {
                $this.html(monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear());
            }
        })
    };
})(jQuery);
