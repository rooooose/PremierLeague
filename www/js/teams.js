$(document).ready(function(){


	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "./php/teams.php",
	  "method": "GET",
	}

	$.ajax(settings).done(function (response) {
		response =JSON.parse(response);
	  console.log(response);

	  $.get('template/teams.mst', function(template) {
	    var rendered = Mustache.render(template, {teams: response.teams});
	    $('.grid').html(rendered);
	  });

	});

});