
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost/PremierLeague/www/php/team_page_2.php",
	  "method": "GET",
	}

	$.ajax(settings).done(function (response) {

		response =JSON.parse(response);
	  console.log(response);
	  	//$_GET['id'] = (int) $_GET['id'];
		//$id= $_GET['id'];


	  /*$.get('template/teams.mst', function(template) {
	    var rendered = Mustache.render(template, {teams: response.teams});
	    $('.grid').html(rendered);
	  });*/

	});