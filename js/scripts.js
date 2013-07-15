window.onload  = function() {

	document.getElementById("toggle-colour").onclick = function() {
		navigator.vibrate(500);
		document.getElementById("h1").classList.toggle("turnMeRed");
	}
}