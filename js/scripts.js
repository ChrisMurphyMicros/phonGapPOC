window.onload  = function() {





// document.addEventListener("deviceready", onDeviceReady, false);

function vibrate(duration) {
    navigator.notification.vibrate(duration);
}

// function onDeviceReady() {

	document.getElementById("toggle-colour").onclick = function() {
		vibrate(500);
		document.getElementById("h1").classList.toggle("turnMeRed");
	}

	function removeClassByClassName(elements, classToRemove) {
		for (var i = elements.length-1;i >=0;i--){
			elements[i].classList.remove(classToRemove);
		}
	}

	document.getElementById("homeButton").onclick = function(e) {
		e.preventDefault();
		
		removeClassByClassName(document.getElementsByClassName("tabs"), "active");
		removeClassByClassName(document.getElementsByClassName("nav-link"), "active");
		document.getElementById("home").classList.add("active");
		this.classList.toggle("active");
	}

	document.getElementById("mapButton").onclick = function(e) {
		e.preventDefault();
		
		removeClassByClassName(document.getElementsByClassName("tabs"), "active");
		removeClassByClassName(document.getElementsByClassName("nav-link"), "active");
		document.getElementById("map").classList.add("active");
		this.classList.toggle("active");
	}








// }
};	var onSuccess = function(position) {
	    alert('Latitude: '          + position.coords.latitude          + '\n' +
	          'Longitude: '         + position.coords.longitude         + '\n' +
	          'Altitude: '          + position.coords.altitude          + '\n' +
	          'Accuracy: '          + position.coords.accuracy          + '\n' +
	          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	          'Heading: '           + position.coords.heading           + '\n' +
	          'Speed: '             + position.coords.speed             + '\n' +
	          'Timestamp: '         + new Date(position.timestamp)      + '\n');
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
        function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions);
        }
		google.maps.event.addDomListener(window, 'load', initialize);