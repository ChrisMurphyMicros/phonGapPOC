window.onload  = function() {





// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
	function vibrate(duration) {
		if (navigator.notification) { navigator.notification.vibrate(duration) }
	}

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


	var map;
	var infowindow;

	function loadGoogleMaps(geoLat, geoLong, accuracy) {
		var currentLocation = new google.maps.LatLng(geoLat, geoLong);

	 //    var mapOptions = {
	 //        center: currentLocation,
	 //        zoom: 16,
	 //        mapTypeId: google.maps.MapTypeId.ROADMAP
	 //    };
	 //    var map = new google.maps.Map(document.getElementById("map-canvas"),
	 //        mapOptions);
	 //    var marker1 = new google.maps.Marker({
	 //        position: new google.maps.LatLng(geoLat, geoLong),
	 //        map: map
	 //    });
	 //    if (accuracy < 1000) {
		//     var circle = new google.maps.Circle({
		// 	  map: map,
		// 	  radius: accuracy,
		// 	  fillColor: "lightblue",
		// 	  strokeWeight: 1,
		// 	  strokeColor: "blue"
		// 	});
		// 	circle.bindTo('center', marker1, 'position');
	 //    }

		// var request = {
		// 	location: currentLocation,
		// 	radius: '500',
		// 	types: ['store']
		// };

		// var service = new google.maps.places.PlacesService(map);
		// service.nearbySearch(request, callback);

		// function callback(results, status) {
		//   if (status == google.maps.places.PlacesServiceStatus.OK) {
		//     for (var i = 0; i < results.length; i++) {
		//       var place = results[i];
		//       createMarker(results[i]);
		//     }
		//   }
		// }


// function initialize() {
  // var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: currentLocation,
		zoom: 16
	});

	var userLocationMarker = {
	      // coord: [1, 1, 1, 20, 18, 20, 18 , 1],
	      // type: 'poly',
	      url: 'http://nicenicejpg.com/20/32',
		    // This marker is 20 pixels wide by 32 pixels tall.
		    size: new google.maps.Size(20, 32),
		    // The origin for this image is 0,0.
		    origin: new google.maps.Point(0,0),
		    // The anchor for this image is the base of the flagpole at 0,32.
		    anchor: new google.maps.Point(0, 32)
	};

	var userLocation = new google.maps.Marker({
		position: currentLocation,
		map: map,
		icon: userLocationMarker
	});

	// var circle = new google.maps.Circle({
	// 	map: map,
	// 	radius: 1000,
	// 	fillColor: "lightblue",
	// 	strokeWeight: 1,
	// 	strokeColor: "blue"
	// 	// position: currentLocation
	// });

	var request = {
		location: currentLocation,
		radius: 100,
		query: "pub"
	};
	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
	}

	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
				console.log("long: " + results[i].geometry.location.jb);
				console.log("lat: " + results[i].geometry.location.kb);
			  	createMarker(results[i]);
			}
		}
	}

	function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
// }


// Pin multiple locations
	    // var coords = [
	    //     [54.97784, -1.612916],
	    //     [55.378051, -3.435973]
	    //     // and additional coordinates, just add a new item
	    // ];
	    // for (var i = 0; i < coords.length; i++) {
	    //     // create a closure for your latitude/longitude pair
	    //     (function(coord) {
	    //         // set the location...
	    //         var latLng = new google.maps.LatLng(coord[0], coord[1]);
	    //         // ...and add the Marker to your map
	    //         var marker = new google.maps.Marker({
	    //             position: latLng,
	    //             map: map
	    //         });
	    //     })(coords[i]);
	    // };


	}

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

	    loadGoogleMaps(geoLat, geoLong, accuracy);
	};

	// onError Callback receives a PositionError object
	//
	function geoError(error) {
		console.log("geoError");
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	};
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {timeout:10000, enableHighAccuracy:true})
	}
};