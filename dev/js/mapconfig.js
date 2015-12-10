function initMap() {
	var defCoords = {lat: 53.1269068, lng: 18.0282105};

	var map = new google.maps.Map(document.querySelector('.map'), {
		center: defCoords,
		zoom: 12,
		scrollwheel: false,
	});

	var marker = new google.maps.Marker({
		position: defCoords,
		title: 'Hello World!',
		animation: google.maps.Animation.DROP,
		map: map,
	});

	var infoWindow = new google.maps.InfoWindow({
		content: '<h2>Some text</h2><p>Even more text</p>',
	});


	marker.addListener('click', function () {
		infoWindow.open(map, marker);
	}, false);
}
