var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost/PremierLeague/www/php/standings.php",
  "method": "GET",
  "headers": {
    "x-auth-token": "e5b6726b819e4b72ab592afb5cc3f151"
  }
}

$.ajax(settings).done(function (response) {
	response =JSON.parse(response);
  	console.log(response);

  	$.get('template/standings.mst', function(template) {
	    var rendered = Mustache.render(template, {standings: response.standings[0].table});
	    $('.ranks').html(rendered);
	  });
});