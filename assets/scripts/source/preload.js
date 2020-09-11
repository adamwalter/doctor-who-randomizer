(function() {

	var images = [
		'/assets/images/bg-cbaker.jpg',
		'/assets/images/bg-capaldi.jpg',
		'/assets/images/bg-davison.jpg',
		'/assets/images/bg-eccleston-tennant.jpg',
		'/assets/images/bg-hartnell.jpg',
		'/assets/images/bg-mccoy.jpg',
		'/assets/images/bg-pertwee.jpg',
		'/assets/images/bg-smith.jpg',
		'/assets/images/bg-smith2.jpg',
		'/assets/images/bg-tbaker.jpg',
		'/assets/images/bg-tbaker2.jpg',
		'/assets/images/bg-troughton.jpg'
	];

	// Image preload
	window.addEventListener('load', function() {

		setTimeout(function() {

			for (var i = 0; i < images.length; i++) {
				new Image().src = images[i];
			}

		}, 1000);

	});

	// Font preload
	document.addEventListener('DOMContentLoaded', function(event) {

		WebFontConfig = {
			custom: {
				families: [
					'Arial MT Extra Bold',
					'Bureau Grotesque',
					'Contax Pro',
					'Della Robbia Bold',
					'Eurostile',
					'Futura Bold',
					'Futura Book',
					'Futura Extra Bold',
					'SF Movie Poster',
					'UniversLT Ultra Condensed',
					'Heroic Condensed Medium'
				],
				urls: [
					'/assets/css/main.css'
				]
			},
			timeout: 2000
		};

	});

})();
