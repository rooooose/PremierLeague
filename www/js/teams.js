var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost/PremierLeague/www/teams.php",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  console.log(response);
});