(function (win, doc) {
	'use strict';

	var model = {
		startCoords: {
			lat: 53.1269068,
			lng: 18.0282105
		},
		places: [
			// template
			// {
			// 	name: '',
			// 	position: {
			// 		lat: ,
			// 		lng:
			// 	}
			// }
			{
				name: 'Opera Nova',
				position: {
					lat: 53.124556,
					lng: 17.997279
				}
			},
			{
				name: 'Focus Park',
				position: {
					lat: 53.1247133,
					lng: 18.0180284
				}
			}
		]
	};


	var ViewModel = function () {
		var self = this;

		self.map = {};
		self.places = ko.observableArray(model.places);
		self.markers = ko.observableArray([]);

		/**
		 * Assings settings to objects for Google Maps script to use at
		 * initialization.
		 * It is attached to the window object so the Google Maps script, which
		 * load later, can access it.
		 */
		win.initMap = function () {
			self.map = new google.maps.Map(document.querySelector('.map'), {
				center: model.startCoords,
				zoom: 12
			});

			for (var place of self.places()) {
				var marker = new google.maps.Marker({
					position: place.position,
					title: place.name,
					map: self.map,
					label: place.name.substr(0, 1)
				});

				self.markers.push(marker);
			}

			// var infoWindow = new google.maps.InfoWindow({
			// 	content: '<h2>Some text</h2><p>Even more text</p>',
			// });
			//
			//
			// marker.addListener('click', function () {
			// 	infoWindow.open(map, marker);
			// }, false);
		};

		/**
		 * Filters markers on the map based on target input's contents
		 * @param 	{object} 		data current model value; unused
		 * @param 	{Event object} 	event info
		 */
		self.filterMarkers = function (data, event) {
			var queryText = event.target.value.toLowerCase();
			var placeName;

			for (var marker of self.markers()) {
				placeName = marker.title.toLowerCase();

				if (placeName.search(queryText) === -1) {
					if (marker.map !== null)
						marker.setMap(null);
				}
				else {
					if (marker.map === null)
						marker.setMap(self.map);
				}
			}
		};

	};


	ko.applyBindings(new ViewModel());
})(window, document);
