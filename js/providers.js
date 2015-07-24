'use strict';

var pickabu = function(action) {
	switch (action) {
		case "thumb_up":
			pressButton('w', 'keydown', 'thumbup');
			break;
		case "thumb_down":
			pressButton('s', 'keydown', 'thumbdown');
			break;
		case "slide_left":
			pressButton('a', 'keyup', 'prev');
			break;
		case "slide_right":
			pressButton('d', 'keyup', 'next');
			break;
		default:
			return false;
	}
	return true;
};

var imgur = function(action) {
	switch (action) {
		case "thumb_up":
			pressButton('w', 'keydown', 'thumbup');			
			break;
		case "thumb_down":
			pressButton('w', 'keydown', 'thumbup');			
			break;
		case "slide_left":
			pressButton('w', 'keydown', 'thumbup');			
			break;
		case "slide_right":
			pressButton('w', 'keydown', 'thumbup');			
			break;
	}	
};