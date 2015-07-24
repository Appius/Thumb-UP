(function(){
	/*alert("aa");
	var keyboardEvent = document.createEvent("KeyboardEvent");
	var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

	keyboardEvent[initMethod](
		"keyup", 
		true,
		true,
		window,
		false,
		false,
		false,
		false,
		68,
		0
	);
	document.dispatchEvent(keyboardEvent);*/
	//var body = document.getElementsByTagName('body');
	//alert("aa");
	/*var thumb_up_div = document.createElement('div');
	thumb_up_div.id = 'thumb_up_div';  
	thumb_up_div.style.cssText = 'position:fixed;top:100px;left:300px;width:400px;height:400px;display:block; background: url("http://127.0.0.1/thumbup.png") no-repeat;}';           // No setAttribute required

	

	//msgContainer.appendChild(document.createTextNode(msg));
	document.body.appendChild(thumb_up_div);
	setTimeout(function(){ y=document.getElementById('thumb_up_div');document.body.removeChild(y); }, 1000);*/

	/*
		A, D - keyup
		W, S - keydown	
	*/

	var pressButton = function(button, event, image){
		var charCode = button.toUpperCase().charCodeAt(0);
		console.log(charCode);
		var keyboardEvent = document.createEvent("KeyboardEvent");
		var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
		keyboardEvent[initMethod](event, true, true, window, false, false, false, false, charCode, 0);
		document.dispatchEvent(keyboardEvent);

		addNotification(image);
	}
	var addNotification = function(image){
		if(image != null){
			var thumb_up_div = document.createElement('div');
			thumb_up_div.id = 'thumb_up_div';  
			thumb_up_div.style.cssText = 'position:fixed;top:100px;left:30%;width:400px;height:400px;display:block; background: url("http://127.0.0.1/assets/'+image+'.png") no-repeat;}';
			document.body.appendChild(thumb_up_div);
			setTimeout(function(){ document.body.removeChild(thumb_up_div); }, 1000);
		}
	}

	pressButton('d', 'keyup', 'next');
})();
