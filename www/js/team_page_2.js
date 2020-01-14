
var id_team;
var dateBirth;
var dateBirthModif;
var age;

$('body').on('click','.square', function() {

      
        $( '.square' ).click(function() {
         
        	id_team=$(this).attr('data-id');

        	


        	var settings = {
			  "async": true,
			  "crossDomain": true,
			  "url": "./php/team_page_2.php/?id="+id_team,
			  "method": "GET",
			}

			$.ajax(settings).done(function (response) {

				response =JSON.parse(response);


				for(var i=0;i<response.squad.length;i++){

					dateBirth = moment(response.squad[i].dateOfBirth);
					dateBirthModif = dateBirth.format('LL'); 

					response.squad[i].dateOfBirth = dateBirthModif;
 
					age = moment().diff(dateBirthModif, 'years',false);
					response.squad[i].age = age;


					console.log(response.squad[i].role);
					
					if(response.squad[i].role == "COACH"){
        				var head_coach = response.squad[i].name;

        			}
        			console.log(head_coach);

        		}

				
				
				
			  console.log(response);


			  //date


			  $.get('template/team_header.mst', function(template) {
			    var rendered = Mustache.render(template, {crestUrl: response.crestUrl,
			    name: response.name,
				venue: response.venue,
				website: response.website,
				head_coach: head_coach});
			    $('.page2 header').html(rendered);
			  });
			  

			  $.get('template/squad.mst', function(template) {
					   	var rendered = Mustache.render(template, {squad: response.squad});
					    $('.page2 .ranks_container').html(rendered);
			  });



			  

			});
			  
			  


		});




})

	