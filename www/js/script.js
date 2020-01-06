$(document).ready(function(){

$('body').on('click','.square', function() {

function apparitionPage2(){
        $( '.square' ).click(function() {
          $('.page2').addClass("active");
        });

        $( '.cross' ).click(function() {
          $('.page2').removeClass("active");
        });
      }
      apparitionPage2();


    function modifMenu(){
        $( '.img_container' ).click(function() {
          $(this).addClass("active");
          $('.img_container').not(this).removeClass("active");
        });


      }
      modifMenu();
      
   

})

 });

      