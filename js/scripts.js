// window.onload  = function() {

	document.addEventListener("deviceready", onDeviceReady, false);    

    function vibrate(duration) {
        navigator.notification.vibrate(duration);
    }

	function onDeviceReady() {
		document.getElementById("toggle-colour").onclick = function() {
			vibrate(500 500 500);
			document.getElementById("h1").classList.toggle("turnMeRed");
		}
    }



// }