$(document).foundation();

$(function() {
  var feed = new Instafeed({
	        get: 'user',
	        userId: '1745229676',
	        accessToken: '1745229676.1677ed0.f8cd9c63b0344162b59ce3a74b5cca23',
	        template: '<div class="column"><img src="{{image}}"/></div>',
	        resolution: 'standard_resolution'
    });
    feed.run();
})