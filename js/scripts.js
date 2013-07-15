window.onload  = function() {

	// document.addEventListener("deviceready", onDeviceReady, false);    

	// function onDeviceReady() {
 //        // Empty
 //    }

 //    function vibrate(duration) {
 //        navigator.notification.vibrate(duration);
 //    }


	document.getElementById("toggle-colour").onclick = function() {
		// vibrate(500);
		document.getElementById("h1").classList.toggle("turnMeRed");
	}
}