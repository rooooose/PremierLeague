$(document).ready(function(){

$('body').on('click','.square', function() {

function apparition_page2(){
        $( '.square' ).click(function() {
          $('.page2').addClass("active");
        });

        $( '.cross' ).click(function() {
          $('.page2').removeClass("active");
        });
      }
      apparition_page2();

      function updateURL() {
        $( '.square' ).click(function() {
          if (history.pushState) {
              var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id='+$(this).attr('data-id');
              window.history.pushState({path:newurl},'',newurl);
          }
      });
    }
    updateURL();
    
})

    function modif_menu(){
        $( '.img_container' ).click(function() {
          $(this).addClass("active");
          $('.img_container').not(this).removeClass("active");
        });


      }
      modif_menu();


      function filtre_noms() {
        $(".search_club").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $(".square, .rank").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      }
      filtre_noms();
      
   



 });

      