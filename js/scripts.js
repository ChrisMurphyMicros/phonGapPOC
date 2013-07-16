window.onload  = function() {





// document.addEventListener("deviceready", onDeviceReady, false);

	function vibrate(duration) {
		if (navigator.notification) { navigator.notification.vibrate(duration) }
	}


	function loadGoogleMaps(geoLat, geoLong, accuracy) {
	    var mapOptions = {
	        center: new google.maps.LatLng(geoLat, geoLong),
	        zoom: 16,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map-canvas"),
	        mapOptions);
	    var marker1 = new google.maps.Marker({
	        position: new google.maps.LatLng(geoLat, geoLong),
	        map: map
	    });
	    var circle = new google.maps.Circle({
		  map: map,
		  radius: accuracy,    // 10 miles in metres
		  fillColor: '#AA0000'
		});
		circle.bindTo('center', marker1, 'position');
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

// var lat = 0;
// var long = 0;

	var geoSuccess = function(position) {
	    // alert('Latitude: '          + position.coords.latitude          + '\n' +
	    //       'Longitude: '         + position.coords.longitude         + '\n' +
	    //       'Altitude: '          + position.coords.altitude          + '\n' +
	    //       'Accuracy: '          + position.coords.accuracy          + '\n' +
	    //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	    //       'Heading: '           + position.coords.heading           + '\n' +
	    //       'Speed: '             + position.coords.speed             + '\n' +
	    //       'Timestamp: '         + new Date(position.timestamp)      + '\n');
	    var geoLat = position.coords.latitude;
	    var geoLong = position.coords.longitude;
	    var accuracy = position.coords.accuracy;
	    console.log(accuracy);

	    // var geoLat = 0;
	    // var geoLong = 0;

	    loadGoogleMaps(geoLat, geoLong, accuracy)
	    // loadGoogleMaps(geoLat, geoLong);
	};

	// onError Callback receives a PositionError object
	//
	function geoError(error) {
		console.log("geoError");
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	};
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(geoSuccess, geoError);
	}


// }
};	



		